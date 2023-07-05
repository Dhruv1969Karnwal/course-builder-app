import express from "express";
import {
  register,
  login,
  logout,
  getMyProfile,
  changePassword,
  updateProfile,
  updateProfilePicture,
  forgetPassword,
  resetPassword,
} from "../controllers/UserController.js";
import { isAuthenticated } from "../middlewares/Auth.js";

const router = express.Router();

// to register a new user
router.route("/register").post(register);

// login a user
router.route("/login").post(login);

// logout a user
router.route("/logout").get(logout);

// get my profile
router.route("/me").get(isAuthenticated, getMyProfile);

// change password
router.route("/changepassword").put(isAuthenticated, changePassword);

// update profile
router.route("/updateprofile").put(isAuthenticated, updateProfile);

// update profile picture
router
  .route("/updateprofilepicture")
  .put(isAuthenticated, updateProfilePicture);

// forget password
router.route("/forgetpassword").post( forgetPassword);

// reset password
router.route("/resetpassword/:token").put( resetPassword);

// add to playlist

// remove from playlist

export default router;
