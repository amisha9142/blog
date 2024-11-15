const express = require("express");
const { getAllBooksController, createBookController, updateBookController, getBookByIdController, deleteBookController, userBooksController } = require("../controllers/bookControlller");

// Router object
const router = express.Router();

// Routes
// GET || All books
router.get("/get-book", getAllBooksController);

// POST || Create book
router.post("/create-book", createBookController);

// PUT || Update book
router.put("/update-book/:id", updateBookController);

// GET || Single book details
router.get("/all-book/:id", getBookByIdController);

// DELETE || Delete book
router.delete("/delete-book/:id", deleteBookController);

// GET || User's books
router.get("/user-books/:id", userBooksController);

module.exports = router;
