import pool from "../db/connection.js";

export function getAllDecks() {
  const res = await pool.query(
    "SELECT * FROM decks"
  );

  return res.rows || null;
}

export function getDeckById(id) {
  const res = await pool.query(
    "SELECT * FROM decks WHERE id = $1",
    [id]
  );

  return res.rows || null;
}
