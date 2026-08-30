import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import session from "express-session";
import passport from "./config/passport.js";
import cors from "cors";

import userroute from "./routers/User.js";

dotenv.config();

const app = express();

const port = process.env.PORT || 3000;


// ==========================================
// CORS
// ==========================================

app.use(
  cors({
    origin: "https://vidyasetufrontend.netlify.app",
    credentials: true,
  })
);


// ==========================================
// BODY PARSER
// ==========================================

app.use(express.json());

app.use(
  express.urlencoded({
    extended: true,
  })
);


// ==========================================
// SESSION
// ==========================================

app.use(
  session({
    secret: process.env.SESSION_SECRET,

    resave: false,

    saveUninitialized: false,

    cookie: {
      httpOnly: true,

      // HTTPS deployment
      secure: true,

      // Allow frontend and backend on different sites
      sameSite: "none",

      maxAge: 1000 * 60 * 60 * 24 * 7,
    },
  })
);


// ==========================================
// PASSPORT
// ==========================================

app.use(passport.initialize());

app.use(passport.session());


// ==========================================
// ROUTES
// ==========================================

app.use("/user", userroute);


// ==========================================
// TEST ROUTE
// ==========================================

app.get("/", (req, res) => {
  res.json({
    message: "VidyaSetu backend is running",
  });
});


// ==========================================
// MONGODB
// ==========================================

const connectDB = async () => {
  try {
    const MONGODB_URI = process.env.MONGODB_URI;

    if (!MONGODB_URI) {
      throw new Error("MONGODB_URI is missing in .env");
    }

    await mongoose.connect(MONGODB_URI);

    console.log("Connected to MongoDB");

  } catch (error) {
    console.error(
      "MongoDB connection error:",
      error.message
    );

    process.exit(1);
  }
};


// ==========================================
// START SERVER
// ==========================================

const startServer = async () => {

  await connectDB();

  app.listen(port, () => {

    console.log(
      `Server is running on port ${port}`
    );

  });
};

startServer();