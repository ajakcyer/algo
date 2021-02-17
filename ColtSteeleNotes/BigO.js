const {performance} = require('perf_hooks')

/*  - Big O Gives us a numeric value of how our code performs.
    - Good for discussing trade-offs between diff approaches (Not just "this is the best")
    - Helps us identify inefficient points in code that makes things slow
    
    WHEN WE ARE TALKING ABOUT BIG O --- WE ARE TALKING ABOUT WORSE CASE SCENARIO OF INPUT BEING VERY LARGE LARGE NUMBER
    
*/



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


    Regardless of the exact number, the general trend is "As n grows, the # of operations grow roughly in proportion to n"


    Number of operations is bounded by a multiple of n (say, 10n)
    O(n)

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


    Always has 3 Operations

    O(1)

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


/*  
        What does better mean?
    - Faster? ***
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


// -------------------- INTRO TO BIG O --------------------

/* 
    Big O - allows us to describe the relationship between the input size (n) and the runtime of that function (algorithm)

    - We dont care about details, only broad trends

    in Solution 1, the runtime grows proportionally to the size on n (the input) (Linearly)
    in Solution 2, the size of the n (the input) doesn't impact the runtime of the function

*/


/* 
        An algorithm is O( f(n) ) if the number of simple Operations the computer has to do
        is eventually less than a constant times f(n) as n increase

    f(n) could be linear ( f(n) = n )
    f(n) could be quadratic ( f(n) = n^2 )
    f(n) could be constant ( f(n) = 1)
    f(n) could be something entirely different

*/

function printAllPairs(n){
    for (let i = 0; i < n; i++){
        for (let j = 0; j < n; j++){
            console.log(i, j)
        }
    }
}

printAllPairs(4)

/* 
    # of Operations
    O(n) nested inside of O(n)

    - O(n^2)

    As n grows larger, the runtime grows QUADRATICALLY (n^2)

*/



/*
        RULE OF THUMB: Simplifying Big O Expressions

    - Constants don't matter
        O(2n) -> Simplify To -> O(n)
        O(500) -> Simplify To -> O(1) (constant number of operations, chart will be flat)
        O(13n^2) -> Simplify To -> O(n^2) (chart will look similiar with n^2 or 13n^2 once chart is elongated)

    - Smaller terms don't matter
        O(n + 10) -> Simplify To -> O(n)
        O(1000n + 50) -> Simplify To -> O(n)
        O(n^2 + 5n + 8) -> Simplify To -> O(n^2) (WHAT REALLY MATTERS IS THE n^2, 5*100 is 500, BUT 5*100^2 is BIG NUMBER)


*/