/**
    @file: www
    @author: Xiao Ling <lingxiao@seas.upenn.edu>
    @date: 1/19/2018
    @Use: npm run grunt
          npm start
*/
"use strict";

//module dependencies
var server   = require("../dist/server");
var debug    = require("debug")("express:server");
var http     = require("http");
var socketIo = require("socket.io")

//create http server
var httpPort = 3000;

// initialize server instance from class we defined
var app    = server.Server.bootstrap().app;
app.set('port', httpPort)
var server = http.Server(app);

/**
  @Debug: hard coded router, comment out before deploying
*/
app.get('/debug', (req,res) => { res.send("hello world from www") });

// start listening on port `httpPort`
server.listen(httpPort);

// handle error
server.on("error", (err) => {

  if (error.syscall !== "listen") {
    throw error;
  }

  var bind = typeof port === "string"
    ? "Pipe " + port
    : "Port " + port;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case "EACCES":
      console.error(bind + " requires elevated privileges");
      process.exit(1);
      break;
    case "EADDRINUSE":
      console.error(bind + " is already in use");
      process.exit(1);
      break;
    default:
      throw error;
  }
})

server.on("listening", () => {

  var addr = server.address();
  var bind = typeof addr === "string"
    ? "pipe " + addr
    : "port " + addr.port;
  debug("Listening on " + bind);
})

