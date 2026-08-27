class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let prod = 1;
        let res = [];
        let zero = 0;
        for (let i = 0; i < nums.length; i++) {
            if (nums[i] !== 0)
                prod *= nums[i]
            else
                zero++;
        }
        if(zero>1){
            return new Array(nums.length).fill(0)
        }
        for (let i = 0; i < nums.length; i++) {
            if (zero > 0) {
                res.push(nums[i] === 0 ? prod : 0);
            }
            else {
                res.push(prod / nums[i]);
            }
        }
        return res;

    }
}
