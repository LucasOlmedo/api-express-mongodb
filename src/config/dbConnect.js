import mongoose from "mongoose";

async function dbConnect() {
    mongoose.connect(process.env.MONGODB_CONNECTION);
    return mongoose.connection;
}

export default dbConnect;