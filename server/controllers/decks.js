import { Router } from "express";
import { getAllDecks, getDeckById } from "../models/decks.js";

const router = Router();

// GET /api/decks
// Get the name and description of all decks being sold
router.get("/decks", async (req, res) => {
  const decks = await getAllDecks();

  res.send(200).json(JSON.stringify({ result: decks }));
  return;
});

// GET /api/deck/:id
// Get a certain deck's name, description, card list, price, and competitor price (if exists)
router.get("/decks/:id", async (req, res) => {
  const { id } = req.params;

  const deck = await getDeckById(id);
  if (!deck) {
    return res.send(404).json(JSON.stringify({ error: `Deck ${id} does not exist.`}));
  }

  res.send(200).json(JSON.stringify({ result: deck }));
  return;
})

export default router;
