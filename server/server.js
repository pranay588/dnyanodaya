import express from 'express';
import cors from 'cors';
import axios from 'axios';
import {img} from './endpoints/image.js';
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended:true }));
app.use(cors());
app.post('/img',img);

const PORT = 6969;
app.listen(PORT,()=>{
    console.log(`server is listening on port ${PORT}`)
});
