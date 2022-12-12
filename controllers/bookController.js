var fs = require('fs');

const bookService = require("../services/bookService");



// Get Items

exports.getAllBooks = async (req, res) => {
 
    try {
      const items = await bookService.getAllBooks();
      res.json({ data: items, status: "success" });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };

// Post
  exports.postBooks = async (req, res) => {
    try {
        const books = await bookService.postBooks(req.body);
        res.json({ data: books, status: "success" });
      } catch (err) {
        res.status(500).json({ error: err.message });
      }
  };

  // Delete books by ID

  exports.deleteBooks = async (req, res) => {
    try {
      const books = await bookService.deleteBooks(req.params.id);
      res.json({ data: books, status: "success" });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };
   