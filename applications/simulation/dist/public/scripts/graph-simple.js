"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Sigma = require("sigma");
var G = new Sigma('graph');
G.graph.addNode({ id: 'n0', label: 'A', x: 0, y: 0, size: 1, color: '#f00' }).addNode({ id: 'n1', label: 'B', x: 1, y: 1, size: 1, color: '#f00' }).addEdge({ id: 'e0', source: 'n0', target: 'n1' });
G.refresh();
