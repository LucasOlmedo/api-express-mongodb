import express from 'express';
import dbConnect from './config/dbConnect.js';

const connection = await dbConnect();
connection.on('error', error => console.log(`Connection error: ${error}`));
connection.once('open', () => console.log('Database connected!'));

const app = express();

app.use(express.json());

export default app;