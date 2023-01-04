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
var middleNode = function (head) {
  let count = 1;
  let currentNode = head;
  while (currentNode.next) {
    count++;
    currentNode = currentNode.next;
  }
  let mid = 0;
  if (count % 2 === 0) {
    mid = count / 2 + 1;
  } else {
    mid = Math.ceil(count / 2);
  }
  currentNode = head;
  count = 1;
  while (count <= mid) {
    if (count === mid) {
      return currentNode;
    }
    count++;
    currentNode = currentNode.next;
  }

};
