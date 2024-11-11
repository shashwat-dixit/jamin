import { ChatOpenAI } from "@langchain/openai";
import { ChatAnthropic } from "@langchain/anthropic";
import { ChatCohere } from "@langchain/cohere";
import { BaseMessage, HumanMessage, AIMessage } from "@langchain/core/messages";
import { aiModels, conversations, threads, messages } from "../../db/schema";
import { db } from "../../db";
import { eq } from "drizzle-orm";

type SupportedModels = "gpt-3.5-turbo" | "claude-3" | "cohere-command";

class ChatService {
  private modelInstances: Map<string, any> = new Map();

  constructor() {
    // Initialize chat models
    this.modelInstances.set(
      "gpt-3.5-turbo",
      new ChatOpenAI({
        modelName: "gpt-3.5-turbo",
        temperature: 0.7,
        openAIApiKey: process.env.OPEN_AI_KEY,
      })
    );

    this.modelInstances.set(
      "claude-3",
      new ChatAnthropic({
        modelName: "claude-3-sonnet-20240229",
        temperature: 0.7,
        anthropicApiKey: process.env.ANTHROPIC_KEY,
      })
    );

    this.modelInstances.set(
      "cohere-command",
      new ChatCohere({
        model: "command",
        temperature: 0.7,
        apiKey: process.env.COHERE_KEY,
      })
    );
  }

  private async getConversationHistory(
    threadId: string
  ): Promise<BaseMessage[]> {
    const chatHistory = await db.query.messages.findMany({
      where: eq(messages.threadId, threadId),
      orderBy: (messages, { asc }) => [asc(messages.createdAt)],
    });

    return chatHistory.map((msg) =>
      msg.role === "human"
        ? new HumanMessage(msg.content)
        : new AIMessage(msg.content)
    );
  }

  async chat({
    modelName,
    message,
    threadId,
    userId,
  }: {
    modelName: SupportedModels;
    message: string;
    threadId?: string;
    userId: string;
  }) {
    const model = this.modelInstances.get(modelName);
    if (!model) {
      throw new Error(`Model ${modelName} not supported`);
    }

    // Get or create conversation and thread
    let currentThreadId = threadId;
    if (!currentThreadId) {
      const newConversation = await db
        .insert(conversations)
        .values({ userId })
        .returning();

      const newThread = await db
        .insert(threads)
        .values({ conversationId: newConversation[0].id })
        .returning();

      currentThreadId = newThread[0].id;
    }

    // Get conversation history
    const history = await this.getConversationHistory(currentThreadId);

    // Get AI model ID
    const aiModel = await db.query.aiModels.findFirst({
      where: eq(aiModels.name, modelName),
    });

    if (!aiModel) {
      throw new Error(`AI model ${modelName} not found in database`);
    }

    // Store human message
    await db.insert(messages).values({
      threadId: currentThreadId,
      aiModelId: aiModel.id,
      role: "human",
      content: message,
    });

    // Get AI response
    const response = await model.invoke([
      ...history,
      new HumanMessage(message),
    ]);

    // Store AI response
    await db.insert(messages).values({
      threadId: currentThreadId,
      aiModelId: aiModel.id,
      role: "assistant",
      content: response.content,
    });

    return {
      threadId: currentThreadId,
      response: response.content,
    };
  }
}

export const chatService = new ChatService();
