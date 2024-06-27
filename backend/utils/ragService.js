import { OpenAI } from "@langchain/openai";
import { ChatAnthropic } from "@langchain/anthropic";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { RetrievalQAChain } from "langchain/chains";

class RAGService {
  constructor() {
    this.openai = new OpenAI({
      openAIApiKey: process.env.OPENAI_API_KEY,
    });
    this.anthropic = new ChatAnthropic({
      anthropicApiKey: process.env.ANTHROPIC_API_KEY,
    });
    this.gemini = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY).getGenerativeModel({ model: "gemini-pro" });
  }

  async query(vectorStore, question, model) {
    let llm;
    switch (model) {
      case 'gpt':
        llm = this.openai;
        break;
      case 'claude':
        llm = this.anthropic;
        break;
      case 'gemini':
        // For Gemini, we'll need to implement a custom approach
        return this.queryGemini(vectorStore, question);
      default:
        throw new Error('Invalid model specified');
    }

    const chain = RetrievalQAChain.fromLLM(llm, vectorStore.asRetriever());
    const response = await chain.call({
      query: question,
    });

    return response.text;
  }

  async queryGemini(vectorStore, question) {
    const relevantDocs = await vectorStore.similaritySearch(question, 4);
    const context = relevantDocs.map(doc => doc.pageContent).join('\n\n');
    const prompt = `Context: ${context}\n\nQuestion: ${question}\n\nAnswer:`;
    const result = await this.gemini.generateContent(prompt);
    return result.response.text();
  }
}

export default new RAGService();