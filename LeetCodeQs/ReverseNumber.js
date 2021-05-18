/*
    Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-2^31, 2^31 - 1], then return 0.

    Assume the environment does not allow you to store 64-bit integers (signed or unsigned).
*/

function reverse(x){

    //stringify the x, split, reverse, rejoin it and return it to a number with parseInt
    let newNum = parseInt(x.toString().split("").reverse().join("")) * Math.sign(x)

    // console.log(newNum)
    if (newNum > (Math.pow(2, 31) -1) || newNum < Math.pow(-2, 31)){
        return 0
    } else {
        return newNum
    }
    
    //return the reversed number
}

console.log(reverse(123))
console.log(reverse(-123))