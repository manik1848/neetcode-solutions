class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        let str1= s.split('').sort().join('');
        let str2= t.split('').sort().join('');
        if(str1.length!=str2.length){
            return false
        }
        for(let i=0; i< str1.length; i++){
            if(str1[i]!==str2[i]){
                return false;
            }
        }
        return true;
    }
}
