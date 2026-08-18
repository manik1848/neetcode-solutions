class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        let str1= s.split('').sort().join('');
        let str2= t.split('').sort().join('');
        let n;
        if(str1.length>str2.length){
            n=str1.length
        }
        else{
            n=str2.length
        }
        for(let i=0; i< n; i++){
            if(str1[i]!==str2[i]){
                return false;
            }
        }
        return true;
    }
}
