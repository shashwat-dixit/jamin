import express from "express";
import passport from "passport";
import bcrypt from "bcrypt";
import { db } from "../db/index";
import { users, userSessions } from "../db/schema";
import jwt from "jsonwebtoken";
import { eq } from "drizzle-orm";
import { User } from "../types/user";

const auth = express.Router();

// Helper function to generate tokens
async function generateTokens(userId: string) {
  const accessToken = jwt.sign({ userId }, process.env.JWT_SECRET!, {
    expiresIn: "15m",
  });
  const refreshToken = jwt.sign({ userId }, process.env.JWT_REFRESH_SECRET!, {
    expiresIn: "7d",
  });

  const accessTokenExpiresAt = new Date(Date.now() + 15 * 60 * 1000); // 15 minutes
  const refreshTokenExpiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000); // 7 days

  await db.insert(userSessions).values({
    userId,
    accessToken,
    refreshToken,
    accessTokenExpiresAt,
    refreshTokenExpiresAt,
  });

  return { accessToken, refreshToken };
}

// Local auth routes
auth.post("/register", async (req, res, next) => {
  try {
    const { email, password, username } = req.body;
    const passwordHash = await bcrypt.hash(password, 10);

    const newUser = await db
      .insert(users)
      .values({
        email,
        username,
        passwordHash,
      })
      .returning();

    const tokens = await generateTokens(newUser[0].id);
    res.json({ user: newUser[0], ...tokens });
  } catch (error) {
    next(error);
  }
});

auth.post("/login", (req, res, next) => {
  passport.authenticate(
    "local",
    async (err: Error | null, user: User | null, info: any) => {
      if (err) return next(err);
      if (!user) return res.status(401).json(info);

      const tokens = await generateTokens(user.id);
      res.json({ user, ...tokens });
    }
  )(req, res, next);
});

// fix these routes

// Google auth routes
auth.get(
  "/google",
  passport.authenticate("google", {
    scope: ["profile", "email"],
  })
);

auth.get(
  "/google/callback",
  passport.authenticate("google", { session: false }),
  async (req, res) => {
    const tokens = await generateTokens((req.user as User)!.id);
    res.redirect(`/auth-success?tokens=${JSON.stringify(tokens)}`);
  }
);

// GitHub auth routes
auth.get(
  "/github",
  passport.authenticate("github", {
    scope: ["user:email"],
  })
);

auth.get(
  "/github/callback",
  passport.authenticate("github", { session: false }),
  async (req, res) => {
    const tokens = await generateTokens((req.user as User)!.id);
    res.redirect(`/auth-success?tokens=${JSON.stringify(tokens)}`);
  }
);

// Refresh token route
auth.post("/refresh-token", async (req, res) => {
  const { refreshToken } = req.body;

  try {
    const session = await db
      .select()
      .from(userSessions)
      .where(eq(userSessions.refreshToken, refreshToken))
      .limit(1);

    if (!session[0] || new Date() > session[0].refreshTokenExpiresAt!) {
      return res.status(401).json({ message: "Invalid refresh token" });
    }

    const tokens = await generateTokens(session[0].userId);
    res.json(tokens);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

export default auth;
