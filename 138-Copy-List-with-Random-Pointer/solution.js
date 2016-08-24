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
    var map = {};
    var copyHead = new RandomListNode(head.label);
    var p = head;
    var q = copyHead;
    map[head.label] = copyHead;
    p = p.next;

    while (p !== null) {
        var nodeCopy = new RandomListNode(p.label);
        map[p] = nodeCopy;
        q.next = nodeCopy;
        q = q.next;
        p = p.next;

    }

    p = head;
    q = copyHead;

    while (p !== null) {
        q.random = map[p];
        q = q.next;
        p = p.next;
    }
    return copyHead;
};