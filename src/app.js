const express = require('express');
// const dbConnect  = require('./config/dbConnect.js');
const routes = require('./routes/index.js');

// const connection = dbConnect();
// connection.on('error', error => console.log(`Connection error: ${error}`));
// connection.once('open', () => console.log('Database connected!'));

const app = express();

routes(app);

module.exports = app;