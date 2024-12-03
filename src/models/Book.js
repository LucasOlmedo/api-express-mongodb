import mongoose from "mongoose";

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
}, {
    versionKey: false
});

const book = mongoose.model('books', bookSchema);

export default book;