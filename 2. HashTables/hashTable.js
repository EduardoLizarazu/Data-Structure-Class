class HashTable {
    constructor(size) {
        this.data = new Array(size);
    }
    hashMethod(key) {
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            hash = (hash + key.charCodeAt(i) * i) % this.data.length;            
        }
        return hash;
    }
    set(key, value) {
        const address = this.hashMethod(key);
        if (!this.data[address]) {
            this.data[address] = [];
        }
        this.data[address].push([ key, value ]);
        return this.data;
    }
    get(key) {
        const address = this.hashMethod(key);
        const currentBucket = this.data[address];
        if (currentBucket) {
            for (let i = 0; i < currentBucket.length; i++) {
                if (currentBucket[i][0] === key) {
                    return currentBucket[i][1];
                }                
            }
        }
        return undefined;
    }

    // delete a bucket
    remove(key) {
        const address = this.hashMethod(key);
        const currentBucket = this.data[address];
        if (currentBucket) {
            for (let i = 0; i < currentBucket.length; i++) {
                if (currentBucket[i][0] === key) {
                    const deleteBucket = currentBucket[i];
                    this.data[address].splice(i, 1);
                    return deleteBucket;
                }                
            }
        }
        return undefined;
    }

    // get all keys 
    getAllKeys() {
        let keys = [];
        let aux = 0;
        for (let i = 0; i < this.data.length; i++) {
            if (this.data[i] !== undefined) {
                for (let j = 0; j < this.data[i].length; j++) {
                    keys.push(this.data[i][j][0])
                }
            }
        }
        return keys;
    }
}

const myHashTable = new HashTable(50);

console.log(myHashTable);
console.log(myHashTable.set("Edward", 2001));
console.log(myHashTable.set("Jose", 2003));
console.log(myHashTable.set("Moara", 1996));

console.log("get", myHashTable.get("Edward"));

console.log("delete", myHashTable.remove("Moara"));
console.log(myHashTable)

// console.log("get keys", myHashTable.getAllKeys());
