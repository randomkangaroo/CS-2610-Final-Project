import pool from "../db/connection.js";

export async function getUserByName(name) {
  const res = await pool.query(
    "SELECT id FROM users WHERE name = $1",
    [name]
  );
  return res.rows[0] || null;
}

export async function getUserByEmail(email) {
  const res = await pool.query(
    "SELECT id FROM users WHERE email = $1",
    [email]
  );
  return res.rows[0] || null;
}

export async function addUser(name, email) {
  // Name and email validation
  if (name.length > 256 || email.length > 256) { return null; }

  // Add it to the table
  const result = await pool.query(
    "INSERT INTO users (name, email) VALUES ($1, $2) RETURNING *",
    [name, email]
  );
  return result.rows;
}

export async function removeUserByEmail(email) {
  const result = await pool.query(
    "DELETE FROM users WHERE email=$1",
    [email]
  );
  return result.rowCount ? true : false;
}
