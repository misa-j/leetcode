/**
 * @param {number[]} rowSum
 * @param {number[]} colSum
 * @return {number[][]}
 */
var restoreMatrix = function(rowSum, colSum) {
    let matrix = new Array(rowSum.length);
    let row = 0, col = 0;
    
    for(let i = 0; i < matrix.length; i++) {
        const current = new Array(colSum.length).fill(0);
        let n = rowSum[row++];
        
        for(let j = col; j < current.length; j++) {
            current[j] = n;
            if(colSum[j] <= n) {
                current[j] = colSum[j];
                n -= colSum[j];
                colSum[j] = 0;
                col++;
            } else {
                current[j] = n;
                colSum[j] -= n;
                n = 0;
                break;
            }
        }
        
        matrix[i] = current;
    }

    return matrix;
};