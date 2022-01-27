import User from "../models/User.js";
import { StatusCodes } from "http-status-codes";
import {
  BadRequestError,
  NotFoundError,
  UnAuthenticatedError,
} from "../errors/index.js";
//avoid try catch blocks with express-async-errors npm package
// use http status codes npm package for errors

const register = async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    throw new BadRequestError("Please provide name, email and password");
  }
  const userAlreadyExists = await User.findOne({ email }).select("+password");
  if (userAlreadyExists) {
    throw new BadRequestError("That email is already registered");
  }

  const user = await User.create({ name, email, password });

  const token = user.createJWT();

  res.status(StatusCodes.CREATED).json({
    user: {
      email: user.email,
      lastName: user.lastName,
      location: user.location,
      name: user.name,
    },
    token,
    location: user.location,
  });
};

const login = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    throw new BadRequestError("Please provide email and password");
  }
  const user = await User.findOne({ email });
  if (!user) {
    throw new UnAuthenticatedError("Invalid Credentials");
  }

  const isPasswordCorrect = await user.comparePassword(password);
  if (!isPassword) {
    throw new UnAuthenticatedError("Invalid Credentials");
  }

  const token = user.createJWT();
  // hides password from response to client side
  user.password = undefined;
  res.status(StatusCodes.OK).json({
    user,
    token,
    location: user.location,
  });
};

const updateUser = async (req, res) => {
  res.send("update user");
};

export { register, login, updateUser };
