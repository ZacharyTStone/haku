const errorHandlerMiddleware = (err, req, res, next) => {
  console.log(err);
  // general server error (500)
  res.status(500).send("Something went wrong");
};

export default errorHandlerMiddleware;
