module.exports = (req, res, next) => {
  res.header("Content-Range", "users 0-5/5");
  next();
};
