import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';

import db from'./util/db';
import router from './routes/notes-router';


dotenv.config();

const port = process.env.PORT || 3000;

const dataBaseUrl = process.env.DATABASE_URL as string;

async function start() {
    const app = express();
    try {
        await db();

        app.use(bodyParser.json());

        app.use('/V0/api',router);

        app.listen(port, () => {
            console.log(`server is running on port ${port}`)
        });
    }
    catch (err) {
        console.log(err);
    }
}
start();
