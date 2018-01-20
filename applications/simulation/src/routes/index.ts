/**
    @file   : index.ts
    @author : Xiao Ling <lingxiao@seas.upenn.edu>
    @date   : 1/19/2018
*/

import { Router } from 'express';
import * as express from 'express';

const index: Router = Router();

index.get('/', (req, res, next) => {

	res.send("hello world from home page")
	console.log("navigated to home page")

});

index.get('/graph', (req, res, next) => {

	res.sendFile("/Users/lingxiao/Documents/Projects/Pro-Social-Token/applications/simulation/src/views/sigmajs-example.html")

});


export default index;


