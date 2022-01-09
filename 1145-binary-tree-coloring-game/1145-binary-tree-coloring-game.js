/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} n
 * @param {number} x
 * @return {boolean}
 */
var btreeGameWinningMove = function(root, n, x) {
    let left = 0;
    let right = 0;
    
    function traverse(node) {
        if(!node) return 0;
        const l = traverse(node.left);
        const r = traverse(node.right);
        if(node.val === x) {
            left = l;
            right = r;
        }
        return l + r + 1;
    }
    traverse(root);
    
    return n - left < left || n - right < right || left + right + 1 < n - (left + right + 1);
};