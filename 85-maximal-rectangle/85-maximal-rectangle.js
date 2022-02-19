/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalRectangle = function(matrix) {
    const r = matrix.length, c = matrix[0].length;
    let count = new Array(r);
    
    count[0] = new Array(c);
    for(let i = 0; i < c; i++) {
        if(matrix[0][i] === "1") count[0][i] = 1;
        else count[0][i] = 0;
    }
    
    for(let i = 1; i < r; i++) {
        count[i] = new Array(c).fill(0);
        for(let j = 0; j < c; j++) {
            if(matrix[i][j] === "1") count[i][j] += count[i - 1][j] + 1;
        }
    }
    
    let res = 0;

    function area(x, y){
        let len = 0;
        let side = count[x][y];
        let ar = 0;
        for(let i = y; i < c; i++) {
            if(count[x][i] === 0) break;
            len++;
            side = Math.min(side, count[x][i]);
            ar = Math.max(ar, side * len);
        }
        
        return ar;
    }
    
    for(let i = 0; i < r; i++) {
        for(let j = 0; j < c; j++) {
            if(count[i][j]) {
                if(j !== 0 && count[i][j] === count[i][j - 1]) continue;
                res = Math.max(res, area(i, j));
            }
        }
    }
    
    return res;
};