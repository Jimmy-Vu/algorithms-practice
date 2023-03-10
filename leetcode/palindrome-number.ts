function isPalindrome(x: number): boolean {
  const xArray = x.toString().split('');
  let count = 0;
  let reverseCount = xArray.length - 1;
  while (count <= reverseCount) {
    if (xArray[count] !== xArray[reverseCount]) {
      return false;
    }
    count++;
    reverseCount--;
  }
  return true;
};
