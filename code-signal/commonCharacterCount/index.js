/*
  Given two strings, find the number of common characters between them.

**Example**

For s1 = "aabcc" and s2 = "adcaa", the output should be
solution(s1, s2) = 3.

Strings have 3 common characters - 2 "a"s and 1 "c".

**Input/Output**

[execution time limit] 4 seconds (js)

[input] string s1

A string consisting of lowercase English letters.

Guaranteed constraints:
1 ≤ s1.length < 15.

[input] string s2

A string consisting of lowercase English letters.

Guaranteed constraints:
1 ≤ s2.length < 15.

[output] integer
*/

function solution(s1, s2) {
  let numberOfCommon = 0;

  for (let i = 0; i < s1.length; i++) {
    for (let j = 0; j < s2.length; j++) {
      if (s1[i] === s2[j]) {
        numberOfCommon++;
        s1 = removeIndexAtString(s1, i, s1.length)
        s2 = removeIndexAtString(s2, j, s2.length)
        j = -1;
        continue;
      }
    }
  }
  return numberOfCommon;
}

function removeIndexAtString(string, index, length) {
  if (index !== string.length - 1) {
    return (string.slice(0, index) + string.slice(index + 1, string.length));
  } else {
    return (string.slice(0, index));
  }
}
