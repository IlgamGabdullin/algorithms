export class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(key) {
    if (this.adjacencyList[key]) { return; } // or error throwing;
    this.adjacencyList[key] = [];
  }

  addEdge(vertex1, vertex2) {
    if (!this.adjacencyList[vertex1] && !this.adjacencyList[vertex2]) { return; }

    this.adjacencyList[vertex1].push(vertex2);
    this.adjacencyList[vertex2].push(vertex1);
  }
  
  removeEdge(v1, v2) {
    if (!this.adjacencyList[v1] && !this.adjacencyList[v2]) { return; }

    this.adjacencyList[v1] = this.adjacencyList[v1].filter((item) => item !== v2);
    this.adjacencyList[v2] = this.adjacencyList[v2].filter((item) => item !== v1);
  }

  removeVertex(vertex) {
    if (!this.adjacencyList[vertex]) { return; }

    while(this.adjacencyList[vertex].length) {
      const adjacentVertex = this.adjacencyList[vertex].pop();
      this.removeEdge(vertex, adjacentVertex);
    }

    delete this.adjacencyList[vertex];
  }
}