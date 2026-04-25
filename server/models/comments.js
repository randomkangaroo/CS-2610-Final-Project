import pool from "../db/connection.js";

export async function getCommentById(id) {  
  const res = await pool.query(
    "SELECT * FROM comments WHERE id = $1",
    [id]
  );

  return res.rows[0] || null;
}

export async function addComment(email, comment) {
  const res = await pool.query(
    "INSERT INTO comments (email, comment) VALUES ($1, $2) RETURNING *",
    [email, comment]
  );
  return res.rows;
}
