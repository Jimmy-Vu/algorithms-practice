/**
 * Runtime: 211 ms, faster than 19.75% of JavaScript online submissions for Two Sum.
 * Memory Usage: 42.5 MB, less than 60.94% of JavaScript online submissions for Two Sum.
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (i === j) {
        continue;
      } else if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
};
