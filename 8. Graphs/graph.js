class Graph {
    constructor() {
        this.nodes = 0;
        this.adjacentList = {}; 
    }
    addVertex(node) {
        this.adjacentList[node] = [];
        this.nodes++;
    }
    addEdge(node1, node2) {
        this.adjacentList[node1].push(node2);
        this.adjacentList[node2].push(node1);
    }
}

const myGraph = new Graph();

console.log(myGraph);
console.log("addVertex", myGraph.addVertex("1"));
console.log("addVertex", myGraph.addVertex("3"));
console.log("addVertex", myGraph.addVertex("4"));
console.log("addVertex", myGraph.addVertex("5"));
console.log("addVertex", myGraph.addVertex("6"));
console.log("addVertex", myGraph.addVertex("8"));
console.log("ANSWER", myGraph);

console.log("addEdge", myGraph.addEdge("3", "5"));
console.log("addEdge", myGraph.addEdge("3", "3"));
console.log("addEdge", myGraph.addEdge("1", "6"));
console.log("addEdge", myGraph.addEdge("1", "3"));
console.log("addEdge", myGraph.addEdge("1", "4"));
console.log("addEdge", myGraph.addEdge("4", "5"));
console.log("addEdge", myGraph.addEdge("8", "4"));
console.log("ANSWER", myGraph);


