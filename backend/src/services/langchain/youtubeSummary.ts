import { YoutubeLoader } from "@langchain/community/document_loaders/web/youtube";
import { db } from "../../db";
import {Document} from "../../db/schema"

const loader = YoutubeLoader.createFromUrl("", {
  language: "en",
  addVideoInfo: true,
});

async YTLoader({
  url
} : {
  
}
)

// const docs = await loader.load();