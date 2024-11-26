import express from "express";
import { sql, desc } from "drizzle-orm";
import { conversations } from "../db/schema";
import { db } from "../db";

const conversation = express.Router();

// fix the types and logic
conversation.use((req : any, res, next) => {
    // Simulate extracting the userID from an authenticated session
    // In practice, use a proper authentication mechanism like JWT or OAuth
    req.user = { id: "authenticated-user-id" }; // Example: Replace with actual user authentication logic
    next();
});

conversation.get("/conversation", async (req, res) => {
    try {
        const { id: userID } = req.user; // Extract userID from authenticated session
        if (!userID) {
            return res.status(401).json({ error: "Unauthorized: User not authenticated" });
        }

        const conversationsList = await db
            .select()
            .from(conversations)
            .where(sql`userID = ${userID}`) // Filter by authenticated user's ID
            .orderBy(desc(conversations.createdAt)); // Order conversations by creation date (latest first)

        res.json(conversationsList); // Return the list of conversations
    } catch (err) {
        const errorMessage = err instanceof Error ? err.message : "An unexpected error occurred";
        res.status(500).json({ error: errorMessage });
    }
});

conversation.patch("/conversation/:id", async (req, res) => {
    try {
        const { id } = req.params; // Extract conversation ID from the route
        const { title } = req.body; // Extract the new title from the request body
        const { id: userID } = req.user; // Extract userID from authenticated session

        // Validate input
        if (!title) {
            return res.status(400).json({ error: "Title is required" });
        }

        // Update the title for the authenticated user's conversation
        const updatedConversation = await db
            .update(conversations)
            .set({ title })
            .where(sql`id = ${id} AND userID = ${userID}`) // Ensure the conversation belongs to the user
            .returning();

        if (!updatedConversation.length) {
            return res.status(404).json({ error: "Conversation not found or not authorized" });
        }

        res.json({ message: "Conversation title updated successfully", conversation: updatedConversation[0] });
    } catch (err) {
        const errorMessage = err instanceof Error ? err.message : "An unexpected error occurred";
        res.status(500).json({ error: errorMessage });
    }
});

conversation.delete("/conversation/:id", async (req, res) => {
    try {
        const { id } = req.params; // Extract conversation ID from the route
        const { id: userID } = req.user; // Extract userID from authenticated session

        // Delete the conversation if it belongs to the authenticated user
        const deletedConversation = await db
            .delete(conversations)
            .where(sql`id = ${id} AND userID = ${userID}`)
            .returning();

        if (!deletedConversation.length) {
            return res.status(404).json({ error: "Conversation not found or not authorized" });
        }

        res.json({ message: "Conversation deleted successfully" });
    } catch (err) {
        const errorMessage = err instanceof Error ? err.message : "An unexpected error occurred";
        res.status(500).json({ error: errorMessage });
    }
});

export default conversation;
