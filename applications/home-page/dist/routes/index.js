"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const path = require("path");
const html_rel_dir = "../../public/bootstrap/Homepage/";
const index = express_1.Router();
index.get('/candidate-0', (req, res, next) => {
    res.sendFile(path.join(__dirname, html_rel_dir, 'candidate-0.html'));
});
index.get('/candidate-1', (req, res, next) => {
    var path_to_html = path.join(__dirname, html_rel_dir, 'candidate-1.html');
    res.sendFile(path_to_html);
});
index.get('/pug', (req, res, next) => {
    res.render('candidate-1', {});
});
exports.default = index;
