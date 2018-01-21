/**
    @file   : graph-simple.ts
    @author : Xiao Ling <lingxiao@seas.upenn.edu>
    @date   : 1/20/2018
*/


// question can you run everything in the background and 
// just send the stuff to the front end for rendering?
// how might you do such a thing???
/**
	1. you can take input from the front end in terms of parameters
	2. then you can build a graph in the back end
	3. then you can send the thing to the front, that just renders it
	4. the advantage of this is that we don't have to do all the browserfy things for now...
	5. we need to scope out the requirements of what's going on here, and what we're actually
	   trying to accomplish ...
	6. what does the front end look like? maybe a spreadsheet with certain things??
	7. if we do it in the backend, how does the front end get displayed?  - maybe it can be as simple as possible
*/
import * as Sigma from 'sigma'

var G = new Sigma('graph');

G.graph.addNode({ id: 'n0', label: 'A', x: 0, y: 0, size: 1, color: '#f00'}).addNode({ id: 'n1', label: 'B', x: 1, y: 1, size: 1, color: '#f00'}).addEdge({id: 'e0', source: 'n0', target: 'n1'});

G.refresh();







