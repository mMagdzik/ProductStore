//const express = require('express');  "type": "module" insted of commonjs
import express, { json } from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import productRoutes from "./routes/product.route.js";
import path from "path";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

//frontend folder as a static assets
const __dirname = path.resolve();
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/frontend/dist")));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"));
  });
} // middleware allows to accept JSON in req.body

app.use("/api/products", productRoutes);

app.listen(PORT, () => {
  connectDB();
  console.log("server Started at " + PORT);
});
