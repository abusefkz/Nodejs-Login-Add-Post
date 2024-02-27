module.exports = (roles) => {
  return (req, res, next) => {
    const users = req.body.role;

    if (roles.includes(users)) {
      next();
    } else {
      res.status(401).send("Error");
    }
  };
};
