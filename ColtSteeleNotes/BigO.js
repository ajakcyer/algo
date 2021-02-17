const {performance} = require('perf_hooks')

/*  - Big O Gives us a numeric value of how our code performs.
    - Good for discussing trade-offs between diff approaches (Not just "this is the best")
    - Helps us identify inefficient points in code that makes things slow */


// Supposed we want to write a function that calculates the sum of all number from 1 up to (and including) some number n

//Solution 1
function addUpTo(n) {
    let total = 0;
    for (let i =1; i <= n; i++){
        total += i
    }
    return total;
}


//Solution 2
// function addUpTo(n){
//     return n * (n + 1)/2 
// }

let t1 = performance.now()
console.log(addUpTo(100000000)) // gives me 6
let t2 = performance.now()

console.log(`Time Elapsed: ${(t2-t1) / 1000} seconds`)
/*
        performance gives us the time it is
t2 (time after func) - t1 (time before func) / 1000 (to go from milliseconds to seconds)
GIVES US THE TIME ELAPSED

*/


// What does better mean?
/*  - Faster? ***
    - Less memory intensive ***
    - More readable? (the other two come at the expense of readablity) */