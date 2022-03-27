/**
 * @param {string[]} words
 * @param {number} maxWidth
 * @return {string[]}
 */
var fullJustify = function(words, maxWidth) {
    let res = [];
    let flag = false;
    let len = 0;
    let count = 0;
    let index = 0;
    
    for(let i = 0; i < words.length; i++) {
        if(!flag) {
            len += words[i].length;
            flag = true;
        } else {
            if(len + words[i].length + 1 > maxWidth) {
                const free = maxWidth - (len - count);
                const part = Math.floor(free / (count || 1));
                let left = free % count;
                let str = "";
                
                for(let j = index; j < i; j++) {
                    str += words[j];
                    if(j !== i - 1) str += " ".repeat(part);
                    if(left) {
                        str += " ";
                        left--;
                    }
                }
                
                if(count === 0) str += " ".repeat(part);
                
                res.push(str);
                index = i;
                len = words[i].length;
                count = 0;
            }
            else {
                len += words[i].length + 1;
                count++;
            }
        }
    }
    
    let str = "";
    let free = maxWidth - (len - count);
    
    for(let i = index; i < words.length; i++) {
        str += words[i];
        if(i !== words.length - 1) {
            str += " ";
            free--;
        }
    }
    
    str += " ".repeat(free);
    
    res.push(str);
    
    return res;
};