import express from "express";
import { isAuthenticated } from "../middlewares/Auth.js";
import { buySubscription, getRazorpayKey, paymentVerification } from "../controllers/PaymentController.js";


const router = express.Router();

// Buy Subscription
router.route("/subscribe").get(isAuthenticated, buySubscription)

// verify payment and save reference in database
router.route("/paymentverification").post(isAuthenticated, paymentVerification)

// get Razorpay key
router.route("/razorpaykey").get( getRazorpayKey)
export default router;
