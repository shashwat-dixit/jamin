import { OpenAI } from "@langchain/openai";
import { ChatAnthropic } from "@langchain/anthropic";
import { GoogleGenerativeAI } from "@google/generative-ai";

class AIService {
  constructor() {
    this.openai = new OpenAI({
      openAIApiKey: process.env.OPENAI_API_KEY,
    });
    this.anthropic = new ChatAnthropic({
      anthropicApiKey: process.env.ANTHROPIC_API_KEY,
    });
    this.gemini = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY);
  }

  async generateResponse(prompt, model) {
    switch (model) {
      case 'gpt':
        return await this.openai.invoke(prompt);
      case 'claude':
        return await this.anthropic.invoke(prompt);
      case 'gemini':
        const geminiModel = this.gemini.getGenerativeModel({ model: "gemini-pro" });
        const result = await geminiModel.generateContent(prompt);
        return result.response.text();
      default:
        throw new Error('Invalid model specified');
    }
  }
}

export default new AIService();