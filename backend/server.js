//const express = require('express');  "type": "module" insted of commonjs
import express, { json } from 'express';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';
import productRoutes from "./routes/product.route.js"

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json()); // middleware allows to accept JSON in req.body

app.use("/api/products", productRoutes);

app.listen(PORT, () => {
    connectDB();
    console.log("server Started at " + PORT);
})

