/**
 * // Definition for a QuadTree node.
 * function Node(val,isLeaf,topLeft,topRight,bottomLeft,bottomRight) {
 *    this.val = val;
 *    this.isLeaf = isLeaf;
 *    this.topLeft = topLeft;
 *    this.topRight = topRight;
 *    this.bottomLeft = bottomLeft;
 *    this.bottomRight = bottomRight;
 * };
 */

/**
 * @param {number[][]} grid
 * @return {Node}
 */
var construct = function(grid) {
    
    function check(x, y, len) {
        if(len === 1) return true;
        
        const n = grid[x][y];

        for(let i = x; i < x + len; i++) {
            for(let j = y; j < y + len; j++) {
                if(grid[i][j] !== n) return false;
            }
        }
        
        return true;
    }
    
    function makeTree(x, y, len) {
        if(check(x, y, len)) return new Node(grid[x][y], true);
        const node = new Node(1, false);
        len /= 2;
        // topLeft x = x, y = y
        // topRight x = x, y = y + len
        // bottomLeft x = x + len, y = y
        // bottomRight x = x + len, y = y + len;
        node.topLeft = makeTree(x, y, len);
        node.topRight = makeTree(x, y + len, len);
        node.bottomLeft = makeTree(x + len, y, len);
        node.bottomRight = makeTree(x + len, y + len, len);
        
        return node;
    }
    
    return makeTree(0, 0, grid.length);
};