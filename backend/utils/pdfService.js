import { DirectoryLoader } from "langchain/document_loaders/fs/directory";
import { PDFLoader } from "langchain/document_loaders/fs/pdf";
import { RecursiveCharacterTextSplitter } from "langchain/text_splitter";
import { HNSWLib } from "@langchain/community/vectorstores/hnswlib";
import { OpenAIEmbeddings } from "@langchain/openai";
import path from 'path';

class PDFService {
  async loadAndIndexPDF(filePath) {
    const loader = new DirectoryLoader(path.dirname(filePath), {
      ".pdf": (path) => new PDFLoader(path, {
        pdfjs: () => import("pdf-parse/lib/pdf.js/v1.10.100/build/pdf.js")
      })
    });

    const docs = await loader.load();
    
    const textSplitter = new RecursiveCharacterTextSplitter({
      chunkSize: 1000,
      chunkOverlap: 200,
    });
    const splitDocs = await textSplitter.splitDocuments(docs);
    
    const vectorStore = await HNSWLib.fromDocuments(splitDocs, new OpenAIEmbeddings());
    return vectorStore;
  }

  async queryPDF(vectorStore, query) {
    const results = await vectorStore.similaritySearch(query, 4);
    return results;
  }
}

export default new PDFService();