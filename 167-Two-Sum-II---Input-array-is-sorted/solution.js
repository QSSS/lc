/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    if (!numbers) {
        return [];
    }
    
    var sums = {};
    for (var i = 0, len = numbers.length; i < len; i++) {
        
        if (sums[numbers[i]] !== undefined){
            
            return [sums[numbers[i]] + 1, i + 1];
        }
        sums[target - numbers[i]] = i;
    }
    return [];
};