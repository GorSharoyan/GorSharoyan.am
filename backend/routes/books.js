const express = require("express");
const router = express.Router();
const Book = require("../models/Book"); // import your schema

// GET all books
router.get("/books", async (req, res) => {
  try {
    const books = await Book.find(); // fetch all books
    res.json(books); // returns JS-friendly field names (bookName, author, etc.)
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET a single book by ID
router.get("/books:id", async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);
    if (!book) return res.status(404).json({ message: "Book not found" });
    res.json(book);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// POST a new book
router.post("/books", async (req, res) => {
  try {
    const { bookName, author, whenPublished, shortDescription } = req.body;

    const newBook = new Book({
      bookName,
      author,
      whenPublished,
      shortDescription
    });

    const savedBook = await newBook.save(); // save to DB
    res.json(savedBook);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// PUT to update a book by ID
router.put("/books:id", async (req, res) => {
  try {
    const { bookName, author, whenPublished, shortDescription } = req.body;

    const updatedBook = await Book.findByIdAndUpdate(
      req.params.id,
      { bookName, author, whenPublished, shortDescription },
      { new: true } // return updated document
    );

    if (!updatedBook)
      return res.status(404).json({ message: "Book not found" });
    res.json(updatedBook);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// DELETE a book by ID
router.delete("/books:id", async (req, res) => {
  try {
    const deletedBook = await Book.findByIdAndDelete(req.params.id);
    if (!deletedBook)
      return res.status(404).json({ message: "Book not found" });
    res.json({ message: "Book deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
