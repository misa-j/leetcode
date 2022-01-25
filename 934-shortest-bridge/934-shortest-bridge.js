/**
 * @param {number[][]} grid
 * @return {number}
 */
var shortestBridge = function(grid) {
    let q = [];
    
    function traverse(x, y) {
        if(x < 0 || y < 0 || x >= grid.length || y >= grid.length) return;
        if(grid[x][y] === 2 || grid[x][y] === 0) return;
        grid[x][y] = 2;
        q.push([x, y]);
        traverse(x - 1, y);
        traverse(x + 1, y);
        traverse(x, y - 1);
        traverse(x, y + 1);
    }
    
    let flag = false;
    for(let i = 0; i < grid.length; i++) {
        for(let j = 0; j < grid[0].length; j++) {
            if(grid[i][j] === 1) {
                traverse(i, j);
                flag = true;
                break;
            }
        }
        if(flag) break;
    }
    
    let res = 0;

    while(q.length) {
        const len = q.length;
        for(let i = 0; i < len; i++) {
            const [x, y] = q.shift();
            grid[x][y] = 2;
            
            if(x !== 0) {
                if(grid[x - 1][y] === 0) {
                    q.push([x - 1, y]);
                    grid[x - 1][y] = 2;
                }
                else if(grid[x - 1][y] === 1) return res;
            }

            if(x !== grid.length - 1) {
                if(grid[x + 1][y] === 0){
                    grid[x + 1][y] = 2;
                    q.push([x + 1, y]);
                }
                else if(grid[x + 1][y] === 1) return res;
            }

            if(y !== 0) {
                if(grid[x][y - 1] === 0) {
                     grid[x][y - 1] = 2;
                    q.push([x, y - 1]);
                }
                else if(grid[x][y - 1] === 1) return res;
            }

            if(y !== grid[0].length - 1) {
                if(grid[x][y + 1] === 0) {
                    q.push([x, y + 1]);
                    grid[x][y + 1] = 2
                }
                else if(grid[x][y + 1] === 1) return res;
            }    
        }
        
        res++;
    }
    
    return res;
};