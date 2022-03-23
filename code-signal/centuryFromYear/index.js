/*
  Given a year, return the century it is in. The first century spans from the year 1 up to and including the year 100, the second - from the year 101 up to and including the year 200, etc.

Example

For year = 1905, the output should be
solution(year) = 20;
For year = 1700, the output should be
solution(year) = 17.

**Input/Output**

[execution time limit] 4 seconds (js)

[input] integer year

A positive integer, designating the year.

Guaranteed constraints:
1 ≤ year ≤ 2005.

[output] integer

The number of the century the year is in.
*/

function solution(year) {
  const yearD = year / 100;
  if (yearD <= 1) {
    return 1;
  } else if (yearD <= 2) {
    return 2;
  } else if (yearD <= 3) {
    return 3;
  } else if (yearD <= 4) {
    return 4;
  } else if (yearD <= 5) {
    return 5;
  } else if (yearD <= 6) {
    return 6;
  } else if (yearD <= 7) {
    return 7;
  } else if (yearD <= 8) {
    return 8;
  } else if (yearD <= 9) {
    return 9;
  } else if (yearD <= 10) {
    return 10;
  } else if (yearD <= 11) {
    return 11;
  } else if (yearD <= 12) {
    return 12;
  } else if (yearD <= 13) {
    return 13;
  } else if (yearD <= 14) {
    return 14;
  } else if (yearD <= 15) {
    return 15;
  } else if (yearD <= 16) {
    return 16;
  } else if (yearD <= 17) {
    return 17;
  } else if (yearD <= 18) {
    return 18;
  } else if (yearD <= 19) {
    return 19;
  } else if (yearD <= 20) {
    return 20;
  } else {
    return 21;
  }
}
