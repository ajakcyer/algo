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

// same([1,2,3], [4,4,1])



/*
                EXAMPLE 2
        Given two strings, write a function to determine if the second string is an anagram of the first.
        An anagram is a word, phrase, or name formed by rearranging the letters of another, such as
        "cinema", formed from "iceman"
    
        validAnagram('', '') -> true
        validAnagram('aaz', 'zza') -> false
        validAnagram('anagram', 'nagaram') -> true
        validAnagram('awesome', 'awesom') -> false

        -- all inputs are single words
            - no space, periods, punctionations, numbers, and all lowercase
*/

function validAnagram(string1, string2){


    // if the string lengths are not the same then they aren't anagrams
    if(string1.length !== string2.length){
        return false
    }

    // create an object with each letter of the string1 being the key with the number of times the letter is in the string

    // 1. create empty object
    let stringFreq1 = {}
    let stringFreq2 = {}

    // 2. loop through string1 with logic
    for (letter of string1){
        stringFreq1[letter] = (stringFreq1[letter] || 0) + 1
    }

    for (letter of string2){
        stringFreq2[letter] = (stringFreq2[letter] || 0 ) + 1
    }

    // console.log(stringFreq2)

    // 3. compare the key values in both objects to see if they have the same key and then if they have the same values

    for (key in stringFreq1){
        if (!(key in stringFreq2)){
            // if the key in stringFreq1 is not a key in stringFreq 2 return false
            return false
        }

        if (stringFreq1[key] !== stringFreq2[key]){
            // if the key/value of stringFreq1 is not the same as the key/value of stringFreq2 then return false
            return false
        }
    }

    return true
    // return true or false
}

console.log(validAnagram('anagram', 'nagaram'))


// --------------------------------------

/*
        MULTIPLE POINTERS

        Creating pointers or values that correspond to an index or position and move
        towards the begining, end or middle based on a certain condition.

        Great for solving problems with minimal space complexity too!

        EX)

        [-4,-3,-2,-1,0,1,2,5]
        "asdashlfksafasfdfdkld"

    
*/

/*

EXAMPLE)

Write a function called sumZero which accepts a sorted array (lowest to highest) of integers.
The function should find the first pair where the sum is 0. Return an
array that includes both values that sum to zero or undefined if a pair does
not exist

sumZero([-3,-2,-1,0,1,2,3]) -> [-3,3]
sumZero([-2,0,1,3]) -> undefined
sumZero([1,2,3]) -> undefined


*/

// A naive approach would have us having a loop inside of a loop

// Approach #1) In this way we are using 2 pointers. One is going from the left side and the other is going from the right side.
function sumZero(arr){
    let left = 0; // starting at first index of arr
    let right = arr.length - 1;  // starting at last index of arr
    while(left < right){
        let sum = arr[left] + arr[right]
        if(sum === 0){
            return [arr[left], arr[right]]
        } else if (sum > 0){
            right--;
        } else if (sum < 0){
            left++
        }
    }
}