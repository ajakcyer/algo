//              Problem Solving Patterns
//              -----------------------

/*
    1. DEVISE a plan for solving problesm
    2. MASTER common problem solving patterns
            -- for common approaches (DOES NOT COVER ALL SCENARIOS)
*/

/*
        SOME PATTERNS...

    - Frequency Counter
    - Multiple Pointers
    - Sliding Window
    - Divide and Conquer
    - Dynamic Programming
    - Greedy Algorithms
    - Backtracking
    - Many more...
*/


/*
        FREQUENCY COUNTERS

    Uses an object or sets collect values/frequencies of values

    This avoids the need for nested loops O(n^2) with arrays/strings
    
*/

/*                      EXAMPLE 1
    Write a function called same, which accepts two arrays. The function should return true if every value in the array has it's corresponding values squared in the second array. The frequency of values must be the same.

    same([1,2,3], [4,1,9]) returns true
    same([1,2,3], [1,9]) returns false
    same([1,2,1], [4,4,1]) returns false (must be same freq)
*/

function mySame(arrayOne, arrayTwo){

    if (arrayOne.length !== arrayTwo.length){
        return false
    }

    // square the values of arrayOne
    
    // compare the squared values of arrayOne to see if the values are in arrayTwo

    let squaredValues = {}

    for (let i=0; i < arrayOne.length; i++){
        squaredValues[(arrayOne[i] * arrayOne[i])] = 0
    }

    // console.log(squaredValues)

    for (let j=0; j < arrayTwo.length; j++){
        let numb = arrayTwo[j].toString()
        
        if (numb in squaredValues){
            squaredValues[numb]++
        }
    }

    // if every object key values doesn't equal 1 then return false -- otherwise return true
    // console.log(squaredValues)

    return Object.values(squaredValues).every(el => el == 1)


    // returns true or false
}

// mySame([1,2,3], [4,4,1])

/*          Colt's version          */
function same(arr1, arr2){
    if(arr1.length !== arr2.length){
        return false;
    }

    let frequencyCounter1 = {};
    let frequencyCounter2 = {};

    for (let val of arr1){
        frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1
    }

    for (let val of arr2){
        frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1
    }
    console.log(frequencyCounter1)
    console.log(frequencyCounter2)

    for (let key in frequencyCounter1){
        if(!(key ** 2 in frequencyCounter2)){
            return false
        }

        if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]){
            return false
        }
    }

    return true


}

same([1,2,3], [4,4,1])