import { Vertex } from '../Vertex';
import { Stack } from '../Stack';

export class Dijkstra {
    public source: Vertex;
    public graph: Vertex[];
    constructor(source: Vertex, graph: Vertex[]) {
        this.source = source;
        this.graph = graph;
    }

    public findShortestPath() {
        this.source.setRouteLabel(0, null);
        this.source.setIsVisited(true);

        const unvisitedStack = new Stack<Vertex>();
        unvisitedStack.push(...this.graph);

        while (!unvisitedStack.isEmpty()) {
            const currentVertex = unvisitedStack.pop()!;
            currentVertex.neighbors.forEach((neighbor) => {
                if (!neighbor.isVisited) {
                    let weight = currentVertex.getRouteLabel()?.getWeight() || 0;
                    weight += currentVertex.getWeight(neighbor).getWeight();
                    if (weight < neighbor.getRouteLabel()?.getWeight()) {
                        neighbor.setRouteLabel(weight, currentVertex);
                    }
                }
            });

            currentVertex.setIsVisited(true);
            unvisitedStack.sort((a, b) => (a.getRouteLabel()?.getWeight() || Infinity) - (b.getRouteLabel()?.getWeight() || Infinity));
        }
    }

    public printRouteLabels() {
        this.graph.forEach((vertex) => {
            console.log(`[Vertex: ${vertex.getLabel()}, Weight: ${vertex.getRouteLabel()?.getWeight()}, Parent Vertex: ${vertex.getRouteLabel()?.getParentVertex()?.getLabel()}]`);
        });
    }
}