const express = require('express');
const route = express.Router();
const { login, register } = require('../../controllers/auth/auth');
const session = require('express-session');
const passport = require('passport');
require('../../utils/googleAuth.js');

route.post('/login', login);
route.post('/register', register);

function isLoggedIn(req, res, next) {
  req.user ? next() : res.sendStatus(401);
}

route.get('/login/auth/google', (req, res) => {
  res.send('<a href="/api/v1/auth/google">Authenticate with Google</a>');
});

route.get(
  '/auth/google',
  passport.authenticate('google', { scope: ['email', 'profile'] })
);

route.get(
  '/auth/google/callback',
  passport.authenticate('google', {
    successRedirect: '/api/v1/protected',
    failureRedirect: '/api/v1/auth/google/failure',
  })
);
const { User } = require('../../models/user.js');

route.get('/protected', isLoggedIn, async (req, res) => {
  const user = new User({
    fullname: req.user.displayName,
  });
  console.log(req.user)
  const result = await user.save();
  res.send(result);
});

route.get('/logout', (req, res) => {
  req.logout();
  req.session.destroy();
  res.send('Goodbye!');
});

route.get('/auth/google/failure', (req, res) => {
  res.send('Failed to authenticate..');
});

module.exports = route;
