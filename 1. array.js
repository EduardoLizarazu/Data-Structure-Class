// const array = ["Eduardo", "Jose", "Moara"];

class MyArray {
    constructor() {
        this.length = 0;
        this.data = {};
    }
    get(index) {
        return this.data[index];
    }
    push(item) {
        this.data[this.length] = item;
        this.length++;
        return this.data;
    }
    myPop() {
        if (this.length !== 0) {
            const lastItem = this.data[this.length-1];
            let aux = {};
            for (let i = 0; i <= this.length -2; i++) {
                 aux[i] = this.data[i];
            }
            this.data = {};
            for (let i = 0; i <=this.length -2; i++) {
                this.data[i] = aux[i]
                
            }
            this.length--;
            aux = null;
            return lastItem;
        }
        return this.data;
    }
    pop() {
        const lastItem = this.data[this.length-1];
        delete this.data[this.length-1];
        this.length--;
        return lastItem;
    }
    myDelete(index) {
        const item = this.data[index];
        this.shiftIndex(index);
        return item;
    }
    shiftIndex(index) {
        for (let i = index; i < this.length -1; i++) {
            this.data[i] = this.data[i +1];
        }
        delete this.data[this.length -1];
        this.length--;
    }
}

const myArray = new MyArray();


// push and get
myArray.push('Diego'); // return: { 0: "Diego" }
myArray.push('Karen'); // return: { 0: "Diego", 2: "Karen" }
myArray.push('Oscar'); // return: { 0: "Diego", 1: "Karen", 2: "Oscar" }
console.log(myArray); // return: { length: 3, data: { 0: "Diego", 1: "Karen", 2: "Oscar" } }

console.log(myArray.get(1)); // return: "Karen"
console.log(myArray.length); // 3
// console.log(myArray.myPop());
// console.log(myArray.pop());
console.log(myArray.myDelete(1));

