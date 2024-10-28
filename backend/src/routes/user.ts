import express from "express";
import { authenticateToken } from "../middleware/auth";
const user = express.Router();

user.get("/user", authenticateToken, (req, res) => {});

user.post("/user", authenticateToken, (req, res) => {});

user.patch("/user", authenticateToken, (req, res) => {});
