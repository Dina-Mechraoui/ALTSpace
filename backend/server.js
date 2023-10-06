const express = require('express');
const app = express();
const passport = require('passport');
const session = require('express-session');
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

secret_key = process.env.GOOGLE_CLIENT_SECRET

// Middleware
app.use(session({ secret: secret_key, resave: false, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

// Include the authentication routes
const authRoutes = require('./user/routes');
app.use('/', authRoutes);

// Start the server
const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
