/**
Problem : 4

    Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the 
    value to go outside the signed 32-bit integer range [-2^31, 2^31 - 1], then return 0.

    Assume the environment does not allow you to store 64-bit integers (signed or unsigned).

    Example 1:
        Input: x = 123
        Output: 321

    Example 2:
        Input: x = -123
        Output: -321

    Example 3:
        Input: x = 120
        Output: 21

    Constraints:
        -2^31 <= x <= 2^31 - 1

**/

// Solution :-

/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let absVal = Math.abs(x).toString()
    absVal = [...absVal].reverse().join("")

    if(absVal > Math.pow(2,31)){
        return 0
    }
    else{
        return x > 0 ? absVal : -absVal
    }
    
};