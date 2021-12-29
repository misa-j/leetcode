/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    const row = matrix.length;
    const col = matrix[0].length;
    let start = 0, end = (row * col) - 1;
    
    
    while(start <= end) {
        const middle = Math.floor((start + end) / 2);
        const x = Math.floor(middle / col);
        const y = middle % col;
        
        if(matrix[x][y] === target) return true;
        
        if(matrix[x][y] < target) start = middle + 1;
        else end = middle - 1;
        
    }
    
    return false;
};