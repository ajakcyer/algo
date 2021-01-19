# Data Structures & Algorithm Notes

## Big O Notation

### expresses runtime by *how quickly it grows relative to the input as the input get larger*

- we express *how quickly the runtime grows* rather than the exact runtime in seconds
- we use relative to the size of the input **"n"** 
    - The runtime grows on the order of the size of the input **O(n)**
    - The runtime grows on the order of the square of the size of the input **O(n^2)**
- as the input gets larger
---

### An equation that describes how time scales with respect to input variables
- O(1) is a constant time with respect to the size of input (doesn't take longer with size of input)

- O(n) is linear with respect to the size of the input (twice amount of n takes twice as much time)


#### Rules for big O
1. two different steps in algorithm? ADD THEM
    - O(a) and O(b) = O(a+b) : an algorithm that walks through different arrays
2. Drop constants
    - O(n) and O(n) = O(2n) drop constant, O(n) : n is the size of array, same array
3. Different inputs => different variables
    - O(a) and O(b) = O(a*b) : a is length of arrayA and b is length of arrayB
    - Two arrays and looking for common elements in arrays
4. Drop non-dominate terms
    - O(n) and O(n^2) = O(n + n^2) => O(n^2)