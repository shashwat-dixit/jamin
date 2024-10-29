//imports
import express from "express";

// routes
import auth from "./routes/auth";
import conversation from "./routes/conversation";
import upload from "./routes/upload";
import action from "./routes/actions";

//middleware
import { authenticateToken } from "./middleware/auth";

const app = express();

app.use("/auth", auth);
app.use("/api/user/:id", authenticateToken, conversation);
app.use("/api/user/:id", authenticateToken, upload);
app.use("/api/user/:id", authenticateToken, action);

app.get("/", (req, res) => {
  res.send("hello, world!");
});

app.listen(3000);
