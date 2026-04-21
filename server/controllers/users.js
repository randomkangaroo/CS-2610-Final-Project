import { Router } from "express";
import { getUserByName, addUser } from "../models/users.js";

const router = Router();

// POST /api/users
// Add someone to the newsletter. Requires a unique name and email.
router.post("/", async (req, res) => {
  const { name, email } = req.body;

  if (await getUserByName(name)) { return res.status(400).json({ error: "Duplicate user" }) }

  const newUser = await addUser(name, email);
  if (newUser) { return res.status(200).json({ message: "New user added" }) }
  else { return res.status(500).json({ error: "User add error" }) }
});

export default router;
