import express from 'express'
import {db,connectToDB} from "./db.js"
import  cors from "cors";
import axios from "axios";
const app = express()
app.use(express.json())
app.use(cors())


app.get('/checkusername/:username', async (req, res) => {
    const us  = req.params.username;
      const user = await db.collection('users').findOne({ Username:us });
      if(user === null){
        res.send("0");
      }else{
        res.send("1");
      }
});

app.post('/login/:Email/:Password',async (req, res) => {
    const details = await db.collection('users').findOne({
        Email:req.params.Email,
        Password:req.params.Password
    })
    res.send(details);
});

app.post('/signup/:Email/:Fullname/:Username/:Password',async (req, res) => {
    const details = await db.collection('users').insertOne({
        Email:req.params.Email,
        Fullname:req.params.Fullname,
        Username:req.params.Username,
        Password:req.params.Password
    })
    res.json(details);
});



connectToDB(()=>{
    app.listen(8000,()=>{
        console.log("Server Running At port 8000");
    })
})