// ES6 styling
import express from "express";
const app = express();

//env
import dotenv from "dotenv";
dotenv.config();

// db
import connectDB from "./db/connect.js";

//middleware for if the route is not found
notFoundMiddleware;
import notFoundMiddleware from "./middleware/not-found.js";
//middleware for if there is an error within a valid addresses
errorHandlerMiddleware;
import errorHandlerMiddleware from "./middleware/error-handler.js";

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 5000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL);
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

start();
