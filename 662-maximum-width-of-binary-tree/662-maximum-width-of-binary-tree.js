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
var widthOfBinaryTree = function(root) {
    let list = [[0, 0]];
    let res = 0;
    let mod = 4294967296; //2**32;
    
    function traverse(node, level, prev) {
        
        if(list.length === level) list.push([prev, -Infinity]);
        else list[level][1] = Math.max(list[level][1], prev);
        
        res = Math.max(res, list[level][1] - list[level][0]);
    
        
        if(node.left) traverse(node.left, level + 1, (prev * 2) % mod);
        if(node.right) traverse(node.right, level + 1, (prev * 2 + 1) % mod);
        
    }
    
    traverse(root, 1, 1);
    
    return res + 1;
};