import express from "express"
import { register, login, logout, getMyProfile } from "../controllers/UserController.js";
import { isAuthenticated } from "../middlewares/Auth.js";

const router = express.Router();

// to register a new user
router.route("/register").post(register)

// login a user
router.route("/login").post(login)

// logout a user
router.route("/logout").get(logout)

// get my profile
router.route("/me").get(isAuthenticated, getMyProfile)

// change password

// update profile

// update profile picture

// forget password

// reset password

// add to playlist

// remove from playlist

export default router;