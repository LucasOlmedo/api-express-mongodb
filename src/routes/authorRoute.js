import express from "express";
import AuthorController from "../controllers/authorController.js";

const router = express.Router();

router.get('/authors', AuthorController.getAll);
router.post('/authors', AuthorController.createAuthor);
router.get('/authors/:id', AuthorController.getAuthorById);
router.put('/authors/:id', AuthorController.updateAuthor);
router.delete('/authors/:id', AuthorController.deleteAuthor);

export default router;