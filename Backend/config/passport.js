import passport from "passport";
import { Strategy as LocalStrategy } from "passport-local";
import bcrypt from "bcryptjs";

import User from "../models/User.js";


passport.use(
  new LocalStrategy(
    {
      usernameField: "email",
      passwordField: "password",
    },

    async (email, password, done) => {

      try {

        const user = await User.findOne({
          email: email.toLowerCase(),
        });

        if (!user) {
          return done(null, false);
        }

        const isMatch = await bcrypt.compare(
          password,
          user.password
        );

        if (!isMatch) {
          return done(null, false);
        }

        return done(null, user);

      } catch (error) {

        return done(error);

      }

    }
  )
);


// Store user ID in session

passport.serializeUser((user, done) => {
  done(null, user._id);
});


// Get user from session

passport.deserializeUser(async (id, done) => {

  try {

    const user = await User.findById(id);

    done(null, user);

  } catch (error) {

    done(error);

  }

});


export default passport;