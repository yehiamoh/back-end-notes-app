import express from 'express';
import bodyParser from 'body-parser';

const port= 3000;

async function start() {
    const app= express();
    try{
        app.listen(port,()=>{
            console.log(`server is running on port ${port}`)
        })
    }
    catch(err){
        console.log(err);
    }
}

start();
