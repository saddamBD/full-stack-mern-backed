const express = require("express");
const Book = require("./book.model");
const {
  postABook,
  getAllBooks,
  getSingleBook,
  UpdateBook,
  deleteABook,
} = require("./book.controller");
const verifyAdminToken = require("../middleware/verifyAdminToken");
const router = express.Router();

router.post("/create-book", verifyAdminToken, postABook);

// get all books
router.get("/", getAllBooks);

// single book endpoint
router.get("/:id", getSingleBook);

// update a book endpoint
router.put("/edit/:id", verifyAdminToken, UpdateBook);

router.delete("/:id", verifyAdminToken, deleteABook);

module.exports = router;
