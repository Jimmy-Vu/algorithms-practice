/*
  Ticket numbers usually consist of an even number of digits. A ticket number is considered lucky if the sum of the first half of the digits is equal to the sum of the second half.

Given a ticket number n, determine if it's lucky or not.

Example

For n = 1230, the output should be
solution(n) = true;
For n = 239017, the output should be
solution(n) = false.
Input/Output

[execution time limit] 4 seconds (js)

[input] integer n

A ticket number represented as a positive integer with an even number of digits.

Guaranteed constraints:
10 ≤ n < 106.

[output] boolean

true if n is a lucky ticket number, false otherwise.
*/

function solution(n) {
  const numString = n.toString();
  const numLength = numString.length;
  const halfLength = numLength / 2;

  let firstHalfSum = 0;
  let secondHalfSum = 0;

  for (let i = 0; i < numString.length; i++) {
    if (i < halfLength) {
      firstHalfSum += parseInt(numString[i], 10);
    } else {
      secondHalfSum += parseInt(numString[i], 10);
    }
  }
  if (firstHalfSum === secondHalfSum) {
    return true;
  } else {
    return false;
  }
}
