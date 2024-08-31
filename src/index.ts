import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';

import db from './util/db';
import noteRouter from './routes/notes-router';
import tagRouter from './routes/tag-router';
import authRouter from './routes/auth-router';


dotenv.config();

const port = process.env.PORT || 3000;

const dataBaseUrl = process.env.DATABASE_URL as string;

async function start() {
    const app = express();
    try {
        await db();

        app.use(bodyParser.json());

        app.use('/V0/api', noteRouter);
        app.use('/V0/api', tagRouter);
        app.use('/V0/api', authRouter);


        app.listen(port, () => {
            console.log(`server is running on port ${port}`)
        });
    }
    catch (err) {
        console.log(err);
    }
}
start();
