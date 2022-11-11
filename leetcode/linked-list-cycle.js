/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
  var currentNode = head;
  const nodeArray = [];
  while (currentNode) {
    if (nodeArray.includes(currentNode.next)) {
      return true;
    }
    nodeArray.push(currentNode);
    currentNode = currentNode.next;
  }
  return false;
};
