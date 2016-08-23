/**
 * Definition for singly-linked list with a random pointer.
 * function RandomListNode(label) {
 *     this.label = label;
 *     this.next = this.random = null;
 * }
 */

/**
 * @param {RandomListNode} head
 * @return {RandomListNode}
 */
var copyRandomList = function(head) {
    if (!head) {
        return head;
    }
    var map = new Map();
    var copyHead = new RandomListNode(head.label);
    var p = head;
    var q = copyHead;
    map.set(head, copyHead);
    p = p.next;
    
    while (p) {
        var nodeCopy = new RandomList(p.label);
        map.set(p, nodeCopy);
        q.next = nodeCopy;
        q = q.next;
        p = p.next;
        
    }
    
    p = head;
    q = copyHead;
    
    while (p) {
        q.random = map.get(p.random);
        q = q.next;
        p = p.next;
    }
    return copyHead;
};