import express from "express";
import path from "path";
import bodyParser from "body-parser";
import createError from "http-errors";
import { fileURLToPath } from "url";
import indexRouter from "./routes/index.js";
import usersRouter from "./routes/users.js";
import userProfileRouter from "./routes/userprofile.js";
import projectsRouter from "./routes/projects.js";
import messagesRouter from "./routes/messages.js";
import portfoliosRouter from "./routes/portfolios.js";
import db from "./db/init.js";
import dotenv from "dotenv";
import cors from 'cors';

dotenv.config();

const server = express();
const port = process.env.SERVER_PORT || 5000;

// Set up static file serving
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
server.use(express.static(path.join(__dirname, "public")));
server.use(cors());

// Middleware setup
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));

// Use routers
server.use("/", indexRouter);
server.use("/users", usersRouter);
server.use("/userprofile", userProfileRouter);
server.use("/projects", projectsRouter);
server.use("/messages", messagesRouter);
server.use("/portfolios", portfoliosRouter);

// Catch 404 and forward to error handler
server.use((req, res, next) => {
  next(createError(404));
});

server.use((err, req, res, next) => {

  const error = err && typeof err === 'object' ? err : {};

  const message = error.message || "An error occurred";
  const errorDetails = req.app.get("env") === "development" ? err : {};

    res.status(error.status || 500).json({
    error: message,
    details: errorDetails
  });
});

// Start the server
async function start() {
  try {
    await db();
    console.log("Database connected");
    server.listen(port, () => {
      console.log(`Server is running on http://localhost:${port}`);
    });
  } catch (error) {
    console.error("Failed to connect to the database", error);
    process.exit(1);
  }
}

start();

export default server;
