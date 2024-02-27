const User = require("../models/User");

module.exports =async (req, res, next) => {
  const notUser =await User.findById(req.session.userID);
  if (!notUser) return res.redirect('/login');
    next();
};
