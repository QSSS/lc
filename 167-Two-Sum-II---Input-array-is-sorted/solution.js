/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    // if (!numbers) {
    //     return [];
    // }
    
    // var sums = {};
    // for (var i = 0, len = numbers.length; i < len; i++) {
        
    //     if (sums[numbers[i]] !== undefined){
            
    //         return [sums[numbers[i]] + 1, i + 1];
    //     }
    //     sums[target - numbers[i]] = i;
    // }
    // return [];
    
    if (!numbers) {
        return [];
    }
    var left = 0, right = numbers.length - 1, sum;
    while (left < right) {
        sum = numbers[left] + numbers[right];
        if (sum == target) return [left + 1, right + 1];
        if (sum < target) {
            left++;
        } else {
            right--;
        }
    }
    return [];
};