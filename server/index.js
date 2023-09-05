import express from 'express';
import Connection from './database/db.js';
import dotenv from 'dotenv';
import Routes from './routes/route.js';

const app = express();

dotenv.config();

app.use('/', Routes);

const PORT = 8000;

const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;

Connection(username, password);


app.listen(PORT, () => console.log(`Server is running successfully on PORT ${PORT}`));