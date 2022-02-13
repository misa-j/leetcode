/**
 * @param {number[][]} matrix
 * @return {number}
 */
var countSquares = function(matrix) {
    let res = 0;
    
    for(let i = 0; i < matrix[0].length; i++) {
        if(matrix[0][i] === 1) res++;
    }
    
    for(let i = 1; i < matrix.length; i++) {
        if(matrix[i][0] === 1) res++;
    }
    
    for(let i = 1; i < matrix.length; i++) {
        for(let j = 1; j < matrix[0].length; j++) {
            if(matrix[i][j] === 0) continue;
            matrix[i][j] = Math.min(matrix[i - 1][j], matrix[i][j - 1], matrix[i - 1][j - 1]) + 1;
            res += matrix[i][j];
        }
    }
    
    return res;
};