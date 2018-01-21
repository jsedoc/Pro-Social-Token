/**
    @file   : index.ts
    @author : Xiao Ling <lingxiao@seas.upenn.edu>
    @date   : 1/19/2018
*/
import { Router } from 'express';
import * as express from 'express';

const index: Router = Router();

index.get('/', (req, res, next) => {

	res.render('index', {title: 'home-page', message: 'welcome to the home page'})
	console.log("navigated to home page")

});

/**
	@page: a simple graph from sigma.js example
*/
index.get('/graph-simple', (req, res, next) => {
	// res.render('graph-simple', {title: 'graph-simple', message: 'a simple graph'})
	res.sendFile('/Users/lingxiao/Documents/Projects/Pro-Social-Token/applications/simulation/dist/views/graph-simple.html');
});


export default index;



