Array.prototype.bubbleSort = function() {
    let sorted = false; 

    while (!sorted) {
        sorted = true
        for (let i = 0;  i < this.length - 1; i++) {
            if (this[i] > this[i+1]) {
                let temp = this[i];
                this[i] = this[i+1];
                this[i+1] = temp;
                sorted = false;
            }
        }
    }
    return this;
}

console.log([1,7,5,3,6].bubbleSort());



String.prototype.substrings = function() {
    let substrings = [];
    for (let i = 0; i < this.length; i++) {
        
        for (let j = i; j <= this.length; j++)
        if (i !== j) substrings.push(this.slice(i,j)); 
    }
    return substrings;
}

console.log("hello".substrings() );



