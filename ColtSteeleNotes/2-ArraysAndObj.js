/* 
            OBJECTIVES
    
    - Understand how objects and arrays work through the lens of Big O (is there a fast way? is there a slow way?)
    - Explain why adding element to the beginning of an array is costly (is there a better way?)
    - Compare and contrast the runtime for arrays and objects, as well as built-in methods

*/




let instructor = {
    firstName: "Kelly",
    isInstructor: true,
    favoriteNumbers: [1,2,3,4]
}

/*
                    OBJECTS
                    -------
    
    - UNORDERED data structures stored in key value pairs
    - work well when you don't need order
    - works fast access / insertion and removal
    - time complexity of O(1) -> CONSTANT TIME

    Insertion - O(1)
    Removal - O(1)
    Access - O(1)
    Searching - O(n) -> Not looking for a key (checking to see if a peice of information is in a value - like is true stored in our instructor object - have to go through each key until you find the right value)

    When you don't need order - objects are a great choice
*/


/*
            Big O of OBJECT Methods
            -----------------------
    
    Object.keys - O(n)
    Object.values - O(n)
    Object.entries - O(n)
    hasOwnProperty - O(1)

*/



let names = ["Michael", "Melissa", "Andrea"]
let values = [true, {}, [], 2, "awesome"]

/*
                ARRAYS
                ------
    - ORDERED lists -> Each el has an index associated with them
    - When you need fast access / inseration and removal (sort of fast..)

    Insertion - it depends
        - Adding to end of array is O(1) -> do not have to re-indexing the elements (Push)
        - Adding to beginning of array is O(n) -> Will HAVE to re-index all the elements in the array (unshift)

    Removal - it depends
        - Removing from end of array is O(1) -> do not have to re-indexing the elements (Pop)
        - Removing from beginning of array is O(n) -> Will HAVE to re-index all the elements in the array (shift)

    Access - O(1)

    Searching - O(n)


*/

/*
            Big O of ARRAY Methods
            -----------------------
    
    - push -> O(1) CONSTANT
    - pop -> O(1) CONSTANT

    - shift -> O(n) linear (have to reindex)
    - unshift -> O(n) linear (have to reindex)

    - concat -> O(n) -> takes multiple arrays and merges together
    - slice -> O(n) -> Returns copy of part of array or copy
    - splice -> O(n) -> Removes and adds new elements from beginning or end or middle of array

    - sort -> O(n log n)

    -forEach/map/filter/reduce/etc.. -> O(n) -> looping over each element

*/