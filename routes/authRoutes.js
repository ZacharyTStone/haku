import express from "express";
import authenticateUser from "../middleware/auth.js";

const router = express.Router();

import { register, login, updateUser } from "../controllers/authController.js";

router.route("/register").post(register);
router.route("/login").post(login);
router.route("/updateUser").patch(authenticateUser, updateUser);

export default router;
