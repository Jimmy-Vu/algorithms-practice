/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  const tempArray = [];
  for (let i = 0; i < nums.length; i++) {
    if (tempArray.includes(nums[i])) { return true; }
    else { tempArray.push(nums[i]); }
  }
  return false;
};
