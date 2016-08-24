/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
 
// var mergeTwoLists = function(l1, l2) {
//     var head = new ListNode(0),
//         helper = head;
//     while (l1 && l2) {
//         if (l1.val < l2.val) {
//             helper.next = l1;
//             l1 = l1.next;
//         } else {
//             helper.next = l2;
//             l2 = l2.next;
//         }
//         helper = helper.next;
//     }
//     if (l1) {
//         helper.next = l1;
//     }
    
//     if (l2) {
//         helper.next = l2;
//     }
//     return head.next;
// }
 
var mergeKLists = function(lists) {
    function mergeTwoLists(l1, l2) {
        var i = l1, j = l2;
        var res = new ListNode(-1);
        curr = res;
        while(i && j && i.val !== undefined && j.val !== undefined){
            if(i.val < j.val){
                curr.next = i;
                i = i.next;
            }else{
                curr.next = j;
                j = j.next;
            }
            curr = curr.next;     
        }
        if(i && i.val !== undefined){
            curr.next = i;
        }
        if(j && j.val !== undefined){
            curr.next = j;
        }
        return res.next || [];
    }
    
    var k;
    while(lists.length >= 2){
        var tmpList = [];
        for(k = lists.length - 1; k >= 0; k-=2){
            tmpList.push(mergeTwoLists(lists[k], lists[k - 1]));
        }
        if(k === 0){
            tmpList.push(lists[0]);
        }
        lists = tmpList;
    }
    
    return lists[0] || [];
};

