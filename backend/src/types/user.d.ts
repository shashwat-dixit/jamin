// types/user.ts

export interface User {
  id: string;
  username: string;
  email: string;
  passwordHash: string | null;
  googleId: string | null;
  githubId: string | null;
  createdAt: Date | null; // Changed from Date | undefined
  updatedAt: Date | null; // Changed from Date | undefined
}

// Extending Express types for Passport
declare global {
  namespace Express {
    interface User {
      id: string;
      username: string;
      email: string;
      passwordHash: string | null;
      googleId: string | null;
      githubId: string | null;
      createdAt: Date | null;
      updatedAt: Date | null;
    }
  }
}
