import express from "express";
import {
    getBooks,
    getBookById,
    saveBook,
    updateBook,
    deleteBook
} from "../controller/BookController.js";

const router = express.Router();

router.get('/books', getBooks);
router.get('/books/:id', getBookById);
router.post('/books', saveBook);
router.patch('/books/:id', updateBook);
router.delete('/books/:id', deleteBook);

export default router;