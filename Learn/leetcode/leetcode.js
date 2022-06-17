/*
Given an integer array nums of length n, you want to create an array ans of length 2n 
where ans[i] == nums[i] and ans[i + n] == nums[i] for 0 <= i < n (0-indexed).
Specifically, ans is the concatenation of two nums arrays.
Return the array ans.
*/
// test case [1,2,1] or any array
var getConcatenation = function(nums) {
    //edge case check if nums is null
    let array = nums ;
    let array2 = nums ;
    let ans = [...array, ...array2] ;
    return ans ;
    // simpler [...nums,...nums] ;
};

console.log(getConcatenation(["s","t","r"]));
/* java solution:
class Solution {
    public int[] getConcatenation(int[] nums) {
        
        int[] ans = new int[2 * nums.length];
        for(int i =0; i < (2 * nums.length); i++){
            if( i < nums.length){
                ans[i] = nums[i];
            }else{
            ans[i] = ans[i - nums.length ];
            }
        }
        return ans ;
    }
}
*/
//------------------------------------------------------------------------------------------\\
/*
    Given a zero-based permutation nums (0-indexed), build an array ans of the same length 
    where ans[i] = nums[nums[i]] for each 0 <= i < nums.length and return it.
    A zero-based permutation nums is an array of distinct integers 
    from 0 to nums.length - 1 (inclusive).
    Example 1:
    Input: nums = [0,2,1,5,3,4]
    Output: [0,1,2,4,5,3]
    Explanation: The array ans is built as follows: 
    ans = [nums[nums[0]], nums[nums[1]], nums[nums[2]], nums[nums[3]], nums[nums[4]], nums[nums[5]]]
        = [nums[0], nums[2], nums[1], nums[5], nums[3], nums[4]]
        = [0,1,2,4,5,3]
*/

var buildArray = function(nums) {
    return ans = nums.map((num)=> nums[num] );
    
};
//eiether of the solutions work in js below actually is faster.
/* java solution

    class Solution {
        public int[] buildArray(int[] nums) {
            
            int[] ans = new int[nums.length];
            
            for(int i =0; i < nums.length; i++){
                ans[i] = nums[nums[i]];
            }
            return ans;
        }
    }

*/
//------------------------------------------------------------------------------------------\\
/*
Given an array nums. We define a running sum of an array as 
runningSum[i] = sum(nums[0]…nums[i]).
Return the running sum of nums.
Example 1:
Input: nums = [1,2,3,4]
Output: [1,3,6,10]
Explanation: Running sum is obtained as follows: [1, 1+2, 1+2+3, 1+2+3+4].
*/

var runningSum = function(nums) {
    const ans = [];
    let temp = 0;
    for(let i=0; i < nums.length; i++){
        temp += nums[i];
        ans[i] = temp;
    }
    return ans;
};
console.log(runningSum([1,2,3,4]));
//------------------------------------------------------------------------------------------\\
/*
You are given an m x n integer grid accounts where accounts[i][j] is the amount of money 
the i​​​​​​​​​​​th​​​​ customer has in the j​​​​​​​​​​​th​​​​ bank. Return the wealth that the richest customer has.

A customer's wealth is the amount of money they have in all their bank accounts. 
The richest customer is the customer that has the maximum wealth.

Example 1:

Input: accounts = [[1,2,3],[3,2,1]]
Output: 6
Explanation:
1st customer has wealth = 1 + 2 + 3 = 6
2nd customer has wealth = 3 + 2 + 1 = 6
Both customers are considered the richest with a wealth of 6 each, so return 6.

Example 2:

Input: accounts = [[1,5],[7,3],[3,5]]
Output: 10
Explanation: 
1st customer has wealth = 6
2nd customer has wealth = 10 
3rd customer has wealth = 8
The 2nd customer is the richest with a wealth of 10.
*/
var maximumWealth = function(accounts) {
    let richest =0;
    let temp = 0;
    
    for(i=0; i < accounts.length; i++){
        temp = 0;
        for(j=0; j < accounts[i].length; j++){
            temp +=  accounts[i][j];
        }
        if(temp > richest){
            richest = temp;
        }
    }
    return richest;
};
console.log(maximumWealth([[1,2,3],[3,2,1]]));

//------------------------------------------------------------------------------------------\\


