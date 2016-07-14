/**
 * @param {number[]} nums
 * @return {string}
 */
var largestNumber = function(nums) {
    nums.sort(function(a, b) {
        return b.toString() + a.toString() > a.toString() + b.toString();
    });
    if (nums[0] === 0){
        return "0";
    }
    return nums.join("");
    
};