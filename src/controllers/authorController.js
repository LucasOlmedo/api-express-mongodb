import { author } from "../models/Author.js";

class AuthorController {
    static async getAll(req, res) {
        const authors = await author.find();
        res.status(200).json(authors);
    };

    static async createAuthor(req, res) {
        try {
            const newAuthor = await author.create(req.body);
            res.status(201).json({ message: 'Author created successfully', data: newAuthor });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    };

    static async getAuthorById(req, res) {
        const id = req.params.id;
        const getAuthor = await author.findById(id);
        res.status(200).json(getAuthor);
    };

    static async updateAuthor(req, res) {
        const id = req.params.id;
        const updateAuthor = await author.findByIdAndUpdate(id, req.body);
        res.status(200).json({ message: 'Author updated successfully', data: updateAuthor });
    };

    static async deleteAuthor(req, res) {
        try {
            const id = req.params.id;
            await author.findByIdAndDelete(id);
            res.status(200).json({ message: 'Author deleted successfully' });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    };
}

export default AuthorController;