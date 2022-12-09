const express = require('express');
const router = express.Router();
const {
   postItems,
   getAllItems,
   deleteItems,
   // getBlogById,
   // updateBlog,
   // deleteBlog,
 } = require("../../controllers/itemController");

 router.route("/").get(getAllItems).post(postItems);
 router.route("/:id").delete(deleteItems);

module.exports = router;