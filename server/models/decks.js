import pool from "../db/connection.js";

export async function getAllDecks() {
  const res = await pool.query(
    "SELECT id, name, price FROM decks"
  );

  return res.rows || null;
}

export async function getDeckById(id) {
  const res = await pool.query(
    "SELECT * FROM decks WHERE id = $1",
    [id]
  );

  return res.rows[0] || null;
}
