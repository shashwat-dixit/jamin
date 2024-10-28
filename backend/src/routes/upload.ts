import express from "express";
import { authenticateToken } from "../middleware/auth";

const upload = express.Router();

upload.post("/pdf", authenticateToken, (req, res) => {});

upload.get("/researchPaper", authenticateToken, (req, res) => {});

export default upload;
