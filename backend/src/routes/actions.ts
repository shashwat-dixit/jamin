// This route will handle all the setting, API Keys, preference or any other user related issue.
import express from "express";
import { authenticateToken } from "../middleware/auth";
const action = express.Router();

action.get("/user", authenticateToken, (req, res) => {});

action.post("/user", authenticateToken, (req, res) => {});

action.patch("/user", authenticateToken, (req, res) => {});

export default action;
