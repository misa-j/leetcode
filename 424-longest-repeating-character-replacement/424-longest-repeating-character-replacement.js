/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function(s, k) {
    let res = 0;
    const map = new Array(26);
    for(let i = 0; i < 26; i++) map[i] = [];
    
    let prev = 0;
    for(let i = 0; i < s.length - 1; i++) {
        if(s[i] !== s[i + 1]) {
            const index = s[i].charCodeAt() - 65;
            map[index].push(prev);
            prev = i + 1;
        }
    }
    const index = s[s.length - 1].charCodeAt() - 65;
    map[index].push(prev);
    
    function maxLen(list, char) {
        let res = 0;
        for(let j = 0; j < list.length; j++) {
            let sum = 0;
            let n = k;
            for(let i = list[j]; i < s.length; i++) {
                if(s[i] !== char) n--;
                if(n < 0) break;
                sum++;
            }
            if(n > 0) sum += n;
            res = Math.max(res, sum);
        }
        
        return Math.min(res, s.length);
    }
    
    for(let i = 0; i < 26; i++) {
        if(map[i].length) res = Math.max(res, maxLen(map[i], s[map[i][0]]));
    }
    
    return res;
};