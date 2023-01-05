function climbStairs(n: number): number {
  // return the numbers with the distinct ways already being equal to n
  if (n === 1 || n === 2 || n === 3) {
    return n;
  }

  // the pattern is # of ways for n is equal to ((# of ways for n - 1) + (# of ways for n - 2))
  // use 4 as the starting number since we know that 4 - 1 & 4 - 2 would be 3 and 2, respectively
  // 3 and 2 # of ways would be themselves
  let startingNum = 4;
  let pointer1 = 2;
  let pointer2 = 3;

  // shift pointer1 by setting it to pointer2 and assigning pointer2 to the value of itself plus the original value of pointer2
  while (startingNum < n) {
    const temp = pointer1;
    pointer1 = pointer2;
    pointer2 = pointer2 + temp;
    startingNum++;
  }

  return pointer1 + pointer2;
};
