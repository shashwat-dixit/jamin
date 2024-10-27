interface User {
  id: string;
  username: string;
  email: string;
  passwordHash?: string;
  googleId?: string;
  githubId?: string;
}

export { User };
