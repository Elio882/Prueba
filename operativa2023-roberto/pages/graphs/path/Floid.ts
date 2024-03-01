import { Vertex } from "../Vertex";

export class Floid {
  vertices: Vertex[];
  constructor(graph: Vertex[]){
    this.vertices = graph;
}

  floyd(): number[][] {
    const n = this.vertices.length;
    const dist: number[][] = [];
  
    for (let i = 0; i < n; i++) {
      dist[i] = [];
      for (let j = 0; j < n; j++) {
        const weight = this.vertices[i].getWeight(this.vertices[j]);
        dist[i][j] = weight ? weight.getWeight() : Number.POSITIVE_INFINITY;
      }
      dist[i][i] = 0;
    }

    for (let k = 0; k < n; k++) {
      for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
          if (dist[i][k] + dist[k][j] < dist[i][j]) {
            dist[i][j] = dist[i][k] + dist[k][j];
          }
        }
      }
    }
  
    return dist;
  }
  printFloydResult(): void {
    const dist = this.floyd();
    for (let i = 0; i < dist.length; i++) {
      console.log(dist[i]);
    }
  }
}

    //   for (let i = 0; i < dist.length; i++) {
    //    const row = dist[i].join(", ");
    //    console.log(`[${row}]`);
    // }

    // tourGrapher(){
//     let miMatriz: number[][] = new Array(this.graph.length)
//     for (const i of this.graph) {
//         let matrix: Array<number> = new Array<number>;
//         for (let j = 0; j < i.getEdges().length; j++) {                
//             //this.record[i.getEdges()[j].getWeight()] = i.getEdges()[j].getFrom().getLabel() + "<->" + i.getEdges()[j].getTo().getLabel();
//             console.log(i.getEdges()[j].getWeight())
//             //console.log(i.getNeighbors()[j])
//             //  if(i.getEdges()[j].getWeight()!=null){
//             //      miMatriz.push(i.getEdges()[j].getWeight())                    
//             //  }else{
//             //      matrix.push(Infinity)
//             //  }
//         }
//     }
//     for (let i = 0; i < this.graph.length; i++) {
      
//     }
// }
   
