"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const app = express();
app.get('/', (req, res) => {
    res.send("HOME from scratch.ts !");
});
app.listen(3000, () => { console.log("listening on 3000"); });
