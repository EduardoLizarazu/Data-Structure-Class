class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.top = null;
        this.button = null;
        this.length = 0;
    }
    peek() {
        return this.top;
    }
    push(value) {
        // RETO DE VALIDAR TODAS LAS ESTRUCTURAS 
        const newNode = new Node(value);
        if (this.length === 0) {
            this.top = newNode;
            this.button = newNode;
        } else {
            const holdingPointer = this.top;
            this.top = newNode;
            this.top.next = holdingPointer;
        }
        this.length++;
        return this;
    }
    pop() {
        const holdingPointer = this.top.next;
        this.top = holdingPointer;
        this.length--;
        return this;
    }
}
const myStack = new Stack();
console.log("push", myStack.push(1));
console.log("push", myStack.push(2));
console.log("push", myStack.push(3));
console.log("push", myStack.push(4));
console.log("pop", myStack.pop());