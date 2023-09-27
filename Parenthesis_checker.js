/**
Problem : 3

    Given an expression string x. Examine whether the pair and orders of {,},(,),[,] are correct in exp.
    for example, the function should return 'true'for exp = [()]{}{[()()]()} and 'false' for exp = [(]).
    Note : The driver code prints "balanced" if function return true, otherwise it prints "not balanced".

    Example :
        Input :
            {([])}
        Output :
            true
        Explanation : {([])}. Same colored bracket can form balanced pairs, with 0 number of unblanced bracket.
    
    Constraints :
        1<=|x|<=32000
    
    Time Complexity : O(|x|)
    Space Complexity : O(|x|)

**/

// Solution :- 

class Solution
{
    //Function to check if brackets are balanced or not.
    ispar(x)
    {
        //your code here
        let stack = []
        let brackets = {
            '[':']', '(':')', '{':'}'
        }
        for(let i=0;i<x.length;i++){
            if(brackets[x[i]]){
                stack.push(x[i])
            }
            else{
                let top = stack.pop()
                
            if(x[i] !== brackets[top]){
                return false
            }
            }
        }
        return stack.length === 0
    }
}