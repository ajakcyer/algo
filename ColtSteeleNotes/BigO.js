// Big O Gives us a numeric value of how our code performs.
// Good for discussing trade-offs between diff approaches (Not just "this is the best")
// Helps us identify inefficient points in code that makes things slow


// Supposed we want to write a function that calculates the sum of all number from 1 up to (and including) some number n

//Solution 1
// function addUpTo(n) {
//     let total = 0;
//     for (let i =1; i <= n; i++){
//         total += i
//     }
//     return total;
// }


//Solution 2
function addUpTo(n){
    return n * (n + 1)/2 
}

console.log(addUpTo(3)) // gives me 6
