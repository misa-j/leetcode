/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function(s, k) {
    const map = new Array(26).fill(0);
    let left = 0;
    let res = 0;
    let freq = 0;
    for(let i = 0; i < s.length; i++) {
        map[s[i].charCodeAt() - 65]++;
        freq = Math.max(freq, map[s[i].charCodeAt() - 65]);
        const length = (i - left) + 1;
        //const max = Math.max(...map);
        if(length - freq <= k) res = Math.max(res, length);
        else {
            while(left <= i) {
                map[s[left++].charCodeAt() - 65]--;
                const length = (i - left) + 1;
                const max = Math.max(...map);
                if(length - max <= k) break;
            }
        }
    }
    
    return res;
};