/**
 Do not return anything, modify nums in-place instead.
 */
function sortColors(nums: number[]): void {
  let p1 = 0;
  let p2 = nums.length - 1;
  let i = 0;
  while (i <= p2) {
    let temp = 0;
    switch (nums[i]) {
      case 0:
        temp = nums[p1];
        nums[p1] = nums[i];
        nums[i] = temp;
        i++;
        p1++;
        break;
      case 1:
        i++;
        break;
      case 2:
        temp = nums[p2];
        nums[p2] = nums[i];
        nums[i] = temp;
        p2--;
        break;
    }
  }
};
