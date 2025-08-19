const jwt = require('jsonwebtoken');

module.exports = function (req, res, next) {
  try {
    const token = req.header('login-auth-token');
    if (!token) {
      return res.status(401).json({ message: 'You do not have authority' });
    } else {
      const decodedToken = jwt.verify(token, 'jwtPrivateKey');
      req.user = decodedToken;
      next();
    }
  } catch (error) {
    console.log(error);
  }
};
