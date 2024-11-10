//imports
import express from "express";
import session from "express-session";
import passport from "passport";
import cors from "cors";
import cookieParser from "cookie-parser";
import "./config/passport";

// routes
import auth from "./routes/auth";
// import conversation from "./routes/conversation";
// import upload from "./routes/upload";
// import action from "./routes/actions";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

const PORT = process.env.PORT || 3000;

// Middleware setup

app.use(
  cors({
    origin: process.env.FRONTEND_URL || "http://localhost:5173",
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

// Session configuration
app.use(
  session({
    secret: process.env.SESSION_SECRET || "your-secret-key",
    resave: false,
    saveUninitialized: false,
    cookie: {
      secure: process.env.NODE_ENV === "production",
      maxAge: 24 * 60 * 60 * 1000, // 24 hours
    },
  })
);

// Initialize Passport
app.use(passport.initialize());
app.use(passport.session());

// Routes
app.use("/auth", auth);

// Health check route
app.get("/health", (req, res) => {
  res.json({ status: "OK" });
});

// Error handling middleware
app.use(
  (
    err: Error,
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) => {
    console.error(err.stack);
    res.status(500).json({ message: "Something went wrong!" });
  }
);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

// app.use("/auth", auth);
// app.use("/api/user/:id", authenticateToken, conversation);
// app.use("/api/user/:id", authenticateToken, upload);
// app.use("/api/user/:id", authenticateToken, action);

// app.get("/", (req, res) => {
//   res.send("hello, world!");
// });
