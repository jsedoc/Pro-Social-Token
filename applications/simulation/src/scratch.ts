/**
    @file: scratch.ts
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


const app = express();

app.get('/', (req,res) => {
    res.send("HOME from scratch.ts !")
});

app.listen(3000, () => { console.log("listening on 3000") });
