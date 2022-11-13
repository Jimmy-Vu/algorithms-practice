/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
  if (!head) { return head }
  // create an array to contain the value of the nodes are we traverse to the tail
  const nodes = [];
  // traverse through the linked list with a loop until we reach the end
  while (head) {
    //push all node values into the array
    nodes.push(head);
    head = head.next;
  }
  var reversedNodes = nodes[nodes.length - 1];
  // loop through the array in reverse and link the nodes to each other
  for (let i = nodes.length - 2; i >= 0; i--) {
    reversedNodes.next = nodes[i];
    if (i === 0) { reversedNodes.next.next = null }
    reversedNodes = reversedNodes.next;
  }
  return nodes[nodes.length - 1];
};
