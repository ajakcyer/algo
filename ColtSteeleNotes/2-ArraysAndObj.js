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
    Searching - O(n)

    When you don't need order - objects are a great choice
*/