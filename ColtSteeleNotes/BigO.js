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
//seems slower

/*
    # of operations in Solution 1:
    + (n additions)
    = (n assignments)
    (as n grows there's more operations)
    n additions and assignments (from i++)
    1 assignment (from total=0)
    1 assignment (from i=1)
    n comparisons ( i<=n)
    

    Regardless of the exact number, the general trend is "As n gorws, the # of operations grow roughly in proportion to n"


*/






//Solution 2
// function addUpTo(n){
//     return n * (n + 1)/2 
// }
// seems faster

/*
    # of operations in Solution 2:
    * (multiplication), + (addition), / (division)
    3

*/


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


/*
        The Problem With Time
    - Different machines will record different times (Results may vary)
    - The same machine will record different times too (Even by a little bit)
    - This is not precise enough, for fast algorithms speed measurement is not the best
*/



/* 
    Instead of counting seconds, we can count NUMBER OF SIMPLE OPERATIONS THE COMPUTER HAS TO PERFORM
    Calculate the # of operations it has to perform (the time is determined by # of Operations and it's constant)
*/