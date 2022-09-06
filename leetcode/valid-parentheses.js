/**
 * Runtime: 111 ms, faster than 28.80% of JavaScript online submissions for Valid Parentheses.
 * Memory Usage: 42.2 MB, less than 83.20% of JavaScript online submissions for Valid Parentheses.
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  if (s.length % 2 !== 0) {
    return false;
  }

  const brackets = {
    '(': ')',
    '{': '}',
    '[': ']'
  };

  const stack = [];
  for (let i = 0; i < s.length; i++) {
    const currentChar = s[i];
    if (brackets[currentChar]) {
      stack.push(brackets[currentChar]);
    } else {
      if (stack.pop() !== currentChar) {
        return false;
      }
    }
  }
  return (stack.length === 0 ? true : false);
};
