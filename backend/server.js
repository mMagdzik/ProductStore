//const express = require('express');  "type": "module" insted of commonjs

import express from 'express';

const app = express();

app.listen(5000, () => {
    console.log("server Started at 5000");
})