import express from "express";
import { isAuthenticated } from "../middlewares/Auth.js";
import { buySubscription } from "../controllers/PaymentController.js";


const router = express.Router();

// Buy Subscription

router.route("/subscribe").get(isAuthenticated, buySubscription)

export default router;
