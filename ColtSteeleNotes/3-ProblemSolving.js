//                         Algorithms and Problem Solving Approaches
//                        -------------------------------------------

/*
            OBJECTIVES
    - Define what an algorithm is
    - Create a plan to solve algorithms
    - Compare and contrast problem solving patterns
*/


/*
            What is an Algorithm?
    - A process or set of steps to accomplish a certain task
    
    Almost EVERYTHING you do in programming involves algorithms.
    It's the foundation for being a successful problem solver and developer
*/


/*
            How to get better at solving problems?
    
    1. DEVISE a plan for solving problems
    2. MASTER common problem solving patterns (a lot of problems can be broken into certain categories, know the general recipe)
*/



/*
            Problem Solving Strategies! (COMES WITH VIDEOS)

    - Understand the Problem
    - Explore Concrete Examples
    - Break it down
    - Solve / Simplify
    - Look back and refactor

*/



/*
            UNDERSTAND THE PROBLEM
            ----------------------
        (questions to ask yourself)

    1. Can I restate the problem in my own words? Not word-for-word.
    2. What are the inputs that go into the problem?
    3. What are the outputs, what should be returned?
    4. Can the outputs be determined from the inputs?
    5. How should I label the important pieces of data that are a part of the problem

*/

/*
            Explore Concrete Examples
            -------------------------
            coming up with examples help you understand the problem better. Examples help you check your work
    
    1. Start with simple examples
    2. Progress to more complex examples
    3. Explore examples with empty inputs
    4. Explore examples with invalid inputs (happens all the time)
*/

//EXAMPLES: Write a function which takes in a string a returns counts of each character in the string.

// simple
// charCount("aaaa"); // {a:4}
// charCount("hello"); // {h:1, e:1, l:2, o:1}

// complex: spaces, special characters, case sensitive?
// charCount("my phone number is 182763")

//explore with empty input -> problem with invalid input - edge cases

// charCount(""); // what to return
// charCount(); // what to return


/*
            Break it Down
            -------------
    1. BE VOCAL about thought process
    2.  Explicitly write out the steps you need to take.
    3. Forces you to THINK about the code before you write it and helps you catch misunderstandings. 
*/

// EXAMPLE: Write a function which taken in a string a returns counts of each character in the string. (same problem frmo before)

// charCount("Your PIN number is 1234!")

// function charCount(str){
//     // do something


//     // return an object with keys that are lowercase alphanumeric characters in the string. values should be counts for those characters in the string
// }

// function charCount(str){
//     // make object to return at end
//     // loop over string, for each character
//         // if the character is a num/letter AND a key in the object...add one to count
//         // if the character is a num/letter AND NOT in object...add it and set value to 1
//         // if character is something else (space, period...) don't do anything
        


//     // return object at end
// }


/*
            Solve/Simplify
            --------------
            Solve the problem if you can, if you can't...solve a simpler problem. Don't put all your eggs in one basket


            Simplify
            --------
            - Find what's the most difficult part
            - Ignore that part
            - Write a simplified solution
            - Incorporate it into the difficult part
*/

// EXAMPLE: Write a function which taken in a string a returns counts of each character in the string. (same problem frmo before)

function charCount(str){
    // make object to return at end

    // loop over string, for each character
        var result = {};

        for (var i=0; i < str.length; i++){
            var char = str[i].toLowerCase()
            // if the character is a num/letter AND a key in the object...add one to count
            if (result[char] > 0){
                result[char]++
            } else {
                // if the character is a num/letter AND NOT in object...add it and set value to 1
                result[char] = 1
            }
        }

        // if character is something else (space, period...) don't do anything
        return result;


    // return object at end
}

console.log(charCount("Your PIN number is 1234!"))

/*
            Look Back & Refactor
            --------------------
            Refactoring Questions:
    
    - Can you check the result?
    - Can you derive the result differently? (is there other ways to do this?)
    - Can you understand it at a glance?
    - Can you use the result or method for some other problem
    - Can you improve the performance of your solution
    - Can you think of other ways to refactor
    - How have other people solved this problem?
*/