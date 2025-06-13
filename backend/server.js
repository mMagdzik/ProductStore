//const express = require('express');  "type": "module" insted of commonjs
import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';
import Product from "./models/product.model.js"


dotenv.config();
const app = express();

app.use(express.json()); // middleware allows to accept JSON in req.body

app.post("/api/products", async(req, res) => {
    const product = req.body; //user'll send this data

    if(!product.name || !product.price || !product.image) {
        return res.status(400).json({success: false, message: "Please provide all fields" })
    }
    const newProduct = new Product(product);
    
    try {
        await newProduct.save();
        res.status(201).json({ success: true, data: newProduct });
    } catch (error) {
        console.error(500).json({ success: false, message: "Server Error" })
    }
});

console.log(process.env.MONGO_URL);


app.delete("/api/products/:id", async (req, res) => {
    const { id } = req.params;
    try {
        await Product.findByIdAndDelete(id);
    } catch ( error ) {

    }
})

app.listen(3000, () => {
    connectDB();
    console.log("server Started at 3000");
})

