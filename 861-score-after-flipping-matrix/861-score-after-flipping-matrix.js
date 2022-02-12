/**
 * @param {number[][]} grid
 * @return {number}
 */
var matrixScore = function(grid) {
    let res = 0;
    
    function count(col) {
        let c = 0;
        for(let i = 0; i < grid.length; i++) {
            if(grid[i][col] === 1) c++;
        }
        return c;
    }
    
    for(let i = 0; i < grid.length; i++) {
        if(grid[i][0] === 1) continue;
        for(let j = 0; j < grid[0].length; j++) {
            grid[i][j] = 1 - grid[i][j];
        }
    }
    
    for(let i = 0; i < grid[0].length; i++) {
        const ones = count(i);
        const zeros = grid.length - ones;
        if(zeros > ones) {
            for(let j = 0; j < grid.length; j++) {
                grid[j][i] = 1 - grid[j][i];
            }
        }
    }
    
    const n = grid[0].length;

    for(let i = 0; i < grid.length; i++) {
        for(let j = 0; j < grid[0].length; j++) {
            if(grid[i][j] === 1) {
                res += Math.pow(2, n - (j + 1));
            }
        }
    }
    
    return res;
};