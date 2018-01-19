"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const index = express_1.Router();
index.get('/', (req, res, next) => {
    res.send("hello world from home page");
    console.log("navigated to home page");
});
index.get('/graph', (req, res, next) => {
    res.send("hello world from graph");
    console.log("navigated to graph page");
});
exports.default = index;
