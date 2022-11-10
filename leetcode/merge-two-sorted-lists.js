/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */

var mergeTwoLists = function (list1, list2) {
  // check if either of the lists are empty and return the other sorted list
  if (!list1) { return list2; }
  if (!list2) { return list1; }
  // create a new linked list for the merged sorted linked list
  // create an array to store all values of the nodes of the two lists
  const valueArray = [];
  // loop through list1 and store values into the array
  while (list1) {
    valueArray.push(list1.val);
    list1 = list1.next;
  };
  // loop through list2 and store values into the array
  while (list2) {
    valueArray.push(list2.val);
    list2 = list2.next;
  }
  // sort the array
  valueArray.sort((a, b) => { return a - b; });
  console.log(valueArray)
  // create a merged list with the first element of the array
  var mergedList = new ListNode(valueArray[0]);
  // make a copy of the head of the merged list
  var mergedHeadNode = mergedList;
  // loop through the array and append the values to the merged linked list
  for (let i = 1; i <= valueArray.length - 1; i++) {
    mergedList.next = new ListNode(valueArray[i]);
    mergedList = mergedList.next;
    console.log(mergedHeadNode)
  }

  //return the merged linked list from its head node
  return mergedHeadNode;
};
