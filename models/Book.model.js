const pool = require("../config/db.postgres");

// TODO : Implement book model methods (e.g., getAllBooks, createBook, deleteBook, .)

class BookModel {
    
    static async getAllBooks() {
        const result = await pool.query("SELECT * FROM books");
        return result.rows;
    }

    static async getById(id) {
        const result = await pool.query("SELECT * FROM books WHERE id = $1", [id]);
        return result.rows[0];
    }

    static async createBook(title, year, user_id) {
        const result = await pool.query(
            "INSERT INTO books (title, year, user_id) VALUES ($1, $2, $3) RETURNING *",
            [title, year, user_id]
        );
        return result.rows[0];
    }

    static async deleteBook(id) {
        const result = await pool.query("DELETE FROM books WHERE id = $1 RETURNING *", [id]);
        return result.rows[0];
    }

    static async deleteUser(id) {
        const result = await pool.query
        ("DELETE FROM users WHERE id = $1 RETURNING *", [id]);
        return result.rows[0];
    }

}

module.exports = BookModel;