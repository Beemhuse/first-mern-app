const express = require('express');
const router = express.Router();
const {
   postBooks,
   getAllBooks,
   deleteBooks,
   // getBlogById,
   // updateBlog,
   // deleteBlog,
 } = require("../../controllers/bookController");

 router.route("/").get(getAllBooks).post(postBooks);
 router.route("/:id").delete(deleteBooks);

module.exports = router;