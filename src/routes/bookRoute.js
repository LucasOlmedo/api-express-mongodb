import express from "express";
import BookController from "../controllers/bookController.js";

const router = express.Router();

router.get('/books', BookController.getAll);
router.get('/books/search', BookController.searchBook);
router.post('/books', BookController.createBook);
router.get('/books/:id', BookController.getBookById);
router.put('/books/:id', BookController.updateBook);
router.delete('/books/:id', BookController.deleteBook);

export default router;