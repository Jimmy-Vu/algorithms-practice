/**
 Do not return anything, modify nums in-place instead.
 */
function moveZeroes(nums: number[]): void {
  let zeroes = 0;
  let count = 0;
  while (count < nums.length - zeroes) {
    if (nums[count] === 0) {
      nums.splice(count, 1);
      nums.push(0);
      count = 0;
      zeroes++;
    } else {
      count++;
    }
  }
};
