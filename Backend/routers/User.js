import express from "express";
import bcrypt from "bcryptjs";
import passport from "../config/passport.js";

import User from "../models/User.js";

const router = express.Router();


// ==========================================
// REGISTER
// POST /user/register
// ==========================================

router.post("/register", async (req, res) => {

  try {

    const {
      username,
      email,
      password,
    } = req.body;


    // Check required fields

    if (!username || !email || !password) {

      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });

    }


    // Check existing user

    const existingUser = await User.findOne({
      email: email.toLowerCase(),
    });


    if (existingUser) {

      return res.status(409).json({
        success: false,
        message: "Email already registered",
      });

    }


    // Hash password

    const hashedPassword = await bcrypt.hash(
      password,
      12
    );


    // Create user

    const user = await User.create({

      name: username,

      email: email.toLowerCase(),

      password: hashedPassword,

    });
    
    console.log("registered successfully");

    return res.status(201).json({

      success: true,

      message: "User registered successfully",

      user: {
        id: user._id,
        name: user.name,
        email: user.email,
      },

    });


  } catch (error) {

    console.error(
      "Register error:",
      error
    );


    return res.status(500).json({

      success: false,

      message: "Server error",

    });

  }

});


// ==========================================
// LOGIN
// POST /user/login
// ==========================================

router.post(
  "/login",
  passport.authenticate("local"),
  (req, res) => {

    console.log("Login successful");

    res.status(200).json({
      success: true,
      message: "Login successful",
      user: {
        id: req.user._id,
        name: req.user.name,
        email: req.user.email,
      },
    });
  }
);


// ==========================================
// CHECK LOGIN
// GET /user/me
// ==========================================

router.get("/me", (req, res) => {

  if (!req.isAuthenticated()) {

    return res.status(401).json({

      isLogin: false,

      message: "User is not logged in",

    });

  }


  return res.status(200).json({

    isLogin: true,

    username: req.user.name,

    email: req.user.email,

  });

});


// ==========================================
// LOGOUT
// POST /user/logout
// ==========================================

router.post("/logout", (req, res) => {

  req.logout((error) => {

    if (error) {

      console.error(
        "Logout error:",
        error
      );

      return res.status(500).json({

        success: false,

        message: "Logout failed",

      });

    }


    req.session.destroy((error) => {

      if (error) {

        console.error(
          "Session destroy error:",
          error
        );

        return res.status(500).json({

          success: false,

          message: "Could not destroy session",

        });

      }


      res.clearCookie("connect.sid");


      return res.status(200).json({

        success: true,

        isLogin: false,

        message: "Logout successful",

      });

    });

  });

});


export default router;