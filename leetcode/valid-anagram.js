/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  if (s.length !== t.length) { return false; }
  const tArray = t.split('');
  for (let i = 0; i < s.length; i++) {
    if (tArray.includes(s[i])) {
      tArray.splice(tArray.indexOf(s[i]), 1);
    }
  }
  if (tArray.length === 0) {
    return true;
  } else {
    return false;
  }
};
