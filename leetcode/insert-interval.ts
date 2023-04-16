function insert(intervals: number[][], newInterval: number[]): number[][] {
  const newArray: number[][] = [];
  // loop through intervals
  for (let i = 0; i < intervals.length; i++) {
    // check if newInterval goes to the left of the intervals[i]
    if (newInterval[1] < intervals[i][0]) {
      newArray.push(newInterval);
      newArray.push(...intervals.slice(i));
      return newArray;
    }
    // check else if newInterval goes to the right of intervals[i]
    else if (newInterval[0] > intervals[i][1]) {
      newArray.push(intervals[i]);
    }
    // else, newInterval is overlapping with intervals[i]
    // merge the overlapping intervals
    else {
      newInterval = ([Math.min(newInterval[0], intervals[i][0]), Math.max(newInterval[1], intervals[i][1])]);
    }
  }
  newArray.push(newInterval);
  return newArray;
};
