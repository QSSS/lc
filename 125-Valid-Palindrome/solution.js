/**
 * @param {string} s
 * @return {boolean}
 */
String.prototype.isLetter = function(s) {
    return s.toLowerCase() !== s.toUpperCase();
} 

var isPalindrome = function(s) {
    if (!s) {
        return true;
    }
    re = /[0-9a-z]/ig;
    
    s_list = s.match(re);
    var left = 0, right = s_list.length - 1;
    while (left < right) {
        if (s_list[left] !== s_list[right]) {
            return false;
        }
        left++;
        right--;
    }
    return true;
    
};

