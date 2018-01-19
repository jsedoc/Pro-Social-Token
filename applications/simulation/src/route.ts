/**
    @file   : routes.ts
    @author : Xiao Ling <lingxiao@seas.upenn.edu>
    @date   : 1/19/2018
*/


import { NextFunction, Request, Response } from "express";

/**
 * Constructor
 * 
 * @class BaseRoute
 *
*/
export class BaseRoute {


	protected title : string;
	private scripts : string[];


	/**
	 *
	 * Constructor
	 *
	 * @class BaseRoute
	 * @constructor
	 *
	*/
	constructor(){

		this.title   = "simulation";
		this.scripts = [];

	}

	/**
	 *
	 * Add a javscript external file to request
	 * 
	 * @class BaseRoute
	 * @method addScript
	 * @param src {String} the source to the external JS file
	 * @return {BaseRoute} self for chaining 
	 *
	*/
	public addScript(src: string): BaseRoute {

		this.scripts.push(src);
		return this;
	}

	/**
	 *
	 * Render a page
	 *
	 * @class BaseRoute
	 * @method render
	 * @param req {Request} the request object
	 * @param res {Response} the response object
	 * @param view {String} the view to render
	 * @param  options {Maybe Object} additional options to append to view's local scope
	 * @return void
	 * 
	*/
	public render(req : Request, res : Response, view : string, options?: Object){

		res.locals.BASE_URL = "/";

		res.locals.scripts = this.scripts;
		res.locals.title = this.title;
		res.render(view, options);
	}

}


