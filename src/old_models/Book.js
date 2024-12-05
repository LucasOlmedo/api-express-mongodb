const mongoose = require("mongoose");
const { authorSchema } = require("./Author.js");

const bookSchema = new mongoose.Schema({
    id: {
        type: mongoose.Schema.Types.ObjectId
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: false
    },
    author: {
        type: String,
        required: true
    },
    pages: {
        type: Number,
        required: true
    },
    author: authorSchema,
}, {
    versionKey: false
});

const book = mongoose.model('books', bookSchema);

export { bookSchema, book };