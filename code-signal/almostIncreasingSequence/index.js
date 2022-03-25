/*
  Given a sequence of integers as an array, determine whether it is possible to obtain a strictly increasing sequence by removing no more than one element from the array.

Note: sequence a0, a1, ..., an is considered to be a strictly increasing if a0 < a1 < ... < an. Sequence containing only one element is also considered to be strictly increasing.

Example

For sequence = [1, 3, 2, 1], the output should be
solution(sequence) = false.

There is no one element in this array that can be removed in order to get a strictly increasing sequence.

For sequence = [1, 3, 2], the output should be
solution(sequence) = true.

You can remove 3 from the array to get the strictly increasing sequence [1, 2]. Alternately, you can remove 2 to get the strictly increasing sequence [1, 3].

**Input/Output**

[execution time limit] 4 seconds (js)

[input] array.integer sequence

Guaranteed constraints:
2 ≤ sequence.length ≤ 105,
-105 ≤ sequence[i] ≤ 105.

[output] boolean

Return true if it is possible to remove one element from the array in order to get a strictly increasing sequence, otherwise return false.


*/

function solution(sequence) {
  let isIncreasing = true;
  let removalCount = 0;

  if (Math.max(...sequence) === sequence[0]) {
    sequence.splice(0, 1);
    removalCount++;
  }

  if (sequence.length === 2) {
    if (sequence[1] < sequence[0]) {
      return false;
    }
  }

  for (let i = 0; i < sequence.length; i++) {
    if (sequence.length === 1) {
      isIncreasing = true;
      break;
    }
    if (removalCount > 1) {
      isIncreasing = false;
    }
    if (sequence[i + 1] <= sequence[i]) {
      if (sequence[i + 1] > sequence[i - 1]) {
        sequence.splice(i, 1);
        removalCount++;
        i = -1;
        continue;
      }

      if (sequence.length === 2 && sequence[i + 1] === sequence[i]) {
        removalCount++;
        continue;
      }

      sequence.splice(i + 1, 1);
      removalCount++;
      i = -1;
      continue;
    }
  }

  console.log(sequence);
  return isIncreasing;
}
