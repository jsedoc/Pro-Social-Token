/**
    @file: temp.ts
    @author: Xiao Ling <lingxiao@seas.upenn.edu>
    @date: 1/19/2018
*/

// export class Greeter {


// 	hello : string;

// 	constructor(msg : string){
// 		this.hello = msg;
// 	};

// 	greet(){
// 		return "hello, this is " + this.hello;
// 	}

// }


// let g = new Greeter("hey man what's up")

// console.log(g.greet())

import * as express from "express";


export class Server {


    public app : express.Application;

    /**
     * 
     * @class Server
     * @method boostrap
     * @static 
     * @return {ng.auto.IInjectorService} Returns the newly created injector for this app.
     *
    */
    public static boostrap() : Server {
        return new Server();
    }

    /**
     * constructor
     * 
     * @class Server
     * @constructor
     *
    */
    constructor(){

        this.app = express();

    }

    public talk(){
    	console.log("talking server hello world", this.app)
    }

}


let server = new Server()

server.talk()