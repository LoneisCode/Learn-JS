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


