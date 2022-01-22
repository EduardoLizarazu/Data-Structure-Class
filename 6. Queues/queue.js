class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}
class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.length = 0;
    }
    peek() {
        return this.first;
    }
    enqueue(value) {
        const newNode = new Node(value);
        if (this.length === 0) {
            this.first = newNode ;
            this.last = newNode;            
        } else {
            // const holdingPointer = this.last;
            // this.last = newNode;
            // this.last.next = holdingPointer;
            this.last.next = newNode;
            this.last = newNode;
        }
        this.length++;
        return this; 
    }
    dequeue() {
        if(this.length === 0){
            return this;
        }else if(this.length === 1){
            this.first = null;
            this.last = null;
        }else{
            this.first = this.first.next;
        }
        this.length--;
        return this;
    }
}

const myQueue = new Queue();
console.log("enqueue", myQueue.enqueue(1));
console.log("enqueue", myQueue.enqueue(2));
console.log("enqueue", myQueue.enqueue(3));
console.log("enqueue", myQueue.enqueue(4));

console.log("dequeue", myQueue.dequeue());
