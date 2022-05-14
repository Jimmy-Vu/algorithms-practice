/*
  Some people are standing in a row in a park. There are trees between them which cannot be moved. Your task is to rearrange the people by their heights in a non-descending order without moving the trees. People can be very tall!

Example

For a = [-1, 150, 190, 170, -1, -1, 160, 180], the output should be
solution(a) = [-1, 150, 160, 170, -1, -1, 180, 190].

Input/Output

[execution time limit] 4 seconds (js)

[input] array.integer a

If a[i] = -1, then the ith position is occupied by a tree. Otherwise a[i] is the height of a person standing in the ith position.

Guaranteed constraints:
1 ≤ a.length ≤ 1000,
-1 ≤ a[i] ≤ 1000.

[output] array.integer

Sorted array a with all the trees untouched.
*/

function solution(a) {
  let treesIndexes = [];
  let tempArray = [];
  let orderedHeight = [];
  let shortest = 0;

  if (a.every((value) => value === -1)) {
    return a;
  }

  if (!a.includes(-1)) {
    a.sort(numSort);
    return a;
  }

  if (a[1] !== -1) {
    shortest = a[1]
  }

  for (let i = 0; i < a.length; i++) {
    if (a[i] === -1) {
      treesIndexes.push(i);
    } e
    tempArray.push(a[i]);
  }

  if (a[i] < shortest) {
    shortest = a[i];
  }
}

orderedHeight = tempArray.sort(numSort);

for (let j = 0; j <= orderedHeight.length; j++) {
  if (treesIndexes.includes(j)) {
    orderedHeight.splice(j, 0, -1);
  }
}
return orderedHeight;
}

function numSort(a, b) {
  if (a > b) {
    return 1;
  } else if (b > a) {
    return -1;
  } else {
    return 0;
  }
}
