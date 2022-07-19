class WeightedGraph extends Graph {
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

/***
 *** Use Graph as a constructor for WeightedGraph to inherit from!
 ***
 ***/

function Graph() {
  this.adjacencyList = {};
}

Graph.prototype.numEdges = function () {
  let total = 0;

  Object.values(this.adjacencyList).forEach((list) => {
    total += list.length;
  });

  // note that we've double-counted up til now since we've looked at
  // the adjacencyList for every node.
  return total / 2;
};

Graph.prototype.addVertex = function (vertex) {
  this.adjacencyList[vertex] = [];
};

Graph.prototype.addEdge = function (vertex1, vertex2, weight) {
  this.adjacencyList[vertex1].push({ node: vertex2, weight });
  this.adjacencyList[vertex2].push({ node: vertex1, weight });
};

Graph.prototype.removeVertex = function (vertex) {
  while (this.adjacencyList[vertex].length) {
    const adjacentVertex = this.adjacencyList[vertex].pop();
    this.removeEdge(adjacentVertex, vertex);
  }
  delete this.adjacencyList[vertex];
};

Graph.prototype.removeEdge = function (vertex1, vertex2) {
  this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
    (v) => v !== vertex2
  );
  this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
    (v) => v !== vertex1
  );
};

/***
 *** Use the following as a PriorityQueue (it's a min heap)!
 ***
 ***/
class PriorityQueue {
  constructor() {
    this.values = [];
  }
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
