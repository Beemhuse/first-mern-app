const Book = require ('../models/book');


exports.getAllBooks = async () => {
    return await Book.find();
  };
exports.postBooks = async (books) => {
    return await Book.create(books);
  };
exports.deleteBooks = async (id) => {
    return await Book.findByIdAndDelete(id);
  };