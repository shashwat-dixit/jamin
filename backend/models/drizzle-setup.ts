import { Drizzle } from 'drizzle-orm';
import { Pool } from 'pg';
import dotenv from 'dotenv';

dotenv.config();

const pool = new Pool({
  user: process.env.PG_USER,
  host: process.env.PG_HOST,
  database: process.env.PG_DATABASE,
  password: process.env.PG_PASSWORD,
  port: Number(process.env.PG_PORT),
});

const drizzle = new Drizzle(pool);

const usersTable = drizzle.defineTable('users', {
  id: drizzle.serial().primaryKey(),
  username: drizzle.string().notNull(),
  email: drizzle.string().unique().notNull(),
  password_hash: drizzle.string().notNull(),
  created_at: drizzle.timestamp().defaultTo(drizzle.now()),
});

const chatsTable = drizzle.defineTable('chats', {
  id: drizzle.serial().primaryKey(),
  user_id: drizzle.integer().notNull().references(usersTable.id),
  chat_id: drizzle.string().unique().notNull(),
  created_at: drizzle.timestamp().defaultTo(drizzle.now()),
});

export { drizzle, usersTable, chatsTable };
