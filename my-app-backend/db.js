import {MongoClient} from "mongodb";

let db; 

async function connectToDB(cb){
    const url = "mongodb+srv://dhanunjay:8074388163@cluster0.gawpo4l.mongodb.net/?retryWrites=true&w=majority";
    const client = new MongoClient(url);
    await client.connect();
    db = client.db("InstagramProject");
    cb();
}

export {db,connectToDB};