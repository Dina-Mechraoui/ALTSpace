const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const { User } = require('../prisma/prismaClient'); 
passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: 'http://localhost:3000/auth/google/redirect', 
    },
    async (accessToken, refreshToken, profile, done) => {
      try {
    
        let user = await User.findUnique({ where: { email: profile.emails[0].value } });

        if (!user) {

          user = await User.create({
            data: {
              firstName: profile.name.givenName,
              lastName: profile.name.familyName,
              email: profile.emails[0].value,
    
              password: 'oauthpassword',
            },
          });
        }

        return done(null, user);
      } catch (error) {
        return done(error);
      }
    }
  )
);

module.exports = passport;
