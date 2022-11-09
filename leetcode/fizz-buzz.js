/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function (n) {
  const returnArray = [];
  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0) {
      (i % 5 === 0)
        ? returnArray.push('FizzBuzz')
        : returnArray.push('Fizz');
    } else if (i % 5 === 0) {
      returnArray.push('Buzz');
    } else {
      returnArray.push(`${i}`)
    }
  }
  return returnArray;
};
