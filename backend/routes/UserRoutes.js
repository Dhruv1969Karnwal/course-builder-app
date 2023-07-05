import express from "express"
import { register } from "../controllers/UserController.js";

const router = express.Router();

// to register a new user
router.route("/register").post(register)

// login a user

// logout a user

// get my profile

// change password

// update profile

// update profile picture

// forget password

// reset password

// add to playlist

// remove from playlist

export default router;