import express from "express";
import { authenticateToken } from "../middleware/auth";

const upload = express.Router();

upload.post("/pdf", (req, res) => {});

export default upload;
