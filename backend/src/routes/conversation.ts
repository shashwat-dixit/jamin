import express from "express";
import { authenticateToken } from "../middleware/auth";

const converstion = express.Router();

converstion.get("/conversation", authenticateToken, (req, res) => {});
converstion.post("/conversation", authenticateToken, (req, res) => {});
converstion.patch("/conversation", authenticateToken, (req, res) => {});
converstion.delete("/conversation", authenticateToken, (req, res) => {});
