import express from "express";
import { authenticateToken } from "../middleware/auth";

const upload = express.Router();

upload.post("/pdf", (req, res) => {});

upload.get("/researchPaper", (req, res) => {});

export default upload;
