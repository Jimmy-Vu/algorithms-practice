/**
 * The knows API is defined in the parent class Relation.
 * isBadVersion(version: number): boolean {
 *     ...
 * };
 */

var solution = function (isBadVersion: any) {

  return function (n: number): number {
    let lo = 1;
    let hi = n;
    let pivot: number;

    while (lo <= hi) {
      pivot = lo + Math.floor((hi - lo) / 2);
      const pivotIsBad = isBadVersion(pivot);
      if (pivotIsBad) {
        // if pivot is bad but not the version before it
        if (!isBadVersion(pivot - 1)) {
          return pivot;
        }
        // if both are bad, set hi to pivot - 1
        else {
          hi = pivot - 1;
        }
      } else {
        // set lo to pivot + 1
        lo = pivot + 1;
      }
    }
    return -1;
  }
};
