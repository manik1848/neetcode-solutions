class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        if (nums.length === 0) {
            return 0;
        }
        nums = nums.sort((a, b) => a - b);
        let set = new Set(nums);
        let arr = [...set];
        let temp = 1;
        let res = 1;
        for (let i = 1; i < arr.length; i++) {
            if (arr[i] - arr[i - 1] === 1) {
                temp++;
            }
            else {
                res = Math.max(temp, res);
                temp = 1;
            }
        }
        return Math.max(temp, res);
    }
}
