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
    var missed = [];
    var originNode = head;
    var newNode = new RandomListNode(0);
    var originHead = head;
    var newHead = newNode;
    while(originNode !== null){
        var temp = new RandomListNode(originNode.label);
           dict[originNode.label] = temp;
           newNode.next = temp;
           newNode = newNode.next;

           if(originNode.random !== null){
               if(dict[originNode.random.label]){
                   newNode.random = dict[originNode.random.label];
               }else{
                   newNode.random = originNode.random.label;
                   missed.push(newNode.label);
               }
        }
        originNode = originNode.next;
    }
    for(var i = 0; i < missed.length; i++){
        var curr = dict[missed[i]];
        curr.random = dict[curr.random];
    }
    return newHead.next;    
};