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
 * @return {number}
 */
var maxProduct = function(root) {
    const mod = 10**9 + 7;
    
    function sumTree(node) {
        if(!node) return 0;
        return sumTree(node.left) + sumTree(node.right) + node.val;
    }
    
    const sum = sumTree(root);
    let max = 0;
    
    function traverse(node) {
        if(!node) return 0;
        const l = traverse(node.left);
        const r = traverse(node.right);
        
        max = Math.max((sum - l) * l, max);
        max = Math.max((sum - r) * r, max);
        
        return l + r + node.val;
    } 
    
    traverse(root);
    
    return max % mod;
};