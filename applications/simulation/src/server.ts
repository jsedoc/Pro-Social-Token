/**
    @file: server.ts
    @author: Xiao Ling <lingxiao@seas.upenn.edu>
    @date: 1/19/2018
*/
import * as bodyParser   from "body-parser";
import * as cookieParser from "cookie-parser";
import * as express      from "express";
import * as logger       from "morgan" ; 
import * as path         from "path"   ;
import errorHandler   = require("errorhandler")   ;
import methodOverride = require("method-override");


/**
 *  
 * A server class
 * @class Server
 *
*/
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

        this.app    = express();
        this.config = config();
        this.routes = routes();
        this.api();
    }


    /**
     * create RESTI API routes
     * 
     * @class Server
     * @method api
     * @todo: implement this
     *
    */
    public api() : Bool {

        return false

    }


    /**
     * creat router
     * 
     * @class Server
     * @method api
     * @todo: implement this
     *
    */
    public routes(){

    }

}

