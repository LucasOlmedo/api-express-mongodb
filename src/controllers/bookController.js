import book from "../models/Book.js";

class BookController {
    static async getAll(req, res) {
        const books = await book.find();
        res.json(books);
    };

    static async createBook(req, res) { };

    static async getBookById(req, res) { };

    static async updateBook(req, res) { };

    static async deleteBook(req, res) { };
}

export default BookController;