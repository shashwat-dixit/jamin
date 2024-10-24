import {
  pgTable,
  text,
  timestamp,
  boolean,
  jsonb,
  uuid,
} from "drizzle-orm/pg-core";
import type { InferSelectModel, InferInsertModel } from "drizzle-orm";
import { relations } from "drizzle-orm";

export const users = pgTable("users", {
  id: uuid("id").defaultRandom().primaryKey(),
  username: text("username").notNull().unique(),
  email: text("email").notNull().unique(),
  passwordHash: text("password_hash"),
  googleId: text("google_id").unique(),
  githubId: text("github_id").unique(),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});

export const userSessions = pgTable("user_sessions", {
  id: uuid("id").defaultRandom().primaryKey(),
  userId: uuid("user_id").references(() => users.id),
  accessToken: text("access_token").notNull().unique(),
  refreshToken: text("refresh_token").unique(),
  accessTokenExpiresAt: timestamp("access_token_expires_at").notNull(),
  refreshTokenExpiresAt: timestamp("refresh_token_expires_at"),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});

export const userApiKeys = pgTable("user_api_keys", {
  id: uuid("id").defaultRandom().primaryKey(),
  userId: uuid("user_id").references(() => users.id),
  provider: text("provider").notNull(),
  apiKey: text("api_key").notNull(),
  isActive: boolean("is_active").default(true),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});

export const aiModels = pgTable("ai_models", {
  id: uuid("id").defaultRandom().primaryKey(),
  name: text("name").notNull().unique(),
  provider: text("provider").notNull(),
  isActive: boolean("is_active").default(true),
});

export const conversations = pgTable("conversations", {
  id: uuid("id").defaultRandom().primaryKey(),
  userId: uuid("user_id").references(() => users.id),
  title: text("title"),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});

export const threads = pgTable("threads", {
  id: uuid("id").defaultRandom().primaryKey(),
  conversationId: uuid("conversation_id").references(() => conversations.id),
  parentThreadId: uuid("parent_thread_id"),
  createdAt: timestamp("created_at").defaultNow(),
});

export const threadsRelations = relations(threads, ({ one, many }) => ({
  parentThread: one(threads, {
    fields: [threads.parentThreadId],
    references: [threads.id],
    relationName: "parentChildThread",
  }),
  childThreads: many(threads, {
    relationName: "parentChildThread",
  }),
  conversation: one(conversations, {
    fields: [threads.conversationId],
    references: [conversations.id],
  }),
}));

export const messages = pgTable("messages", {
  id: uuid("id").defaultRandom().primaryKey(),
  threadId: uuid("thread_id").references(() => threads.id),
  aiModelId: uuid("ai_model_id").references(() => aiModels.id),
  role: text("role").notNull(),
  content: text("content").notNull(),
  createdAt: timestamp("created_at").defaultNow(),
});

export const pdfs = pgTable("pdfs", {
  id: uuid("id").defaultRandom().primaryKey(),
  userId: uuid("user_id").references(() => users.id),
  filename: text("filename").notNull(),
  content: text("content").notNull(),
  analysis: text("analysis"),
  aiModelId: uuid("ai_model_id").references(() => aiModels.id),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});

export const videos = pgTable("videos", {
  id: uuid("id").defaultRandom().primaryKey(),
  userId: uuid("user_id").references(() => users.id),
  url: text("url").notNull(),
  title: text("title"),
  analysis: text("analysis"),
  aiModelId: uuid("ai_model_id").references(() => aiModels.id),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});

export const images = pgTable("images", {
  id: uuid("id").defaultRandom().primaryKey(),
  userId: uuid("user_id").references(() => users.id),
  prompt: text("prompt").notNull(),
  url: text("url").notNull(),
  metadata: jsonb("metadata"),
  createdAt: timestamp("created_at").defaultNow(),
});

export const researchPapers = pgTable("research_papers", {
  id: uuid("id").defaultRandom().primaryKey(),
  userId: uuid("user_id").references(() => users.id),
  title: text("title").notNull(),
  authors: text("authors").notNull(),
  content: text("content").notNull(),
  analysis: text("analysis"),
  aiModelId: uuid("ai_model_id").references(() => aiModels.id),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});

export const documents = pgTable("documents", {
  id: uuid("id").defaultRandom().primaryKey(),
  content: text("content").notNull(),
  embedding: jsonb("embedding"),
  metadata: jsonb("metadata"),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});

export const documentChunks = pgTable("document_chunks", {
  id: uuid("id").defaultRandom().primaryKey(),
  documentId: uuid("document_id").references(() => documents.id),
  content: text("content").notNull(),
  embedding: jsonb("embedding"),
  metadata: jsonb("metadata"),
  createdAt: timestamp("created_at").defaultNow(),
});

// Type inference
export type User = InferSelectModel<typeof users>;
export type NewUser = InferInsertModel<typeof users>;

export type Session = InferSelectModel<typeof userSessions>;
export type NewSession = InferInsertModel<typeof userSessions>;

export type UserApiKey = InferSelectModel<typeof userApiKeys>;
export type NewUserApiKey = InferInsertModel<typeof userApiKeys>;

export type AiModel = InferSelectModel<typeof aiModels>;
export type NewAiModel = InferInsertModel<typeof aiModels>;

export type Conversation = InferSelectModel<typeof conversations>;
export type NewConversation = InferInsertModel<typeof conversations>;

export type Thread = InferSelectModel<typeof threads>;
export type NewThread = InferInsertModel<typeof threads>;

export type Message = InferSelectModel<typeof messages>;
export type NewMessage = InferInsertModel<typeof messages>;

export type Pdf = InferSelectModel<typeof pdfs>;
export type NewPdf = InferInsertModel<typeof pdfs>;

export type Video = InferSelectModel<typeof videos>;
export type NewVideo = InferInsertModel<typeof videos>;

export type Image = InferSelectModel<typeof images>;
export type NewImage = InferInsertModel<typeof images>;

export type ResearchPaper = InferSelectModel<typeof researchPapers>;
export type NewResearchPaper = InferInsertModel<typeof researchPapers>;

export type Document = InferSelectModel<typeof documents>;
export type NewDocument = InferInsertModel<typeof documents>;

export type DocumentChunk = InferSelectModel<typeof documentChunks>;
export type NewDocumentChunk = InferInsertModel<typeof documentChunks>;
