# Data Structures & Algorithm Notes

![Big O Graph](https://danielmiessler.com/images/big-o-chart-tutorial-bazar-aymptotic-notations-1.png)

## Big O Notation (asymptotic analysis)

### expresses runtime by *how quickly it grows relative to the input as the input gets arbitrarily large*

- we express *how quickly the runtime grows* rather than the exact runtime in seconds
- we use relative to the size of the input **"n"** 
    - The runtime grows on the order of the size of the input **O(n)**
    - The runtime grows on the order of the square of the size of the input **O(n^2)**
- as the input gets arbituarly large
    - we care most about the things that grows fastest as the input grows
---

### An equation that describes how time scales with respect to input variables
- O(1) is a constant time with respect to the size of input (doesn't take longer with size of input)

- O(n) is linear with respect to the size of the input (twice amount of n takes twice as much time)


### Rules for big O
1. two different steps in algorithm? ADD THEM
    - O(a) and O(b) = O(a+b) : an algorithm that walks through different arrays
2. Drop constants
    - O(n) and O(n) = O(2n) drop constant, O(n) : n is the size of array, same array
3. Different inputs => different variables
    - O(a) and O(b) = O(a*b) : a is length of arrayA and b is length of arrayB
    - Two arrays and looking for common elements in arrays
4. Drop non-dominate terms
    - O(n) and O(n^2) = O(n + n^2) => O(n^2)

---
## Time

- O(1) => **Constant time** relative to input - will always be one step
- O(n) => **Linear time** relative to input - if array has 1 thing it has to print 1, if array has 10 things, it has to print 10
- O(n^2) => **Quadratic time** relative to input - nesting two loops. if array has 10 items, we have to print 100 times, if array has 100 items we have to print 10,0000 items.

---
## N
- sometimes *n* is an actual number
``` javascript
    function sayHiNTimes(n){

    }
```
- sometimes *n* is the number of items in input array (input map or input object)
``` javascript
    function printAllItems(items){

    }
```

---

## Drop the constants
- if we have an algorithm that adds
- O(1) + O(1/2n) + O(100) or O(1 + 1/2n + 100)
- we just call it O(n)
- For big O we only care about what happens as *n* gets *arbitrarily large* so the 100 and 1 and 1/2 less of an effect.

---
## Drop the less significant terms
- if we have an algorithm that adds:
- O(n + n^2) we'll just call it O(n^2) because the O(n) becomes less significant as *n* gets larger.

---
## Being explicit with best and worst case big O
- if we're looking for an element in an array
- O(n) could be worst case : if found at index[-1]
- O(1) could be best case : if found at index[0]
- Sometimes being explicit gives you brownie points

---
## Space complexity
When you want to optimize for using less memory instead of less time.
- When talking about space complexity it's about *additional* space, and not the space taken up by the inputs
- Sometimes there's a tradeoff between saving time and saving space