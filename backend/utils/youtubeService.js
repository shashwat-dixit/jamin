import { YoutubeTranscript } from 'youtube-transcript-api';
import { RecursiveCharacterTextSplitter } from "langchain/text_splitter";
import { HNSWLib } from "@langchain/community/vectorstores/hnswlib";
import { OpenAIEmbeddings } from "@langchain/openai";

class YouTubeService {
  async getTranscript(videoUrl) {
    const videoId = this.extractVideoId(videoUrl);
    const transcript = await YoutubeTranscript.fetchTranscript(videoId);
    return transcript.map(item => item.text).join(' ');
  }

  extractVideoId(url) {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? match[2] : null;
  }

  async indexTranscript(transcript) {
    const textSplitter = new RecursiveCharacterTextSplitter({
      chunkSize: 1000,
      chunkOverlap: 200,
    });
    const splitDocs = await textSplitter.createDocuments([transcript]);
    
    const vectorStore = await HNSWLib.fromDocuments(splitDocs, new OpenAIEmbeddings());
    return vectorStore;
  }

  async queryTranscript(vectorStore, query) {
    const results = await vectorStore.similaritySearch(query, 4);
    return results;
  }
}

export default new YouTubeService();