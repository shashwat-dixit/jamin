import passport from "passport";
import { Strategy as LocalStrategy } from "passport-local";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import { Strategy as GitHubStrategy } from "passport-github2";
import { Profile as GoogleProfile } from "passport-google-oauth20";
import { Profile as GitHubProfile } from "passport-github2";
import bcrypt from "bcrypt";
import { db } from "../db/index";
import { users } from "../db/schema";
import { eq } from "drizzle-orm";
import { User } from "../types/user";

// Passport serialization
passport.serializeUser((user: User, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id: string, done) => {
  try {
    const user = await db.select().from(users).where(eq(users.id, id)).limit(1);
    done(null, user[0] || null);
  } catch (error) {
    done(error, null);
  }
});

// Local Strategy
passport.use(
  new LocalStrategy(
    {
      usernameField: "email",
      passwordField: "password",
    },
    async (email, password, done) => {
      try {
        const user = await db
          .select()
          .from(users)
          .where(eq(users.email, email))
          .limit(1);

        if (!user[0] || !user[0].passwordHash) {
          return done(null, false, { message: "Invalid credentials" });
        }

        const isValid = await bcrypt.compare(password, user[0].passwordHash);

        if (!isValid) {
          return done(null, false, { message: "Invalid credentials" });
        }

        return done(null, user[0]);
      } catch (error) {
        return done(error);
      }
    }
  )
);

// Google Strategy
passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
      callbackURL: "/auth/google/callback",
    },
    async (accessToken, refreshToken, profile: GoogleProfile, done) => {
      try {
        let user = await db
          .select()
          .from(users)
          .where(eq(users.googleId, profile.id))
          .limit(1);

        if (user[0]) {
          return done(null, user[0]);
        }

        // Create new user if doesn't exist
        const newUser = await db
          .insert(users)
          .values({
            email: profile.emails![0].value,
            username: profile.displayName,
            googleId: profile.id,
          })
          .returning();

        return done(null, newUser[0]);
      } catch (error) {
        return done(error);
      }
    }
  )
);

// GitHub Strategy
passport.use(
  new GitHubStrategy(
    {
      clientID: process.env.GITHUB_CLIENT_ID!,
      clientSecret: process.env.GITHUB_CLIENT_SECRET!,
      callbackURL: "/auth/github/callback",
    },
    async (
      accessToken: string,
      refreshToken: string,
      profile: GitHubProfile,
      done
    ) => {
      try {
        let user = await db
          .select()
          .from(users)
          .where(eq(users.githubId, profile.id))
          .limit(1);

        if (user[0]) {
          return done(null, user[0]);
        }

        // Create new user if doesn't exist
        const newUser = await db
          .insert(users)
          .values({
            email: profile.emails![0].value,
            username: profile.username!,
            githubId: profile.id,
          })
          .returning();

        return done(null, newUser[0]);
      } catch (error) {
        return done(error);
      }
    }
  )
);

export default passport;
