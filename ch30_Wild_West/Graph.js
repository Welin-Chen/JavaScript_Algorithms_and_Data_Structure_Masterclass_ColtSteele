class Graph {
  constructor() {
    this.adjacencyList = {};
  }
  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }
  addEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1].push(vertex2);
    this.adjacencyList[vertex2].push(vertex1);
  }

  //   removeEdge(v1, v2) {
  //     this.adjacencyList[v1].forEach((el, i) => {
  //       if (el === v2) this.adjacencyList[v1].splice(i, 1);
  //     });
  //     this.adjacencyList[v2].forEach((el, i) => {
  //       if (el === v1) this.adjacencyList[v2].splice(i, 1);
  //     });
  //   }

  removeEdge(v1, v2) {
    this.adjacencyList[v1] = this.adjacencyList[v1].filter((el) => el !== v2);
    this.adjacencyList[v2] = this.adjacencyList[v2].filter((el) => el !== v1);
  }

  removeVertex(v) {
    let arr = this.adjacencyList[v];
    for (let i = 0; i < arr.length; i++) {
      let key = arr[i];
      this.adjacencyList[key] = this.adjacencyList[key].filter(
        (el) => el !== v
      );
    }

    // this.adjacencyList[v].forEach((key) => {
    //   this.adjacencyList[key] = this.adjacencyList[key].filter(
    //     (el) => el !== v
    //   );
    // });
    delete this.adjacencyList[v];
  }
  // dfs recusive
  // depthFirstSearch(start) {
  //   let result = [];
  //   let visited = {};
  //   let list = this.adjacencyList;

  //   function dfs(v) {
  //     if (visited[v]) return;
  //     result.push(v);
  //     visited[v] = true;
  //     list[v].forEach((el) => dfs(el));
  //   }
  //   dfs(start);
  //   return result;
  // }

  // dfs iterative
  depthFirstSearch(start) {
    let stack = [start];
    let visited = {};
    let result = [];

    visited[start] = true;
    while (stack.length) {
      let crt = stack.pop();
      result.push(crt);
      this.adjacencyList[crt].forEach((el) => {
        if (!visited[el]) {
          stack.push(el);
          visited[el] = true;
        }
      });
    }
    return result;
  }

  addEdge(v1, v2) {
    this.adjacencyList[v1].push(v2);
    this.adjacencyList[v2].push(v1);
  }

  breadthFirstSearch(start) {
    let queue = [start];
    let visited = {};
    let result = [];

    while (queue.length) {
      let crt = queue.shift();
      if (visited[crt]) continue;
      result.push(crt);
      visited[crt] = true;
      this.adjacencyList[crt].forEach((el) => queue.push(el));
    }
    return result;
  }
}

let graph = new Graph();
// graph.addVertex("A");
// graph.addVertex("B");
// graph.addVertex("C");
// graph.addVertex("D");

// graph.addEdge("A", "B");
// graph.addEdge("A", "C");
// graph.addEdge("B", "D");
// graph.addEdge("C", "D");

// console.log(graph.adjacencyList["A"]);
// console.log(graph.adjacencyList["B"]);
// console.log(graph.adjacencyList["C"]);
// console.log(graph.adjacencyList["D"]);

graph.addVertex("S");
graph.addVertex("P");
graph.addVertex("U");
graph.addVertex("X");
graph.addVertex("Q");
graph.addVertex("Y");
graph.addVertex("V");
graph.addVertex("R");
graph.addVertex("W");
graph.addVertex("T");

graph.addEdge("S", "P");
graph.addEdge("S", "U");

graph.addEdge("P", "X");
graph.addEdge("U", "X");

graph.addEdge("P", "Q");
graph.addEdge("U", "V");

graph.addEdge("X", "Q");
graph.addEdge("X", "Y");
graph.addEdge("X", "V");

graph.addEdge("Q", "R");
graph.addEdge("Y", "R");

graph.addEdge("Y", "W");
graph.addEdge("V", "W");

graph.addEdge("R", "T");
graph.addEdge("W", "T");

console.log(graph.breadthFirstSearch("S"));
//[S,P,U,X,Q,V,Y,R,W,T]
