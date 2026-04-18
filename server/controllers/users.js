import { Router } from "express";

const router = Router();

// POST /api/users/new
// Add someone to the newsletter. Requires a unique name and email.
router.post("/users/new", async (req, res) => {
  // TODO
});

export default router;
