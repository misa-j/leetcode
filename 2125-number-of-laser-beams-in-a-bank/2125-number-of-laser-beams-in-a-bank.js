/**
 * @param {string[]} bank
 * @return {number}
 */
var numberOfBeams = function(bank) {
    let res = 0;
    let prev = 0;
    
    for(let i = 0; i < bank.length; i++) {
        let count = 0;
        for(let j = 0; j < bank[0].length; j++) {
            if(bank[i][j] === "1") {
                res += prev;
                count++;
            }
        }
        if(count) prev = count;
    }
    
    return res;
};