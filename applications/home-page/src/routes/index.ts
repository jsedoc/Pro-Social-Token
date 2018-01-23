/**
    @file   : index.ts
    @author : Xiao Ling <lingxiao@seas.upenn.edu>
    @date   : 1/19/2018
*/
import { Router } from 'express';
import * as express from 'express';


const path : String = "/Users/lingxiao/Documents/Projects/Bitcoin/src/home-page/public/bootstrap";
const index: Router = Router();


index.get('/op-index'  , (req, res, next) => { res.sendFile(path + '/Site/op-index.html'); });

index.get('/op-index-2', (req, res, next) => { res.sendFile(path + '/Site/op-index-2.html'); });

index.get('/op-index-3', (req, res, next) => { res.sendFile(path + '/Site/op-index-3.html'); });

index.get('/op-index-4', (req, res, next) => { res.sendFile(path + '/Site/op-index-4.html'); });

index.get('/op-index-5', (req, res, next) => { res.sendFile(path + '/Site/op-index-5.html'); });

index.get('/candidate-0', (req, res, next) => { res.sendFile(path + '/Homepage/candidate-0.html'); });

index.get('/candidate-1', (req, res, next) => { res.sendFile(path + '/Homepage/candidate-1.html'); });


export default index;

 