import User from "../models/User.js";
import { StatusCodes } from "http-status-codes";
//avoid try catch blocks with express-async-errors npm package
// use http status codes npm package for errors

const register = async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    throw new Error("Please provide name, email and password");
  }
  const user = await User.create({ name, email, password });
  res.status(StatusCodes.CREATED).json({ user });
};

const login = async (req, res) => {
  res.send("login user");
};

const updateUser = async (req, res) => {
  res.send("update user");
};

export { register, login, updateUser };
