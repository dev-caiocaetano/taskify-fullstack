import passport from 'passport';
import { Strategy as GoogleStrategy } from 'passport-google-oauth20';
import UserModel from '../models/User.js';

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET_KEY,
      callbackURL: '/auth/google/callback',
    },
    async (accessToken, refreshToken, userProfile, done) => {
      try {
        const existingUser = await UserModel.findOne({ email: userProfile.emails[0].value });
        if (existingUser) {
          done(null, existingUser);
        } else {
          const newUser = await UserModel.create({
            name: userProfile.name.givenName,
            lastName: userProfile.name.familyName,
            email: userProfile.emails[0].value,
            emailVerified: true,
          });
          return done(null, newUser);
        };
      } catch (error) {
        console.error("Erro na estratégia do Google:", error);
        return done(error, null);
      };
    }
  )
);
