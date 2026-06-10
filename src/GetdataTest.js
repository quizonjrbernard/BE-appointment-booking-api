require("dotenv").config();

const pool = require("./config/db");

async function testDatabase() {
  try {

    const result =
      await pool.query(
        "SELECT * FROM businesses"
      );

    console.log(result.rows);

  } catch (error) {

    console.error(error);

  } finally {

    await pool.end();

  }
}

testDatabase();