import { book } from "../models/Book.js";
import { author } from "../models/Author.js";
import BaseError from "../errors/BaseError.js";

class BookController {
    static async getAll(req, res) {
        const books = await book.find();
        res.status(200).json(books);
    };

    static async searchBook(req, res) {
        const { title } = req.query;
        const searchBook = await book.find({ title: { $regex: title, $options: 'i' } });
        res.status(200).json(searchBook);
    };

    static async createBook(req, res) {
        const bookData = req.body;

        try {
            const findAuthor = await author.findById(bookData.author);
            const data = { ...bookData, author: { ...findAuthor._doc } };
            const newBook = await book.create(data);

            res.status(201).json({ message: 'Book created successfully', data: newBook });
        } catch (error) {
            next(error);
        }
    };

    static async getBookById(req, res, next) {
        const id = req.params.id;

        try {
            const getBook = await book.findById(id);
            res.status(200).json(getBook);
        } catch (error) {
            next(new BaseError('Book not found', 404));
        }
    };

    static async updateBook(req, res) {
        const id = req.params.id;
        const updateBook = await book.findByIdAndUpdate(id, req.body);
        res.status(200).json({ message: 'Book updated successfully', data: updateBook });
    };

    static async deleteBook(req, res) {
        try {
            const id = req.params.id;
            await book.findByIdAndDelete(id);
            res.status(200).json({ message: 'Book deleted successfully' });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    };
}

export default BookController;