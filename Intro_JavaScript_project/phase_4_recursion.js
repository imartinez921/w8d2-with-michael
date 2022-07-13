// function range(start, end) {
//     if (start > end) {
//         return [];
//     }
//     range(start+1, end).push(start);
//     // let increment = start + 1;
//     // if (increment <= end) range(increment, end)
// }

function range(start, end) {
    if (start === end) {
      return [];
    }
  
    let ans = range(start, end - 1);
    ans.push(end - 1);
    return ans;
  }


console.log(range(1, 5) )

// function range(start, end) {
//     console.log(start);
//     const newNumber = start + 1;
//     if (newNumber <= end) range(newNumber, end);
// }
console.log( range(4, 6) );






