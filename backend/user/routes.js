const express = require('express');
const passport = require('./googleauth'); 


const router = express.Router();


router.get('/auth/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

router.get(
  '/auth/google/callback',
  passport.authenticate('google', { failureRedirect: '/' }),
  (req, res) => {
    
    res.redirect('/dashboard'); 
  }
);

module.exports = router;