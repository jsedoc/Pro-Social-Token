"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const index = express_1.Router();
index.get('/', (req, res, next) => {
    res.render('index', { title: 'home-page', message: 'welcome to the home page' });
    console.log("navigated to home page");
});
index.get('/graph-simple', (req, res, next) => {
    res.render('graph-simple', { title: 'graph-simple', message: 'a simple graph' });
});
exports.default = index;
