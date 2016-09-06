/**
 * @param {string} s
 * @return {boolean}
 */
// String.prototype.isLetter = function(s) {
//     return s.toLowerCase() !== s.toUpperCase();
// } 

// var isPalindrome = function(s) {
//     if (!s) {
//         return true;
//     }
//     re = /[0-9a-z]/ig;
//     s_list = s.match(re);
//     if(!s_list) return true;
//     var left = 0, right = s_list.length - 1;
//     while (left < right) {
//         if (s_list[left].toLowerCase() !== s_list[right].toLowerCase()) {
//             return false;
//         }
//         left++;
//         right--;
//     }
//     return true;
    
// };
var isPalindrome = function(s) {
    var head = 0;
    var tail = s.length - 1;
    
    s = s.toLowerCase();
    
    while(head < tail) {
        while(s[head] && !s[head].match(/[a-z0-9]/)) {
            head++;
        }
        while(s[tail] && !s[tail].match(/[a-z0-9]/)) {
            tail--;
        }
        if(head < tail && s[head] !== s[tail]) {
            return false;
        }
        head++;
        tail--;
    }
    
    return true;
};

