import { Router } from "express";
import { addComment } from "../models/comments.js";

const router = Router();

// POST /api/comments
// Add the user's comment to the database
router.post("/", async (req, res) => {
  const { email, comments } = req.body;

  if (await addComment(email, comments)) {
    return res.status(200).json({ message: "Comment added successfully"} );
  } else {
    return res.status(500).json({ error: "Comment creation error" });
  }
});

export default router;
