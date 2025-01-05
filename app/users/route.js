// /app/api/users/route.js

import sqlite3 from "sqlite3";

export async function GET(req) {
  return new Promise((resolve, reject) => {
    const db = new sqlite3.Database(
      "./users.db",
      sqlite3.OPEN_READONLY,
      (err) => {
        if (err) {
          console.error("Error opening database:", err.message);
          reject(new Error("Failed to connect to the database."));
        }
      }
    );

    // Query to fetch all users
    const query = "SELECT * FROM users";

    db.all(query, [], (err, rows) => {
      if (err) {
        console.error("Error fetching data:", err.message);
        reject(new Error("Failed to fetch data."));
      }

      // Return data as JSON
      resolve(
        new Response(JSON.stringify(rows), {
          headers: {
            "Content-Type": "application/json",
          },
        })
      );

      // Close the database connection
      db.close();
    });
  });
}
