import pool from "../db/connection.js";

export async function getUserByName(name) {
  const res = await pool.query(
    "SELECT id, name, email FROM users WHERE name = $1",
    [name]
  );
  return res.rows || null;
}

export async function getUserByEmail(email) {
  const res = await pool.query(
    "SELECT id, name, email FROM users WHERE email = $1",
    [email]
  );
  return res.rows || null;
}

export async function addUser(name, email) {
  // TODO: Name and email validation

  // Add it to the table
  await pool.query(
    "INSERT INTO users (name, email) VALUES ($1, $2)",
    [name, email]
  );
}
