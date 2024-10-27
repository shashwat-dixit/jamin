import express from "express";
import passport from "passport";
import bcrypt from "bcrypt";
import { db } from "../db/index";
import { users, userSessions } from "../db/schema";
import jwt from "jsonwebtoken";

const router = express.Router();

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
router.post("/register", async (req, res, next) => {
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

router.post("/login", (req, res, next) => {
  passport.authenticate("local", async (err, user, info) => {
    if (err) return next(err);
    if (!user) return res.status(401).json(info);

    const tokens = await generateTokens(user.id);
    res.json({ user, ...tokens });
  })(req, res, next);
});

// Google auth routes
router.get(
  "/google",
  passport.authenticate("google", {
    scope: ["profile", "email"],
  })
);

router.get(
  "/google/callback",
  passport.authenticate("google", { session: false }),
  async (req, res) => {
    const tokens = await generateTokens(req.user!.id);
    res.redirect(`/auth-success?tokens=${JSON.stringify(tokens)}`);
  }
);

// GitHub auth routes
router.get(
  "/github",
  passport.authenticate("github", {
    scope: ["user:email"],
  })
);

router.get(
  "/github/callback",
  passport.authenticate("github", { session: false }),
  async (req, res) => {
    const tokens = await generateTokens(req.user!.id);
    res.redirect(`/auth-success?tokens=${JSON.stringify(tokens)}`);
  }
);

// Refresh token route
router.post("/refresh-token", async (req, res) => {
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

export default router;

// src/middleware/auth.ts
import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { db } from "../config/db";
import { userSessions } from "../schema";

export const authenticateToken = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (!token) {
    return res.status(401).json({ message: "No token provided" });
  }

  try {
    const session = await db
      .select()
      .from(userSessions)
      .where(eq(userSessions.accessToken, token))
      .limit(1);

    if (!session[0] || new Date() > session[0].accessTokenExpiresAt) {
      return res.status(401).json({ message: "Token expired" });
    }

    const payload = jwt.verify(token, process.env.JWT_SECRET!) as {
      userId: string;
    };
    req.user = { id: payload.userId };
    next();
  } catch (error) {
    return res.status(403).json({ message: "Invalid token" });
  }
};
