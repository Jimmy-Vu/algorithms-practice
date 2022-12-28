/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  let lo = 0;
  let hi = nums.length;
  while (lo < hi) {
    let mid = Math.floor(lo + (hi - lo) / 2);
    if (nums[mid] === target) { return mid; }
    else if (nums[mid] < target) {
      lo = mid + 1;
    } else {
      hi = mid;
    }
  }
  return -1;
};
