import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import session from "express-session";
import passport from "passport";
import cors from "cors";

import userroute from "./routers/User.js";

dotenv.config();

const app = express();

const port = process.env.PORT || 3000;


// ===============================
// Environment Variables
// ===============================

if (!process.env.SESSION_SECRET) {
  throw new Error("SESSION_SECRET is missing in .env");
}

if (!process.env.MONGODB_URI) {
  throw new Error("MONGODB_URI is missing in .env");
}


// ===============================
// Middleware
// ===============================

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

app.use(express.json());


// ===============================
// Session
// ===============================

app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,

    cookie: {
      httpOnly: true,
      secure: false,
      maxAge: 1000 * 60 * 60 * 24 * 7,
    },
  })
);


// ===============================
// Passport
// ===============================

app.use(passport.initialize());
app.use(passport.session());


// ===============================
// Routes
// ===============================

app.use("/user", userroute);


// ===============================
// Database
// ===============================

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);

    console.log("Connected to MongoDB");
  } catch (error) {
    console.error(
      "Error connecting to MongoDB:",
      error.message
    );

    process.exit(1);
  }
};


// ===============================
// Start Server
// ===============================

const startServer = async () => {
  await connectDB();

  app.listen(port, () => {
    console.log(
      `Server is listening on port ${port}`
    );
  });
};

startServer();