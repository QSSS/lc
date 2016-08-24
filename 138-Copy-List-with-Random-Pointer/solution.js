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
 2     var dict = {};
 3     var originNode = head;
 4     var newNode = new RandomListNode(0);
 5     var originHead = head;
 6     var newHead = newNode;
 7     while(originNode !== null){
 8         var temp = new RandomListNode(originNode.label);
 9            dict[originNode.label] = temp;
10            newNode.next = temp;
11 
12         newNode = newNode.next;
13         originNode = originNode.next;
14     }
15 
16     originNode = originHead;
17     newNode = newHead.next;
18     while(originNode !== null){
19         if(originNode.random !== null){
20             newNode.random = dict[originNode.random.label];
21         }
22         newNode = newNode.next;
23         originNode = originNode.next;
24     }
25     return newHead.next;    
26 };