// 1 --> 2 --> 3 --> 4 --> 5 --> null

let singlyLinkedList = {
    head: {
        value: 1,
        next: {
            value: 2,
            next: {
                value: 3,
                next : {
                    value: 4,
                    next: null
                }
            }
        }
    }
}

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class MySinglyLinkedList {
    constructor(value) {
        this.head = {
            value: value,
            next: null
        };
        this.tail = this.head;
        this.length = 1;
    }
    append(value) {
        const newNode = new Node(value);

        // this.tail.next => Le estamos pasando al next del this.head.next debido a la referencia en memoria, el nodo que es un obj para que deje de ser null y enlazarlo. E
        this.tail.next = newNode;

        // cambiamos la cola deja de tener referencia al head y lo ponemos el obj node para que se al ultimo elemento
        this.tail = newNode;
        this.length++;

        return this;
    }
    prepend(value) {
        const newNode = new Node(value);
        // Le paso todos los datos del head la newNode.next para reemplazar el null y sea el nuevo enlace entre todos los nodos, siendo el newNode, el nuevo this.head
        newNode.next = this.head;
        // Como el newNode tiene todos los nodos, se lo paso al this.head para que se complete la transicion.
        this.head = newNode;
        this.length++;

        return this;
    }
    insert(index, value) {
        if (index >= this.length) {
            return this.append(value);
        }
        // Save my new value
        // "h" -> null
        const newNode = new Node(value);
        // Un index menos del que quiero, el next apunta al que quiero
        // 1 -> 2 -> 3 -> null
        const firstPointer = this.getTheIndex(index -1);
        // el valor 2, con el enlace next lo esta guardando
        // 2 -> 3 -> null
        const holdingPointer = firstPointer.next;

        // se crea tambien otra ref de memoria con newNode entre lazado con this, a partir del nodo hello ya que guarda la ref de newNode
        // REF: 0 -> 1 -> "hello" -> null 
        // 1 -> "hello" -> null 
        firstPointer.next = newNode;
        // 
        // REF: 0 -> 1 -> "hello" -> 2 -> 3 -> null
        // "hello" -> 2 -> 3 -> null
        newNode.next = holdingPointer;
        // firstPointer.next.next = holdingPointer;
        
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
    remove(index, value) {
        if (index >= this.length) {
            return this.append(value);
        }
        const newNode = new Node(value);
        const firstPointer = this.getTheIndex(index -1);
        const holdingPointer = firstPointer.next;
        firstPointer.next = newNode;
        newNode.next = holdingPointer;

        this.length--;
        return this;
    }
    
}

let mySinglyLinkedList = new MySinglyLinkedList(1);

console.log(mySinglyLinkedList);
console.log("append", mySinglyLinkedList.append(2));
console.log("append", mySinglyLinkedList.append(3));

console.log("prepend", mySinglyLinkedList.prepend(0));

console.log("insert", mySinglyLinkedList.insert(2, "hello"))
