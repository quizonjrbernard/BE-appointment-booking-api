require ("dotenv").config();

const pool = require("./config/db");
async function insertTestData() {
  try {
  await pool.query(
  `
  INSERT INTO businesses(name, email)
  VALUES($1, $2)
  `,
  ["Bernard", "bernard1@example.com"]
    );
    console.log("Test data inserted successfully");
    } catch (error) {
        console.error("Error inserting test data:", error);

    } finally {
        await pool.end();
    }
}   
insertTestData();
