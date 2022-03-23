/*
  Given the string, check if it is a palindrome.

Example

For inputString = "aabaa", the output should be
solution(inputString) = true;
For inputString = "abac", the output should be
solution(inputString) = false;
For inputString = "a", the output should be
solution(inputString) = true.

**Input/Output**

[execution time limit] 4 seconds (js)

[input] string inputString

A non-empty string consisting of lowercase characters.

Guaranteed constraints:
1 ≤ inputString.length ≤ 105.

[output] boolean

true if inputString is a palindrome, false otherwise.
*/

function solution(inputString) {
  let newString = '';

  for (let i = inputString.length - 1; i >= 0; i--) {
    newString += inputString[i];
  }

  if (newString === inputString) {
    return true;
  } else {
    return false;
  }
}
