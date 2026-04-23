import { Router } from "express";
import { getUserByName, addUser, removeUserByEmail } from "../models/users.js";

const router = Router();

// POST /api/newsletter
// Add someone to the newsletter. Requires a unique name and email.
router.post("/", async (req, res) => {
  const { name, email } = req.body;

  if (await getUserByName(name)) { return res.status(400).json({ error: "Duplicate user" }) }

  const newUser = await addUser(name, email);
  if (newUser) { return res.status(200).json({ message: "New user added" }) }
  else { return res.status(500).json({ error: "User add error" }) }
});

// DELETE /api/newsletter
// Remove someone from the newsletter. The email to remove must be in the request body
router.delete("/", async (req, res) => {
  const { email } = req.body;

  if (await removeUserByEmail(email)) {
    return res.status(200).json({ message: "User removed" });
  } else {
    return res.status(404).json({ error: "User does not exist" });
  }
})

export default router;
