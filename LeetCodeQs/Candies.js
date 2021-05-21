/*
    Given the array candies and the integer extraCandies, where candies[i] represents the number of candies that the ith kid has.

    For each kid check if there is away to distribute extraCandies among the kids such that he or she can have the greatest number of candies among them. Notice that multiple kids can have the greatest number of candies
*/

function kidsWithCandies(candies, extraCandies){

    // create empty array to push true/false into
 
    // give each kid in the array all the candies and compare if they have the most compared to the other kids
        // replace console logs to push true/false into array
    for (kid of candies){
        if (kid + extraCandies >= Math.max(...candies)){
            console.log("I have the most")
        } else {
            console.log("I do not have the most")
        }
    }

    // return an array with true/false values for each kid in the array if they can have the greatest # of candies if given the extraCandies

}

console.log(kidsWithCandies([4,2,1,1,2], 1))