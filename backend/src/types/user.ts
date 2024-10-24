// src/types/user.ts
import { Document, Model } from "mongoose";

// Base user interface
export interface IUser {
  id: string;
  username: string;
  email: string;
  passwordHash?: string;
  googleId?: string;
  githubId?: string;
}

// Mongoose document interface
export interface IUserDocument extends IUser, Document {}

// Mongoose model interface
export interface IUserModel extends Model<IUserDocument> {
  findByUsername(username: string): Promise<IUserDocument | null>;
  findByGoogleId(googleId: string): Promise<IUserDocument | null>;
  findByGithubId(githubId: string): Promise<IUserDocument | null>;
}

// Handler-specific types
export interface CreateUserInput {
  username: string;
  email: string;
  password?: string;
  googleId?: string;
  githubId?: string;
}

export interface UpdateUserInput {
  username?: string;
  email?: string;
  password?: string;
}

// Auth-specific types
export interface UserAuthResponse {
  user: UserProfile;
  token: string;
}

export interface UserProfile {
  id: string;
  username: string;
  email: string;
}
