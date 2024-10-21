import express, { Request, Response } from "express";
import session from "express-session";
import passport from "../src/config/passport";
import authRoutes from "../src/routes/auth";

const app = express();

// Middleware
app.use(express.json());
app.use(
  session({
    secret: process.env.SESSION_SECRET || "your_session_secret",
    resave: false,
    saveUninitialized: false,
  })
);
app.use(passportConfig.initialize());
app.use(passportConfig.session());

// Routes
app.use("/auth", authRoutes);

// Protected route example
app.get("/api/profile", (req: Request, res: Response) => {
  if (req.isAuthenticated()) {
    res.json({ user: req.user });
  } else {
    res.status(401).json({ message: "Unauthorized" });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
