const express = require("express");
const router = express.Router();
const stripe = require("stripe")(process.env.STRIPE_KEY);
const {
  processPaymnet,checkoutSession
} = require("../../controllers/paymentController/paymentController");

router.post("/create-checkout-session", processPaymnet);

router.post(
  "/webhook",
  express.raw({ type: "application/json" }),
  checkoutSession
);

module.exports = router;
