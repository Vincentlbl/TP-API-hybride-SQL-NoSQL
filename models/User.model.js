const pool = require("../config/db.postgres");

class UserModel {
    
  static async getAllUsers() {
    const result = await pool.query("SELECT * FROM users");
    return result.rows;
  }

  static async getById(id) {
    const result = await pool.query("SELECT * FROM users WHERE id = $1", [id]);
    return result.rows[0];
  }

  static async createUser(firstname, lastname, email) {
    const result = await pool.query(
      "INSERT INTO users (firstname, lastname, email) VALUES ($1, $2, $3) RETURNING *",
      [firstname, lastname, email]
    );
    return result.rows[0];
  }

  static async deleteUser(id) {
    const result = await pool.query("DELETE FROM users WHERE id = $1 RETURNING *", [id]);
    return result.rows[0];
  }
}

module.exports = UserModel;
