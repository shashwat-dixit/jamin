import { Request, Response, NextFunction } from "express";
import { eq } from "drizzle-orm";
import jwt from "jsonwebtoken";
import { db } from "../db/index";
import { User, userSessions } from "../db/schema";

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
      username: string;
    };
    (req.user as any) = { id: payload.username };
    next();
  } catch (error) {
    return res.status(403).json({ message: "Invalid token" });
  }
};
