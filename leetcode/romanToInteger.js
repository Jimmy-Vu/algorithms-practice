/**
 * Runtime: 140 ms, faster than 89.66% of JavaScript online submissions for Roman to Integer.
 * Memory Usage: 47.4 MB, less than 55.29% of JavaScript online submissions for Roman to Integer.
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  let romanNumerals = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
  }

  let convertedIntArray = [];
  let returnInt = 0;

  for (let i = 0; i < s.length; i++) {
    convertedIntArray.push(romanNumerals[s[i]]);
  }

  for (let j = 0; j < convertedIntArray.length; j++) {
    if (convertedIntArray[j] >= convertedIntArray[j + 1] || convertedIntArray[j + 1] === undefined) {
      returnInt += convertedIntArray[j];
    } else {
      returnInt -= convertedIntArray[j];
    }
  }
  return returnInt;
};
