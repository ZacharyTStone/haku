import { readFile } from "fs/promises";

import dotenv from "dotenv";
dotenv.config();

import connectDB from "./db/connect.js";
import Job from "./models/Job.js";

const start = async (token) => {
  // try {
  // await connectDB(process.env.MONGO_URL);

  // "createdBy": "61f297678ef01206cb9079f1",
  const jsonProducts = JSON.parse(
    await readFile(new URL("./mock_data.json", import.meta.url))
  );

  jsonProducts.map(async (product) => {
    product.createdBy = token;
  });

  console.log(jsonProducts);

  //   await Job.create(jsonProducts);
  //   console.log("Success!!!!");
  //   process.exit(0);
  // } catch (error) {
  //   console.log(error);
  //   process.exit(1);
  // }
};

start();

export default start;
