class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

class MyDoublyLinkedList {
    constructor(value) {
        this.head = {
            value: value,
            next: null,
            prev: null
        };
        this.tail = this.head;
        this.length = 1;
    }
    append(value) {
        const newNode = new Node(value);
        newNode.prev = this.tail;
        this.tail.next = newNode;
        this.tail = newNode;

        this.length++;
        return this;
    }
    prepend(value) { // value = "new"
        // "new" -> null
        // null <- "new"
        const newNode = new Node(value);

        this.head.prev = newNode;

        // newNode = "new" -> 1 -> 2 -> 3 -> null
        newNode.next = this.head;
        
        // Como el newNode tiene todos los nodos, se lo paso al this.head para que se complete la transicion.
        // this.head = "new" -> 1 -> 2 -> 3 -> null
        this.head = newNode;

        this.length++;
        return this;
    }
    insert(index, value) {
        if (index >= this.length) {
            return this.append(value);
        }
        // "h" -> null
        const newNode = new Node(value);
        // 1 -> 2 -> 3 -> null
        const firstPointer = this.getTheIndex(index -1);
        // 2 -> 3 -> null
        const holdingPointer = firstPointer.next;

        // REF: 0 -> 1 -> "hello" -> null 
        // 1 -> "hello" -> null 
        firstPointer.next = newNode;
        newNode.prev = firstPointer;

        // REF: 0 -> 1 -> "hello" -> 2 -> 3 -> null
        // "hello" -> 2 -> 3 -> null
        newNode.next = holdingPointer;
        holdingPointer.prev = newNode;

        this.length++;
        return this;
    }
    getTheIndex(index) {
        let counter = 0;
        // 0 -> 1 -> 2 -> 3 -> null
        let currentNode = this.head;
        while (counter !== index) {
            // 1 -> 2 -> 3 -> null
            currentNode = currentNode.next;
            counter++;
        }
        return currentNode;
    }
    remove(index) {
        // if (index >= this.length) {
        //     return this.append(value);
        // }
        // current =  1 -> 2 -> "r" -> 3 -> null
        // remove(2) = 1 -> 2 -> 3 -> null

        // 2 -> "r" -> 3 -> null
        const firstPointer = this.getTheIndex(index-1);
        // "r" -> 3 -> null
        const holdingPointer = firstPointer.next;

        // Ref: 1 -> 2 -> 3 -> null --- LINKED NEXT
        // 2 --> 3 ->null
        firstPointer.next = holdingPointer.next;
        // console.log(firstPointer, holdingPointer.next)
        holdingPointer.next.prev = firstPointer;

        this.length--;
        return this;
    }
    
}

let myDoublyLinkedList = new MyDoublyLinkedList(1);

console.log(myDoublyLinkedList);
console.log("append", myDoublyLinkedList.append(2));
console.log("append", myDoublyLinkedList.append("remove"));
console.log("append", myDoublyLinkedList.append(3));
// console.log("prepend", myDoublyLinkedList.prepend("first"));

// console.log("insert", myDoublyLinkedList.insert(2, "new"))

console.log("remove", myDoublyLinkedList.remove(2));