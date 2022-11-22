/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  if (strs.length === 1) { return strs[0] }
  if (strs[0][0] !== strs[1][0]) { return "" }
  //create a variable to hold the longest prefix
  let longestPrefix = '';
  const firstString = strs[0];

  // iterate through the first string and take the value of the current index
  for (let i = 0; i < firstString.length; i++) {
    const currentChar = firstString[i];
    // iterate through the rest of the strs array and
    // compare the value of the firstString index against the value of the index of the element
    for (let j = 1; j < strs.length; j++) {
      if (j === strs.length - 1 && strs[j][i] === currentChar) {
        longestPrefix += currentChar;
      } else if (strs[j][i] === currentChar) {
        continue;
      } else {
        return longestPrefix;
      }
    }
  }
  //return the longest prefix
  return longestPrefix;
};
