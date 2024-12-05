const mongoose = require("mongoose");

async function dbConnect() {
    mongoose.connect(process.env.MONGODB_CONNECTION);
    return await mongoose.connection;
}

module.exports = dbConnect;