"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const path = require("path");
const index = express_1.Router();
index.get('/candidate-0', (req, res, next) => {
    const html_rel_dir = "../../public/bootstrap/Homepage/";
    res.sendFile(path.join(__dirname, html_rel_dir, 'candidate-0.html'));
});
index.get('/candidate-1', (req, res, next) => {
    res.render('candidate-1', {});
});
exports.default = index;
