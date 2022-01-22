//       10  
//   4       20 
// 2   8   17  170

class Node {
    constructor(value) {
        this.left = null;
        this.right = null;
        this.value = value;
    }
}
class BinarySearchTree {
    constructor() {
        this.root = null;
    }
    insert(value) {
        const newNode = new Node(value);
        if (this.root === null) {
            this.root = newNode;
        } else {
            let currentNode = this.root;
            while (true) {
                if (value < currentNode.value) {
                    if (!currentNode.left) {
                        currentNode.left = newNode;
                        return this;
                    }
                    currentNode = currentNode.left
                } else {
                    if (!currentNode.right) {
                        currentNode.right = newNode;
                        return this;
                    }
                    currentNode = currentNode.right;
                }
            }
        }
    }
    // search(value) => Que busque un el numero en el arbol y que me regrese todo su nodo
    search(value) {
        if (value === this.root.value) {
            return this.root;
        } else {
            let currentNode = this.root;
            while (true) {
                if (value < currentNode.value) {
                    if (value === currentNode.left.value) return currentNode.left;
                    currentNode = currentNode.left;
                } else {
                    if (value === currentNode.right.value) return currentNode.right;
                    currentNode = currentNode.right;
                }
                if (!(currentNode.left && currentNode.right)) {
                    return null;
                }
            }
        }
    }
    remove(value) {
        if(value === this.root.value) {
            return this.root = null;
        } else {
            let currentNode = this.root;
            while(true) {
                if (value < currentNode.value) {
                    if (value === currentNode.left.value) {
                        currentNode.left = null;
                        return currentNode;
                    } 
                    currentNode = currentNode.left;
                } else {
                    if (value === currentNode.right.value) {
                        currentNode.right = null;
                        return currentNode;
                    }
                    currentNode = currentNode.right;
                }
                if (!(currentNode.left && currentNode.right)) {
                    return null;
                }
            }
        }
    }
    // Advantages of BST over Hash Table - METHOD
 
}

//       10  
//   4       20 
// 2   8   17  170

const tree = new BinarySearchTree();
console.log("new", tree);

console.log("insert", tree.insert(10));
console.log("insert", tree.insert(4));
console.log("insert", tree.insert(20));
console.log("insert", tree.insert(2));
console.log("insert", tree.insert(8));
console.log("insert", tree.insert(17));
console.log("insert", tree.insert(170));

console.log("RESULT", tree);

console.log("search", tree.search(1))

console.log("remove", tree.remove(3))