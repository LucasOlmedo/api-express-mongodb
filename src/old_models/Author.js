const mongoose = require("mongoose");

const authorSchema = new mongoose.Schema({
    id: {
        type: mongoose.Schema.Types.ObjectId
    },
    name: {
        type: String,
        required: true
    },
    originCountry: {
        type: String,
    }
}, {
    versionKey: false
});

const author = mongoose.model('authors', authorSchema);

module.exports = { authorSchema, author };