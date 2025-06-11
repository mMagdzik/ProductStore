//const express = require('express');  "type": "module" insted of commonjs
import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';

dotenv.config();
const app = express();

//listening for get method "/" - route 
app.get("/", (req, res) => {
    res.send("server is ready Hello");
});

console.log(process.env.MONGO_URL);

app.listen(3000, () => {
    connectDB();
    console.log("server Started at 5000");
})

