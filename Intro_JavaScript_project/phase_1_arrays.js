Array.prototype.uniq = function()  {
    let newArr = [];

    for (let i = 0; i <  this.length; i ++) {
        if ( !newArr.includes(this[i]) ) {
            newArr.push(this[i]);
        }
    }
    return newArr;
}

a = [1,2,2,3,3,3]
console.log( a.uniq() );  // => [1,2,3])


Array.prototype.twoSum = function()  {
    let newArr = [];
    for (let i = 0; i < this.length; i++) {

        for (let j = i + 1; j < this.length; j++) {
            let ele1 = this[i]
            let ele2 = this[j]

            if (ele1 + ele2 === 0) {
                newArr.push([i,j])
            }
        }

    }    
    return newArr;
}

b = [-1, 1, 0, 0, 2, 5, 3, -3]
console.log(b.twoSum() );



Array.prototype.transpose = function() {
    let bigArr = [];
    
    for (let i = 0; i < this[0].length; i++) {
        let smallArr = [];

        for (let j = 0; j < this.length; j++) {
            smallArr.push(this[j][i]);
        }
        bigArr.push(smallArr);
    }
    return bigArr;
};

c = [[1,2,3,4], [5,6,7,8]]
console.log( c.transpose() );
