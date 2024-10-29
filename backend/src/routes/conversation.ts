import express from "express";

const conversation = express.Router();

conversation.get("/conversation", (req, res) => {});
conversation.post("/conversation", (req, res) => {});
conversation.patch("/conversation", (req, res) => {});
conversation.delete("/conversation", (req, res) => {});

export default conversation;
