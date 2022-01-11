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
 * @param {Node} quadTree1
 * @param {Node} quadTree2
 * @return {Node}
 */
var intersect = function(quadTree1, quadTree2) {
    function height(node) {
        if(node.isLeaf) return 1;
        return Math.max(height(node.topLeft), height(node.topRight), height(node.bottomLeft), height(node.bottomRight)) + 1;
    }
    
    let h = Math.max(height(quadTree1), height(quadTree2)) - 1;
    h = (h || 1);
    
    const matrix = new Array(2**h).fill(false);
    for(let i = 0; i < matrix.length; i++) matrix[i] = new Array(2**h);

    function traverse(node, x, y, len) {
        if(node.isLeaf) {
            for(let i = x; i < x + len; i++) {
                for(let j = y; j < y + len; j++) {
                    matrix[i][j] = (matrix[i][j] || node.val);
                }
            }
            return;
        }
        const n = len / 2;
        traverse(node.topLeft, x, y, n);
        traverse(node.topRight, x, y + n, n);
        traverse(node.bottomLeft, x + n, y, n);
        traverse(node.bottomRight, x + n, y + n, n);
    }
    
    traverse(quadTree1, 0, 0, matrix.length);
    traverse(quadTree2, 0, 0, matrix.length);

    function check(x, y, len) {
        const val = matrix[x][y];
        for(let i = x; i < x + len; i++) {
            for(let j = y; j < y + len; j++) {
                if(val !== matrix[i][j]) return false;
            }
        }
        return true;
    }
    
    function makeTree(x, y, len) {
        if(check(x, y, len)) return new Node(matrix[x][y], true);
        const node = new Node(false, false);
        
        const n = len / 2;
        node.topLeft = makeTree(x, y, n);
        node.topRight = makeTree(x, y + n, n);
        node.bottomLeft = makeTree(x + n, y, n);
        node.bottomRight = makeTree(x + n, y + n, n);
        
        return node;
    }
    
    return makeTree(0, 0, matrix.length);
};















