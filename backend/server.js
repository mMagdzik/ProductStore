//const express = require('express');  "type": "module" insted of commonjs

import express from 'express';

const app = express();

//listening for get method "/" - route 
app.get("/", (req, res) => {
    res.send("server is ready Hello");
});

app.listen(3000, () => {
    console.log("server Started at 5000");
})