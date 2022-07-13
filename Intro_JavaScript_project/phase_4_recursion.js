function range(start, end) {
    let ansArr = [];
    if (start > end) {
        return ansArr;
    }
    
    ansArr.push(start);
    range(start+1, end);
    // let increment = start + 1;
    // if (increment <= end) range(increment, end)
}


// console.log(range(1, 5) )

// function range(start, end) {
//     console.log(start);
//     const newNumber = start + 1;
//     if (newNumber <= end) range(newNumber, end);
// }
console.log( range(4, 6) );






