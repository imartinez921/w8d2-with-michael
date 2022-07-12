Array.prototype.myEach = function(callback) {
    for (let i = 0; i < this.length; i++) {
        callback(this[i]);
    }
}

d = [1,2,3,4,5];
e = function(ele) { 
    console.log(ele)
};
f = d.myEach(e)
console.log(f);


Array.prototype.myMap = function(callback) {
    for (let i = 0; i < this.length; i++) {
        this[i] = callback(this[i]);
    }
    return this;
}

d = [1,2,3,4,5];
e = function(num1) {
    return num1 * 2;
};
f = d.myEach(e);
console.log(f);


Array.prototype.myReduce = function(callback, initialValue) {
    arr = this
    
    if (initialValue == undefined) {
        initialValue = this[0];
        arr = this.slice(1);
    }
    
    let accumulator = initialValue;
    for (let i = 0; i < arr.length; i++) {
        accumulator = callback(accumulator, arr[i]);
    }
    return accumulator;
}

c = [1,2,3,4,5]

function cb (acc = 0, curr)
{
    return acc + curr
}

console.log(c.myReduce(cb));




