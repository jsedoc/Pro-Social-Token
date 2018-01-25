/**
    @file   : index.ts
    @author : Xiao Ling <lingxiao@seas.upenn.edu>
    @date   : 1/23/2018
*/
import { Router }   from 'express';
import * as express from 'express';
import * as path    from 'path'   ;
import * as pug     from 'pug'    ;


const index: Router = Router();


/**
	Raw bootstrap template 
*/
index.get('/candidate-0', (req, res, next) => {
	const html_rel_dir: string = "../../public/bootstrap/Homepage/"
	res.sendFile( path.join(__dirname, html_rel_dir, 'candidate-0.html') );
});


/**
	Template under development
*/
index.get('/candidate-1', (req, res, next) => { 
	res.render('candidate-1', {});
});


export default index;


