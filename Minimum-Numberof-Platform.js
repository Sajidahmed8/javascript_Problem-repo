/*
Problem 3:
            You are given an array arr[] and dep[] of size n the arrival and departure times of the
            trains in (HHMM) format that reach a railway station. Find the minimum number of platforms
            required for the railway station so that no train is kept waiting. Arrival and departure 
            time can never be the same for a train but we can have the arrival time of one train equal 
            to the departure time of the other. At any given instance of time, the same platform can not
            be used for both departure of a train and arrival of another train. In such cases, we need 
            different platforms.

            Note: Time intervals are in the 24-hour format(HHMM), where the first two characters 
            represent hours (between 00 to 23) and the last two characters represent minutes 
            (this may be>59).

            The function minimum plateform() accepts the parameters array of integer arr and dep 
            with the size n. Complete the function minimum plateform() and return the mini value 
            in the integer format. For Example: If the array arr is (10923,1027,1650) and dep 
            (10950,1100,1654] of size 3 then the minimum number of platform required will be 1.

            Constraints:

                1кклка 1000

                0000<arr[i].dep[i][j]<=2359

            Example :

                Input:

                    n=7
                    arr [1111,1103,2115,2007,1022,1955,1211]
                    dep [1231,130,2300,2210,1255,2222,1717]
                                                                */

// Solution :-

function minimumPlatforms(arr, dep) {
    const n = arr.length;
    arr.sort((a, b) => a - b);
    dep.sort((a, b) => a - b);
    
    let platformsNeeded = 1;  
    let maxPlatforms = 1;     
    
    let arrPtr = 1;
    let depPtr = 0;
   
    while (arrPtr < n && depPtr < n) {
        if (arr[arrPtr] <= dep[depPtr]) {
            platformsNeeded++;
            arrPtr++;
        } else {
            platformsNeeded--;
            depPtr++;
        }
        maxPlatforms = Math.max(maxPlatforms, platformsNeeded);
    }
    return maxPlatforms;
}

const arr = [1111, 1103, 2115, 2007, 1022, 1955, 1211];
const dep = [1231, 130, 2300, 2210, 1255, 2222, 1717];
const n = arr.length;
const result = minimumPlatforms(arr, dep);
console.log(result); 
