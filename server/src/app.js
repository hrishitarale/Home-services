const express = require("express");
const cors = require("cors");

const authRoutes = require("./routes/authRoutes");

const mongoose = require("mongoose");

const app = express();

app.use(
  cors({
    origin: "http://localhost:5173",
  })
);

app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    message: "HomeServe API is running",
  });
});

app.get("/api/health", (req, res) => {
  const databaseStatus =
    mongoose.connection.readyState === 1
      ? "connected"
      : "disconnected";

  res.json({
    success: true,
    server: "running",
    database: databaseStatus,
  });
});

// Authentication routes
app.use("/api/auth", authRoutes);

module.exports = app;