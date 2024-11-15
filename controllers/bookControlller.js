const mongoose = require("mongoose");
const bookModel = require("../models/bookModel");

// GET ALL BOOKS
exports.getAllBooksController = async (req, res) => {
  try {
    const books = await bookModel.find();
    if (!books || books.length === 0) {
      return res.status(404).send({
        success: false,
        message: "No books found",
      });
    }
    return res.status(200).send({
      success: true,
      bookCount: books.length,
      message: "All books list",
      books,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).send({
      success: false,
      message: "Error while getting books",
      error,
    });
  }
};

// CREATE BOOK
exports.createBookController = async (req, res) => {
  try {
    const { title, description, author, price } = req.body;

    if (!title || !description || !author || !price) {
      return res.status(400).send({
        success: false,
        message: "Please provide all fields",
      });
    }

    const newBook = new bookModel({ title, description, author, price });
    await newBook.save();

    return res.status(201).send({
      success: true,
      message: "Book created!",
      newBook,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).send({
      success: false,
      message: "Error while creating book",
      error,
    });
  }
};

// UPDATE BOOK
exports.updateBookController = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedBook = await bookModel.findByIdAndUpdate(
      id,
      { ...req.body },
      { new: true }
    );

    if (!updatedBook) {
      return res.status(404).send({
        success: false,
        message: "Book not found",
      });
    }

    return res.status(200).send({
      success: true,
      message: "Book updated!",
      updatedBook,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).send({
      success: false,
      message: "Error while updating book",
      error,
    });
  }
};

// GET SINGLE BOOK BY ID
exports.getBookByIdController = async (req, res) => {
  try {
    const { id } = req.params;
    const book = await bookModel.findById(id);

    if (!book) {
      return res.status(404).send({
        success: false,
        message: "Book not found",
      });
    }

    return res.status(200).send({
      success: true,
      message: "Fetched single book",
      book,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).send({
      success: false,
      message: "Error while getting single book",
      error,
    });
  }
};

// DELETE BOOK
exports.deleteBookController = async (req, res) => {
  try {
    const book = await bookModel.findByIdAndDelete(req.params.id);

    if (!book) {
      return res.status(404).send({
        success: false,
        message: "Book not found",
      });
    }

    return res.status(200).send({
      success: true,
      message: "Book deleted!",
    });
  } catch (error) {
    console.error(error);
    return res.status(500).send({
      success: false,
      message: "Error while deleting book",
      error,
    });
  }
};

// GET ALL BOOKS BY USER
exports.userBooksController = async (req, res) => {
  try {
    const userBooks = await bookModel.find({ user: req.params.id });

    if (!userBooks || userBooks.length === 0) {
      return res.status(404).send({
        success: false,
        message: "No books found for this user",
      });
    }

    return res.status(200).send({
      success: true,
      message: "User's books",
      books: userBooks,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).send({
      success: false,
      message: "Error in user books",
      error,
    });
  }
};
