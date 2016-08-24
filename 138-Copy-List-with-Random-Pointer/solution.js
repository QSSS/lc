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
    var dict = {};
    var originNode = head;
    var newNode = new RandomListNode(0);
    var originHead = head;
    var newHead = newNode;
    while(originNode !== null){
        var temp = new RandomListNode(originNode.label);
           dict[originNode.label] = temp;
           newNode.next = temp;

        newNode = newNode.next;
        originNode = originNode.next;
    }

    originNode = originHead;
    newNode = newHead.next;
    while(originNode !== null){
        if(originNode.random !== null){
            newNode.random = dict[originNode.random.label];
        }
        newNode = newNode.next;
        originNode = originNode.next;
    }
    return newHead.next;    
};