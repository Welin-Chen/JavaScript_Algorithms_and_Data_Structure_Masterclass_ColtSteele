class WeightedGraph {
  constructor() {
    this.adjacencyList = {};
  }
  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }
  addEdge(v1, v2, weight) {
    this.adjacencyList[v1].push({ node: v2, weight });
    this.adjacencyList[v2].push({ node: v1, weight });
  }

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

    delete this.adjacencyList[v];
  }

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

  Dijkstra(start, end) {
    let nodes = new PriorityQueue();
    let d = {};
    let prev = {};
    let path = [];
    let node;

    for (let v in this.adjacencyList) {
      if (v === start) {
        d[v] = 0;
        nodes.enqueue(v, 0);
      } else {
        d[v] = Infinity;
        nodes.enqueue(v, Infinity);
      }
      prev[v] = null;
    }

    while (nodes.values.length) {
      node = nodes.dequeue().val;
      if (node === end) {
        while (node) {
          path.push(node);
          node = prev[node];
        }
        console.log(d[end]);
        return path.reverse();
      }
      if (node.priority !== Infinity) {
        for (let neighbor in this.adjacencyList[node]) {
          let nextNode = this.adjacencyList[node][neighbor];
          let distance = d[node] + nextNode.weight;
          nextNode = nextNode.node;

          if (distance < d[nextNode]) {
            d[nextNode] = distance;
            prev[nextNode] = node;
            nodes.enqueue(nextNode, distance);
          }
        }
      }
    }
  }
}

class PriorityQueue {
  constructor() {
    this.values = [];
  }
  // Lowest first
  enqueue(val, priority) {
    this.values.push({ val, priority });
    this.sort();
  }
  dequeue() {
    return this.values.shift();
  }
  sort() {
    this.values.sort((a, b) => a.priority - b.priority);
  }
}

let g = new WeightedGraph();

g.addVertex("A");
g.addVertex("Z");
g.addVertex("C");
g.addVertex("D");
g.addVertex("E");
g.addVertex("H");
g.addVertex("Q");
g.addVertex("G");

g.addEdge("A", "Z", 7);
g.addEdge("A", "C", 8);

g.addEdge("Z", "Q", 2);

g.addEdge("C", "G", 4);

g.addEdge("D", "Q", 8);

g.addEdge("E", "H", 1);

g.addEdge("H", "Q", 3);

g.addEdge("Q", "C", 6);

g.addEdge("G", "Q", 9);

console.log(g.Dijkstra("A", "E"));
// g.Dijkstra("A", "E"); //[A,Z,Q,H,E]
// g.Dijkstra("A", "Q"); //[A,Z,Q]
// g.Dijkstra("A", "G"); //[A,C,G]
// g.Dijkstra("A", "D"); //[A,Z,Q,D]
