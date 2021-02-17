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
// console.log(addUpTo(100000000))
let t2 = performance.now()

// console.log(`Time Elapsed: ${(t2-t1) / 1000} seconds`)
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

// printAllPairs(4)

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


/*
        Big O Shorthands

    1. Arithmetic operations are constant time (add/subtracting/dividing/multiplying)
    2. Variable assignment is constant (x=1 and x=100000 is roughly same time)
    3. Accessing elements in an array (by index array[3]) or object (by key object[key]) is constant runtime
    4. In a loop, complexity is the length of the complexity times the complexity INSIDE the loop (loop inside loop is O(n) * O(n) = O(n^2))


*/

function logAtLeast5(n){
    for (let i = 0; i <= Math.max(5, n); i++){
        console.log(i)
    }
}

/*
    Big O here?
    Loop - O(n)
    5 - O(1)
    5 only matters if n is small and will run 5 times constant, but if n grows towards infinitely the loop will run n times
    Big O is O(n)
*/
// console.log(logAtLeast5(2))


function logAtMost5(n){
    for (let i = 0; i <= Math.min(5, n); i++){
        console.log(i)
    }
}
// console.log(logAtMost5(2))

/*
    Big O here?
    As n grows here, it doesn't matter because we are only taking the min of 5 operations.
    If n is 2 then we are only doing 2 operations

    O(5) in worst case scenario
    O(1) simplified

*/

// So far we've been focusing on TIME COMPLEXITY and analyzing the RUNTIME of an algorithm as size of inputs (n) increased

/*
        SPACE COMPLEXITY

    - the amount of memory taken up in order to run the code in our algorithm

    - auxiliary space complexity refers to the space required by the algorithm ONLY.
        - NOT THE SPACE TAKEN BY THE INPUTS
    - what happens inside the algo



        RULES OF THUMB: Space Complexity

    - Most primatives (booleans, numbers, undefined, null) are constant space. O(1)
        - size of input doesn't matter because it's taking up the same amount of space
    - Strings require O(n) space where n is the string length (50 character string takes up 50 times more space than single character string)
    - Reference types Arrays (length) and Object (number of keys) are O(n) (if length of array is 1 compared to 2 it takes up 2x more space)

*/

function sum(arr){
    let total = 0;
    for (let i = 0; i < arr.length; i++){
        total += arr[i]
    }
    
    return total
}

/*
        Space Big O

    Variable called total = 0 (number) O(1)
    variable called i = 0 (number) O(1)
    adding to total variable doesn't change the space, it's already there

    O(1)

*/


function double(arr){
    let newArr = [];
    for (let i = 0; i < arr.length; i++){
        newArr.push(2 * arr[i])
    }
    return newArr
}

/*
        Space Big O
    
    newArray variable is getting longer and longer directly proportionate to the input array (n)
    O(1) (from newArray = [] )
    O(1) (from let i=0)
    O(n) (from pushing elements into array from the length of the input array)
    
*/


/*

        Logarithms

    - Some algorithms involve complex mathematical expressions - logarithms come up a lot.
    - O( log n)


    A logarithm is the inverse of an exponent.

    log 2 (8) = 3      --> 2 to what power gives us 8? ---> 2^3 = 8

    log 2 (value) = exponent    -----> 2^exponent = value


    log is not always base 2 sometimes it's base 3 or e or 10
    - primarily 2 (binary)

    log === log 2   (to simplify)
    
    Comparing the graph of O(1), O(n), O(n^2) it doesn't matter if it's log 2 / log 3 / log 10


                RULE OF THUMB
        
        The logarithm of a number roughly measures the number of times you can divide
        that number by 2 before you get a value that less than or equal to one


        8
        /2      1
        4
        /2      2
        2
        /2      3
        1
        log (8) = 3


        25
        /2      1
        12.5    
        /2      2
        6.25
        /2      3
        3.125
        /2      4
        1.5625
        /2      5
        0.78125

        (somewhere between 4 and 5)

        log (25) = 4.64



        Logarithm time complexity O(log n) is GREAT

*/