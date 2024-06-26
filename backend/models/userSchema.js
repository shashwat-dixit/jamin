import { pgTable, serial, varchar, timestamp, boolean, text } from 'drizzle-orm/pg-core';

export const users = pgTable('users', {
  id: serial('id').primaryKey(),
  email: varchar('email', { length: 255 }).notNull().unique(),
  emailVerified: timestamp('emailVerified', { mode: 'date' }),
  name: varchar('name', { length: 255 }),
  image: varchar('image', { length: 255 }),
  password: varchar('password', { length: 255 }), // For storing hashed passwords
  provider: varchar('provider', { length: 50 }), // To store the auth provider (e.g., 'google', 'github', 'credentials')
  providerAccountId: varchar('providerAccountId', { length: 255 }), // To store the account ID from the provider
});

export const accounts = pgTable('accounts', {
  id: serial('id').primaryKey(),
  userId: serial('userId').references(() => users.id).notNull(),
  type: varchar('type', { length: 255 }).notNull(),
  provider: varchar('provider', { length: 255 }).notNull(),
  providerAccountId: varchar('providerAccountId', { length: 255 }).notNull(),
  refresh_token: text('refresh_token'),
  access_token: text('access_token'),
  expires_at: integer('expires_at'),
  token_type: varchar('token_type', { length: 255 }),
  scope: varchar('scope', { length: 255 }),
  id_token: text('id_token'),
  session_state: varchar('session_state', { length: 255 }),
});

export const sessions = pgTable('sessions', {
  id: serial('id').primaryKey(),
  userId: serial('userId').references(() => users.id).notNull(),
  expires: timestamp('expires').notNull(),
  sessionToken: varchar('sessionToken', { length: 255 }).notNull().unique(),
});

export const verificationTokens = pgTable('verificationTokens', {
  identifier: varchar('identifier', { length: 255 }).notNull(),
  token: varchar('token', { length: 255 }).notNull().unique(),
  expires: timestamp('expires').notNull(),
});

// export const apiKeys = pgTable('api_keys', {
//   id: serial('id').primaryKey(),
//   userId: serial('user_id').references(() => users.id),
//   keyHash: varchar('key_hash', { length: 255 }).notNull(),
//   createdAt: timestamp('created_at').defaultNow(),
//   lastUsed: timestamp('last_used'),
//   isActive: boolean('is_active').default(true),
// });