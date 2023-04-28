const express = require("express");
const router = express.Router();
const booksController = require("../controllers/books-controller");
const userController = require("../controllers/auth");

router.get("/", booksController.getAllBooks);
router.post("/", booksController.addBook);
router.get("/:id",booksController.getbyId);
router.put("/:id",booksController.updateBook);
router.delete("/:id", booksController.deleteBook);


router.post("/register", userController.registerUser);
router.post("/login", userController.loginUser);








module.exports = router;
