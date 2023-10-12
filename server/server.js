import express from 'express';
// const express = require('express');
import cors from 'cors';
// const cors = require('cors');
import axios from 'axios';
// const axios = require('axios');
import {img} from './endpoints/image.js';
// const img = require('./endpoints/image.js');
// import { fileURLToPath } from 'url';
const app = express();
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = dirname(__filename);
// import { dirname } from 'path';
app.use(express.json());
app.use(express.urlencoded({ extended:true }));
app.use(cors());
app.use(express.static('images'));
app.get('/img',img);

const PORT = 6969;
app.listen(PORT,()=>{
    console.log(`server is listening on port ${PORT}`)
});



