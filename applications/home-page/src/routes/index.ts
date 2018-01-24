/**
    @file   : index.ts
    @author : Xiao Ling <lingxiao@seas.upenn.edu>
    @date   : 1/19/2018
*/
import { Router } from 'express';
import * as express from 'express';

/**

	// Imports the Google Cloud client library.
	const Storage = require('@google-cloud/storage');

	// Instantiates a client. If you don't specify credentials when constructing
	// the client, the client library will look for credentials in the
	// environment.
	const storage = Storage();

	// Makes an authenticated API request.
	storage
	  .getBuckets()
	  .then((results) => {
	    const buckets = results[0];

	    console.log('Buckets:');
	    buckets.forEach((bucket) => {
	      console.log(bucket.name);
	    });
	  })
	  .catch((err) => {
	    console.error('ERROR:', err);
	  });

 */


const path : String = "/Users/lingxiao/Documents/Projects/Bitcoin/src/home-page/public/bootstrap";
const index: Router = Router();


index.get('/op-index'   , (req, res, next) => { res.sendFile(path  + '/Site/op-index.html'); });

index.get('/op-index-2' , (req, res, next) => { res.sendFile(path  + '/Site/op-index-2.html'); });

index.get('/op-index-3' , (req, res, next) => { res.sendFile(path  + '/Site/op-index-3.html'); });

index.get('/op-index-4' , (req, res, next) => { res.sendFile(path  + '/Site/op-index-4.html'); });

index.get('/op-index-5' , (req, res, next) => { res.sendFile(path  + '/Site/op-index-5.html'); });

index.get('/candidate-0', (req, res, next) => { res.sendFile(path + '/Homepage/candidate-0.html'); });


/**
	the problem right now:
		- need to deploy on a public thing on Docker but forgot how to do it
		solution: follow google cloud site
		- need to compartmentalize the html template for faster developing
		solution 1: pug
		solution 2: work with html
*/
index.get('/candidate-1', (req, res, next) => { res.sendFile(path + '/Homepage/candidate-1.html'); });


export default index;

