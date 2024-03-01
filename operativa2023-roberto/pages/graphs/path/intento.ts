import { Vertex } from "../Vertex";

export class intento{
    private vertices: Vertex[];

    constructor(vertices: Vertex[]) {
      this.vertices = vertices;
    }
  
    public floydWarshall(): number[][] {
      const n = this.vertices.length;
      const dist: number[][] = [];
      const next: (number | null)[][] = [];
      for (let i = 0; i < n; i++) {
        dist[i] = [];
        next[i] = [];
        for (let j = 0; j < n; j++) {
          if (i === j) {
            dist[i][j] = 0;
            next[i][j] = null;
          } else {
            dist[i][j] = Infinity;
            next[i][j] = j;
          }
        }
      }
  
      for (const vertex of this.vertices) {
        const i = this.vertices.indexOf(vertex);
        for (const edge of vertex.edges) {
          const j = this.vertices.indexOf(edge.getTo());
          dist[i][j] = edge.getWeight();
        }
      }
  
      for (let k = 0; k < n; k++) {
        for (let i = 0; i < n; i++) {
          for (let j = 0; j < n; j++) {
            if (dist[i][k] + dist[k][j] < dist[i][j]) {
              dist[i][j] = dist[i][k] + dist[k][j];
              next[i][j] = next[i][k];
            }
          }
        }
      }
      console.log("Matriz de distancias:");
      console.table(dist);
      console.log("Distancias y rutas más cortas:");
      for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
          if (i !== j) {
            const path = [i];
            let k = i;
            while (k !== j) {
              k = next[k][j]!;
              path.push(k);
            }
            console.log ("Distancia");
            console.log(` ${dist[i][j]}`);
            console.log(` ruta = ${path.join(" -> ")}`);
          }
        }
      }
      return dist;
    }
  }