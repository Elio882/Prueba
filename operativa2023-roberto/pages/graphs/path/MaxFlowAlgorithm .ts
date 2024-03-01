import { Vertex } from "../Vertex";
import { Edge } from "../Edge";
export class MaxFlowAlgorithm {
    private graph: Vertex[];
  
    constructor(graph: Vertex[]) {
      this.graph = graph;
    }
  
    public findMaxFlow(source: Vertex, sink: Vertex): number {
      let maxFlow = 0;
  
      while (true) {
        const path = this.findAugmentedPath(source, sink);
  
        if (!path) {
          // No se encontró una ruta aumentada, salir del bucle
          break;
        }
  
        let minCapacity = Number.POSITIVE_INFINITY;
        for (let i = 0; i < path.length - 1; i++) {
          const edge = path[i].getWeight(path[i + 1]);
          minCapacity = Math.min(minCapacity, edge.getWeight());
        }
  
        for (let i = 0; i < path.length - 1; i++) {
          const edge = path[i].getWeight(path[i + 1]);
          const reverseEdge = path[i + 1].getWeight(path[i]);
  
          edge.setWeight(edge.getWeight() - minCapacity);
          reverseEdge.setWeight(reverseEdge.getWeight() + minCapacity);
        }
  
        maxFlow += minCapacity;
      }
  
      return maxFlow;
    }
  
    private findAugmentedPath(source: Vertex, sink: Vertex): Vertex[] | null {
      const visited: Record<string, boolean> = {};
      const queue: Vertex[][] = [[source]];
  
      while (queue.length > 0) {
        const path = queue.shift() as Vertex[];
        const currentVertex = path[path.length - 1];
  
        if (currentVertex === sink) {
          // Se encontró una ruta aumentada al nodo destino
          return path;
        }
  
        if (!visited[currentVertex.getLabel()]) {
          visited[currentVertex.getLabel()] = true;
  
          for (const neighbor of currentVertex.getNeighbors()) {
            const edge = currentVertex.getWeight(neighbor);
            if (!visited[neighbor.getLabel()] && edge.getWeight() > 0) {
              queue.push([...path, neighbor]);
            }
          }
        }
      }
  
      // No se encontró una ruta aumentada al nodo destino
      return null;
    }
  }