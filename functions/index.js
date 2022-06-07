import functions from 'firebase-functions';
import express from 'express';
import cors from 'cors';



const app = express();
app.use(cors());
app.use(express.json());


// routes
app.get('/hello',(req,res) =>{
    res.send('Welcome')
});
// app.patch('/',)






export const api = functions.https.onRequest(app);
