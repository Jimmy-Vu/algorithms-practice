/*
  Ratiorg got statues of different sizes as a present from CodeMaster for his birthday, each statue having an non-negative integer size. Since he likes to make things perfect, he wants to arrange them from smallest to largest so that each statue will be bigger than the previous one exactly by 1. He may need some additional statues to be able to accomplish that. Help him figure out the minimum number of additional statues needed.

Example

For statues = [6, 2, 3, 8], the output should be
solution(statues) = 3.

Ratiorg needs statues of sizes 4, 5 and 7.

**Input/Output**

[execution time limit] 4 seconds (js)

[input] array.integer statues

An array of distinct non-negative integers.

Guaranteed constraints:
1 ≤ statues.length ≤ 10,
0 ≤ statues[i] ≤ 20.

[output] integer

The minimal number of statues that need to be added to existing statues such that it contains every integer size from an interval [L, R] (for some L, R) and no other sizes.
*/

function solution(statues) {
  let smallestSize = statues[0];
  let largestSize = statues[0];

  for (let i = 1; i < statues.length; i++) {
    if (statues[i] < smallestSize) {
      smallestSize = statues[i];
    }
    if (statues[i] > largestSize) {
      largestSize = statues[i];
    }
  }

  return ((largestSize - smallestSize) - statues.length + 1);
}
