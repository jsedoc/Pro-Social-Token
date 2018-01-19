/**
    @file   : server.ts
    @author : Xiao Ling <lingxiao@seas.upenn.edu>
    @date   : 1/19/2018
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
    public static bootstrap() : Server {
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

        // configure the application
        this.config();
        // this.routes();
        // this.api();
    }

    /**
     * configure the app
     * 
     * @class Server
     * @method config
     *
    */
    public config() {

        // add all static paths
        this.app.use(express.static(path.join(__dirname, "public")));

        // configure pug
        this.app.set("views", path.join(__dirname, "views"));
        this.app.set("view engine", "pug");

        // use logger middlware
        this.app.use(logger("dev"));

        // use json form parser middleware
        this.app.use(bodyParser.json());

        // use query string parser middlware
        this.app.use(bodyParser.urlencoded({
            extended : true
        }));

        // use cookie parser middleware
        this.app.use(cookieParser("SECRETE_CODE"))

        // use overide middleware
        this.app.use(methodOverride());

        // catch 404 and forward to handler
        this.app.use(function( err: any
                             , req: express.Request
                             , res: express.Response
                             , next: express.NextFunction) {
          err.status = 404;
          next(err);

        });

        // error handling
        this.app.use(errorHandler());
    }

    /**
     * create REST API routes
     * 
     * @class Server
     * @method api
     * @todo: implement this
     *
    */
    // public api() {}

    /**
     * create router
     * 
     * @class Server
     * @method api
     * @todo: implement this, the question here is how do you add routes to new pages
     *
    */
    // private routes(){
    //     let router : express.Router;
    //     router = express.Router();
    //     // index route
    //     IndexRoute.create(router);
    // }

}












