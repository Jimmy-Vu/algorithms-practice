function backspaceCompare(s: string, t: string): boolean {
  const stack1: string[] = [];
  const stack2: string [] = [];

  let sCount = 0;
  while (sCount < s.length) {
    if (s[sCount] === '#') {
      stack1.pop();
      sCount++;
    } else {
      stack1.push(s[sCount]);
      sCount++;
    }
  }

  let tCount = 0;
  while (tCount < t.length) {
    if (t[tCount] === '#') {
      stack2.pop();
      tCount++;
    } else {
      stack2.push(t[tCount]);
      tCount++;
    }
  }
  return (stack1.toString() === stack2.toString());
};
