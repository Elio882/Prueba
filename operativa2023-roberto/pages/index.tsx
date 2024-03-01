'use client'

import { BFS } from "./graphs/path/BFS";
import { DFS } from "./graphs/path/DFS";
import { Dijkstra } from "./graphs/path/Dijkstra";
import { Prim } from "./graphs/path/PRIM";
import { Vertex } from "./graphs/Vertex"
import {Floid} from "./graphs/path/Floid";
import {intento} from "./graphs/path/intento";
import {IntentoFloid} from "./graphs/path/IntentoFloid";
import {MaxFlowAlgorithm} from "./graphs/path/MaxFlowAlgorithm ";
//dfs
//bfs

export default function Home() {
  const v1 = new Vertex('v1');
  const v2 = new Vertex('v2');
  const v3 = new Vertex('v3');
  const v4 = new Vertex('v4');
  const v5 = new Vertex('v5');
  const v6 = new Vertex('v6');
  v1.addNeighbor(v2, 5);
  v1.addNeighbor(v3, 4);
  v3.addNeighbor(v4, 1);
  v3.addNeighbor(v2, 6);
  v3.addNeighbor(v5, 9);
  v2.addNeighbor(v4, 7);
  v2.addNeighbor(v5, 8);
  v4.addNeighbor(v6, 3);
  v4.addNeighbor(v5, 1);
  v5.addNeighbor(v6, 2);
  // v1.addNeighbor(v2, 2);
  // v1.addNeighbor(v3, 4);
  // v1.addNeighbor(v4, 1);
  // v2.addNeighbor(v3, 3);
  // v2.addNeighbor(v4, 3);
  // v2.addNeighbor(v1, 4);
  // v3.addNeighbor(v6, 5);
  // v6.addNeighbor(v1, 4);
  // v3.addNeighbor(v4, 5);
  // v3.addNeighbor(v5, 1);
  // v4.addNeighbor(v5, 1);
  // v4.addNeighbor(v6, 2);
  // v5.addNeighbor(v6, 4);
  // v6.addNeighbor(v2, 5);
  // console.log('print BFS from source:');
//  const bfs = new BFS(v1);
//  bfs.bfs();

  //console.log('print DFS from source:');
  //const dfs = new DFS();
  //dfs.dfs(v1);
  const graphs = [v1, v2, v3, v4, v5, v6];
  const maxFlowAlgorithm = new MaxFlowAlgorithm(graphs);

  const source =v1;  // Vértice de origen
  const sink = v2;    // Vértice de destino
  const maxFlow = maxFlowAlgorithm.findMaxFlow(source, sink);
  console.log("Flujo máximo:", maxFlow);
  // const prim = new Prim(v1, graphs);
  // prim.prim();
  
  // const dijkstra = new Dijkstra(v1, graphs);
  // const floid1 = new intento(graphs)
  // floid1.floydWarshall();
  // const floid  =new  Floid(graphs);
  //  floid.printFloydResult()
  //  const floid2  =new  IntentoFloid(graphs);
  //  floid2.tourGrapher()

  // floid.tourGrapher(graphs)

  //  dijkstra.findShortestPath();
  //  dijkstra.printRouteLabels();
  // console.log(graphs)
  return (
    <>
      <h1>
        hola mundo
      </h1>
    </>
  )
}
