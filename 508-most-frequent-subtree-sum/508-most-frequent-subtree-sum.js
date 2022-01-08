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
 * @return {number[]}
 */
var findFrequentTreeSum = function(root) {
    const map = new Map();
    let max = 0;
    
    function traverse(node) {
        if(!node) return 0;
        if(node.left === node.right) {
            if(!map.get(node.val)) map.set(node.val, 1);
            else map.set(node.val, map.get(node.val) + 1);
            
            max = Math.max(max, map.get(node.val));
            
            return node.val;
        }
        
        const l = traverse(node.left);
        const r = traverse(node.right);
        
        const n = l + r + node.val;
        
        if(!map.get(n)) map.set(n, 1);
        else map.set(n, map.get(n) + 1);
        
        max = Math.max(max, map.get(n));
        
        return n;
    }
    
    traverse(root);
    let res = [];
    
    for (const [key, value] of map) {
        if(value === max) res.push(key);
    }
    
    return res;
};