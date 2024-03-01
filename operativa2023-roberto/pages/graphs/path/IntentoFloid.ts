import { Vertex } from "../Vertex";
import { Edge } from "../Edge";
export class IntentoFloid{
    vertices: Vertex[];
    graph: Vertex[];
    private record: Record<number, String> = {};
    private my2DArray : Array<Array<number>>;
    constructor(graph: Vertex[]){
        this.vertices = [];
        this.graph = graph;
        this.my2DArray = new Array<Array<number>>();
    }
    
    public tourGrapher(){
        let miMatriz: number[][] = new Array(this.graph.length)
       
        for (const i of this.graph) {
            let matrix: Array<number> = new Array<number>;
            for (let j = 0; j < i.getEdges().length; j++) {                
                this.record[i.getEdges()[j].getWeight()] = i.getEdges()[j].getFrom().getLabel() + "<->" + i.getEdges()[j].getTo().getLabel();
                 i.getNeighbors().forEach(element => {
                    element.edges.forEach(element1 => {
                        console.log(element1.getWeight())
                    });
                 });
                 if(i.getEdges()[j].getWeight()){
                    matrix.push(i.getEdges()[j].getWeight())                    
                 }else{
                    matrix.push(Infinity)
                 }
            }
            this.my2DArray.push(matrix);
        }
        
         console.log(this.my2DArray)
    }
  
// //     public tourGrapher(vertices: Vertex[]){
// //         const dist = floyd(vertices);
// //         this.printFloydResult(dist);
    
// //         function floyd(vertices: Vertex[]) {
// //             const n = vertices.length;
// //             const shortestDistances: number[][] = [];
// //              for (let i = 0; i < n; i++) {
// //                shortestDistances[i] = [];
// //                for (let j = 0; j < n; j++) {
// //                  const weight = vertices[i].getWeight(vertices[j]);
// //                  console.log(`Weight from vertex ${i} to vertex ${j}: ${weight}`); 
// //                  shortestDistances[i][j] = weight ? weight.getWeight() : Number.POSITIVE_INFINITY;
// //                }
// //                shortestDistances[i][i] = 0;
// //              }
      
// //             for (let i = 0; i < shortestDistances.length; i++) {
// //               const row = shortestDistances[i].join(", ");
// //               console.log(`[${row}]`);
// //             }




            
// //             for (let k = 0; k < n; k++) {
// //               for (let i = 0; i < n; i++) {
// //                 for (let j = 0; j < n; j++) {
// //                   if (shortestDistances[i][k] + shortestDistances[k][j] < shortestDistances[i][j]) {
// //                     shortestDistances[i][j] = shortestDistances[i][k] + shortestDistances[k][j];
// //                   }
// //                 }
// //               }
// //             }     
// //             return shortestDistances;
// //         }
// //     }

// //     public tourGrapher(): void {
// //       const dist = floyd(this.graph);
// //       this.printFloydResult(dist);

// //       function floyd(vertices: Vertex[]) {
// //           const n = vertices.length;
// //           const shortestDistances: number[][] = [];
// //           for (let i = 0; i < n; i++) {
// //               shortestDistances[i] = [];
// //               for (let j = 0; j < n; j++) {
// //                   const edges = vertices[i].getEdges();
// //                   let weight = Number.POSITIVE_INFINITY;
// //                   for (let k = 0; k < edges.length; k++) {
// //                       if (edges[k].getTo() === vertices[j]) {
// //                           weight = edges[k].getWeight();
// //                           break;
// //                       }
// //                   }
// //                   shortestDistances[i][j] = weight;
// //               }
// //               shortestDistances[i][i] = 0;
// //           }
// //           for (let i = 0; i < shortestDistances.length; i++) {
// //             const row = shortestDistances[i].join(", ");
// //             console.log(`[${row}]`);
// //           }

// //           for (let k = 0; k < n; k++) {
// //               for (let i = 0; i < n; i++) {
// //                   for (let j = 0; j < n; j++) {
// //                       if (shortestDistances[i][k] + shortestDistances[k][j] < shortestDistances[i][j]) {
// //                           shortestDistances[i][j] = shortestDistances[i][k] + shortestDistances[k][j];
// //                       }
// //                   }
// //               }
// //           }
// //           return shortestDistances;
// //       }
// //   }

// //   public printFloydResult(result: number[][]): void {
// //       for (let i = 0; i < result.length; i++) {
// //           const row = result[i].join(", ");
// //           console.log(`[${row}]`);
// //       }
// //   } 

// // 
}