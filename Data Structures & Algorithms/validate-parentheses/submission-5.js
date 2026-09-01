class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        if (s.length === 1) {
            return false;
        }
        let stk = [];
        let obj = {
            ")": "(",
            "}": "{",
            "]": "["
        }
        for (let i = 0; i < s.length; i++) {
            if (stk.length > 0 && obj[s[i]] == stk[stk.length - 1]) {
                stk.pop();
            }
            else{
                stk.push(s[i])
            }

        }

        return stk.length === 0;


    }
}
