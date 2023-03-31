function insert(intervals: number[][], newInterval: number[]): number[][] {
  const result: number[][] = [];
  // loop through the intervals array
  for (let i = 0; i < intervals.length; i++) {
    // check if newInterval comes BEFORE the current array element
    if (newInterval[1] < intervals[i][0]) {
      result.push(newInterval);
      result.push(...intervals.slice(i));
      return result;
    }
    // check if newInterval comes AFTER the current array element
    else if (newInterval[0] > intervals[i][1]) {
      result.push(intervals[i]);
    }
    // reassign newInterval with a new interval that encompasses the overlapping intervals
    else {
      newInterval = [Math.min(newInterval[0], intervals[i][0]), Math.max(newInterval[1], intervals[i][1])];
    }
  }
  result.push(newInterval);
  return result;
};
