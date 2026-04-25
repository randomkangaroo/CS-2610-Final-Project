import { Router } from "express";
import Stripe from "stripe";

const router = Router();

// POST /api/payment/create-checkout-session
// Create a checkout session as shown in the Stripe docs under "Accept a Payment"
router.post("/create-checkout-session", async (req, res) => {
  const stripeClient = new Stripe(process.env.STRIPE_PRIV_KEY);
  
});

export default router;
