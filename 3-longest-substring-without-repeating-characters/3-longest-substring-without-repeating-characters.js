/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    
    if(!s.length) return 0;
    
    const map = new Map();
    let p = 0;
    let len = 0;
    
    for(let i = 0; i < s.length; i++) {
        if(p <= map.get(s[i])) p = map.get(s[i]) + 1;
        map.set(s[i], i);
        len = Math.max(i - p, len);
    }
    
    return len + 1;
};