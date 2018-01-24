"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const path = require("path");
const html_rel_dir = "../../public/bootstrap/Homepage/";
const index = express_1.Router();
index.get('/op-index', (req, res, next) => { res.sendFile(path + '/Site/op-index.html'); });
index.get('/op-index-2', (req, res, next) => { res.sendFile(path + '/Site/op-index-2.html'); });
index.get('/op-index-3', (req, res, next) => { res.sendFile(path + '/Site/op-index-3.html'); });
index.get('/op-index-4', (req, res, next) => { res.sendFile(path + '/Site/op-index-4.html'); });
index.get('/op-index-5', (req, res, next) => { res.sendFile(path + '/Site/op-index-5.html'); });
index.get('/candidate-0', (req, res, next) => { res.sendFile(path + '/Homepage/candidate-0.html'); });
index.get('/candidate-1', (req, res, next) => {
    var path_to_html = path.join(__dirname, html_rel_dir, 'candidate-1.html');
    res.sendFile(path_to_html);
});
exports.default = index;
