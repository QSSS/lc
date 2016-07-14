/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    var count = 0, candidate = nums[0];
    for (var i = 0; i < nums.length; i++) {
        if (nums[i] === candidate) {
            count++;
        } else if (count === 0) {
            candidate = nums[i];
            count++;
        } else {
            count--;
        }
    }
    return candidate;
};