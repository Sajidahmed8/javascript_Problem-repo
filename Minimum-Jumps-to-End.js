/* 
Problem : 1.
            You are given an array 'arr' of size 'n' where each element in arr[] represents the max-
            length of the jump that can be made forward from that element. Find the minimum number
            of jumps to reach the end of the array (starting from the first element). If an element 
            is 0, then you cannot move through that element and return-1 if you can't reach the end of
            the array.
            
            The function minimum jumps() accepts the parameters array of integer arr having size n.
            Complete the function minimum jumps() and return the value of minimum value in the integer
            format.
            
            For Example : If the array arr is [2,0,3,5] of size 4 then the minimum number of jumps
                          will be 2.
                          
                Example 1:
                    Input : 
                        n=10

                        arr=[5,1,6,2,0,12,5,24,0,22]

                    Output :
                        minimum_value=2
                    */

// Solution :

function minimum_Jumps(arr) {
    const n = arr.length;
    const jumps = new Array(n).fill(Number.MAX_SAFE_INTEGER);

    if(n === 0 || arr[0] === 0)
    {
        return -1;
    }

    jumps[0] = 0;

    for(let i=1;i<n;i++){
        for(let j=0;j<i;j++){
            if(j + arr[j] >= i){
                jumps[i] = Math.min(jumps[i], jumps[j] + 1);
            }
        }
    }
    return jumps[n-1] === Number.MAX_SAFE_INTEGER ? -1 : jumps[n-1];
}
const arr = [5,1,6,2,0,12,5,24,0,22];
const result = minimum_Jumps(arr);
console.log("Minimum Jumps : ", result);
