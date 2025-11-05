const BookModel = require("../models/Book.model");

// Get all books
exports.getBooks = async (req, res) => {
  const books = await BookModel.getAllBooks();
  res.json(books);
};

// Get book by ID
exports.getBook = async (req, res) => {
  const book = await BookModel.getById(req.params.id);
  res.json(book);
};

// Create book
exports.createBook = async (req, res) => {
  const { title, year, user_id } = req.body;
  const book = await BookModel.createBook(title, year, user_id);
  res.json(book);
};

// Delete book
exports.deleteBook = async (req, res) => {
  const deleted = await BookModel.deleteBook(req.params.id);
  res.json({ message: "Book deleted", deleted });
};
