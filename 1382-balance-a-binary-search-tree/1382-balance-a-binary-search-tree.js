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
 * @return {TreeNode}
 */
var balanceBST = function(root) {
    const vals = [];
    
    function traverse(node) {
        if(node.left) traverse(node.left);
        vals.push(node.val);
        if(node.right) traverse(node.right);
    }
    
    traverse(root);
    
    function makeTree(from, to) {
        if (from > to) return null;
        
        const middle = Math.floor((from + to) / 2);
        const node = new TreeNode(vals[middle]);
        
        node.left = makeTree(from, middle - 1);
        node.right = makeTree(middle + 1, to);
        
        return node;
    }
    
    return makeTree(0, vals.length - 1);
};