"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
class Server {
    static boostrap() {
        return new Server();
    }
    constructor() {
        this.app = express();
    }
    talk() {
        console.log("talking server hello world", this.app);
    }
}
exports.Server = Server;
let server = new Server();
server.talk();
