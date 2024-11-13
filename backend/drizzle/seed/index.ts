import { drizzle } from "drizzle-orm/node-postgres";
import { Pool } from "pg";
import * as schema from "../../src/db/schema";

// Explicit pool configuration
const pool = new Pool({
  host: "localhost",
  port: 5433,
  user: "root",
  password: "mysecretpassword",
  database: "postgres",
});

// Test connection function
async function testConnection() {
  try {
    const client = await pool.connect();
    await client.query("SELECT 1");
    console.log("✅ Database connection successful");
    client.release();
    return true;
  } catch (error) {
    console.error("❌ Database connection failed:", error);
    return false;
  }
}

const db = drizzle(pool, { schema });

async function seed() {
  try {
    // Test connection first
    const isConnected = await testConnection();
    if (!isConnected) {
      throw new Error("Failed to establish database connection");
    }

    console.log("🌱 Starting seed process...");

    // Create users
    console.log("👥 Creating users...");
    const [user1, user2] = await db
      .insert(schema.users)
      .values([
        {
          username: "john_doe",
          email: "john@example.com",
          passwordHash: "hashed_password_1",
        },
        {
          username: "jane_smith",
          email: "jane@example.com",
          passwordHash: "hashed_password_2",
        },
      ])
      .returning();
    console.log("✅ Users created successfully");

    // Create AI models
    console.log("🤖 Creating AI models...");
    const [gpt4, dalle] = await db
      .insert(schema.aiModels)
      .values([
        {
          name: "GPT-4",
          provider: "OpenAI",
          isActive: true,
        },
        {
          name: "DALL-E 3",
          provider: "OpenAI",
          isActive: true,
        },
      ])
      .returning();
    console.log("✅ AI models created successfully");

    // Create API keys for users
    console.log("🔑 Creating API keys...");
    await db.insert(schema.userApiKeys).values([
      {
        userId: user1.id,
        provider: "OpenAI",
        apiKey: "sk-fake-key-1",
      },
      {
        userId: user2.id,
        provider: "OpenAI",
        apiKey: "sk-fake-key-2",
      },
    ]);
    console.log("✅ API keys created successfully");

    // Create conversations
    console.log("💬 Creating conversations...");
    const [conversation1] = await db
      .insert(schema.conversations)
      .values([
        {
          userId: user1.id,
          title: "AI Discussion",
        },
      ])
      .returning();
    console.log("✅ Conversations created successfully");

    // Create threads
    console.log("🧵 Creating threads...");
    const [parentThread] = await db
      .insert(schema.threads)
      .values([
        {
          conversationId: conversation1.id,
        },
      ])
      .returning();

    const [childThread] = await db
      .insert(schema.threads)
      .values([
        {
          conversationId: conversation1.id,
          parentThreadId: parentThread.id,
        },
      ])
      .returning();
    console.log("✅ Threads created successfully");

    // Create messages
    console.log("📝 Creating messages...");
    await db.insert(schema.messages).values([
      {
        threadId: parentThread.id,
        aiModelId: gpt4.id,
        role: "user",
        content: "Can you explain how neural networks work?",
      },
      {
        threadId: parentThread.id,
        aiModelId: gpt4.id,
        role: "assistant",
        content:
          "Neural networks are computational systems inspired by biological neural networks...",
      },
      {
        threadId: childThread.id,
        aiModelId: gpt4.id,
        role: "user",
        content: "Can you elaborate on backpropagation?",
      },
    ]);
    console.log("✅ Messages created successfully");

    // Create documents (generalized for PDFs, videos, research papers)
    console.log("📄 Creating documents...");
    const [pdfDoc, videoDoc, researchDoc] = await db
      .insert(schema.documents)
      .values([
        {
          userId: user1.id,
          type: "pdf",
          title: "Research Paper on AI",
          content: "PDF content here...",
          analysis: "This paper discusses advanced AI techniques...",
          aiModelId: gpt4.id,
          metadata: { filename: "research.pdf" },
        },
        {
          userId: user1.id,
          type: "video",
          title: "AI Tutorial",
          url: "https://example.com/video1",
          analysis: "This video explains machine learning concepts...",
          aiModelId: gpt4.id,
          metadata: { duration: "15:30" },
        },
        {
          userId: user1.id,
          type: "research_paper",
          title: "Advances in Neural Networks",
          authors: "John Doe, Jane Smith",
          content: "Research paper content here...",
          analysis:
            "This paper presents novel approaches to neural network architecture...",
          aiModelId: gpt4.id,
          metadata: { authors: ["John Doe", "Jane Smith"] },
        },
      ])
      .returning();
    console.log("✅ Documents created successfully");

    // Create document chunks for one of the documents
    console.log("📑 Creating document chunks...");
    await db.insert(schema.documentChunks).values([
      {
        documentId: pdfDoc.id,
        content: "Chunk 1 content...",
        embedding: { vector: [0.2, 0.3, 0.4] },
        metadata: { chunk_number: 1 },
      },
      {
        documentId: pdfDoc.id,
        content: "Chunk 2 content...",
        embedding: { vector: [0.3, 0.4, 0.5] },
        metadata: { chunk_number: 2 },
      },
    ]);
    console.log("✅ Document chunks created successfully");

    // Create images
    console.log("🖼️ Creating images...");
    await db.insert(schema.images).values([
      {
        userId: user1.id,
        prompt: "A futuristic city with flying cars",
        url: "https://example.com/image1.jpg",
        metadata: {
          width: 1024,
          height: 1024,
          model: "dalle-3",
        },
      },
    ]);
    console.log("✅ Images created successfully");

    console.log("✨ All seed data inserted successfully!");
    return true;
  } catch (error) {
    console.error("❌ Error in seed operation:", error);
    if (error instanceof Error) {
      console.error("Error name:", error.name);
      console.error("Error message:", error.message);
      console.error("Error stack:", error.stack);
    }
    return false;
  } finally {
    try {
      await pool.end();
      console.log("🔌 Database connection closed");
    } catch (error) {
      console.error("❌ Error closing database connection:", error);
    }
  }
}

// Run the seed function with proper error handling
(async () => {
  try {
    const success = await seed();
    if (!success) {
      console.error("❌ Seeding failed");
      process.exit(1);
    }
    console.log("🎉 Seeding completed successfully");
    process.exit(0);
  } catch (error) {
    console.error("💥 Fatal error during seeding:", error);
    process.exit(1);
  }
})();
