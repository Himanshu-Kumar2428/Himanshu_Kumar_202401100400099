const errorHandler = (err, req, res, next) => {
  console.error(err.stack);

  if (!res.statusCode || res.statusCode === 200) {
    res.status(500);
  }

  res.json({
    success: false,
    message: err.message || "Server Error",
  });
};

module.exports = errorHandler;
