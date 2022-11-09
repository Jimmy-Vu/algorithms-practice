/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  if (nums.length === 1) { return nums[0] }
  const numbers = {};
  const majority = nums.length / 2;
  for (let i = 0; i <= nums.length - 1; i++) {
    Object.keys(numbers).includes(nums[i].toString())
      ? numbers[nums[i]]++
      : numbers[nums[i]] = 1;
    if (numbers[nums[i]] > majority) { return nums[i] }
  }
};
