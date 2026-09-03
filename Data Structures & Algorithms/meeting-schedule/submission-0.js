/**
 * Definition of Interval:
 * class Interval {
 *   constructor(start, end) {
 *     this.start = start;
 *     this.end = end;
 *   }
 * }
 */

class Solution {
    /**
     * @param {Interval[]} intervals
     * @returns {boolean}
     */
    canAttendMeetings(intervals) {
        let arr = intervals.sort((a, b) => a.start - b.start);
        for (let i = 1; i < arr.length; i++) {
            if (arr[i].start < arr[i - 1].end) {
                return false;
            }
        }
        return true;
    }
}
