/*
  Given an array of strings, return another array containing all of its longest strings.

Example

For inputArray = ["aba", "aa", "ad", "vcd", "aba"], the output should be
solution(inputArray) = ["aba", "vcd", "aba"].

Input/Output

[execution time limit] 4 seconds (js)

[input] array.string inputArray

A non-empty array.

Guaranteed constraints:
1 ≤ inputArray.length ≤ 10,
1 ≤ inputArray[i].length ≤ 10.

[output] array.string

Array of the longest strings, stored in the same order as in the inputArray.
*/

function solution(inputArray) {
  let longestStringsArray = [];
  let longestCharacterCount = 0;

  for (let i = 0; i < inputArray.length; i++) {
    if (inputArray[i].length > longestCharacterCount) {
      longestStringsArray = [];
      longestCharacterCount = inputArray[i].length;
      longestStringsArray.push(inputArray[i]);
    } else if (inputArray[i].length === longestCharacterCount) {
      longestStringsArray.push(inputArray[i]);
    }
  }
  return longestStringsArray;
}
