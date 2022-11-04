/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  const sArray = s.toLowerCase().split('');
  const filteredSArray = sArray.filter(char => (/([a-z0-9])/).test(char));

  const reversedSArray = [];
  for (let i = filteredSArray.length - 1; i >= 0; i--) {
    reversedSArray.push(filteredSArray[i]);
  }

  for (i = 0; i < filteredSArray.length; i++) {
    if (filteredSArray[i] === reversedSArray[i]) {
      continue;
    } else {
      return false;
    }
  }
  return true;
};
