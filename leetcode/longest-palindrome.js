/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function (s) {
  if (s.length === 0) { return 0 }
  if (s.length === 1) { return 1 }
  const sArray = s.split('');
  const singleCharArray = [];
  let maxLength = 0;
  for (let i = 0; i < sArray.length; i++) {
    if (sArray.slice(i + 1).includes(sArray[i])) {
      const currentChar = sArray[i];
      sArray.splice(i, 1);
      sArray.splice(sArray.indexOf(currentChar), 1);
      maxLength += 2;
      i = -1;
    } else {
      singleCharArray.push(sArray.splice(i, 1));
      i = -1;
    }
  }
  if (singleCharArray.length !== 0) { maxLength++ }
  return maxLength;
};
