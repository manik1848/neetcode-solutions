class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isAlphaNumeric(c) {
        return (c >= "A" && c <= "Z" || c >= "a" && c <= "z" || c >= "0" && c <= "9")
    }
    isPalindrome(s) {
        let i = 0;
        let j = s.length - 1;
        while (i < j) {
            if(!this.isAlphaNumeric(s[i])){
                i++;
            }
            if(!this.isAlphaNumeric(s[j])){
                j--;
            }
            if (this.isAlphaNumeric(s[i]) && this.isAlphaNumeric(s[j])) {
                if (s[i].toLowerCase() !== s[j].toLowerCase()) {
                    return false;
                }
                i++;
                j--
            }
           
        }
        return true;
    }
}
