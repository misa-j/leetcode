/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function(s) {
    let res = 0;
    
    function length(i, j) {
        let res = 0;
        
        while(i >= 0 && j < s.length && s[i] === s[j]) {
            i--;
            j++;
            res++;
        }
        
        return res;
    }
    
    for(let i = 0; i < s.length; i++) {
        res += length(i, i);
        if(i > 0) res += length(i - 1, i);
    }
    
    return res;
};