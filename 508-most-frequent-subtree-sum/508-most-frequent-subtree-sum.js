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
            if(!map.get(node.val)) map.set(node.val, [1]);
            else map.get(node.val)[0]++;
            
            max = Math.max(max, map.get(node.val)[0]);
            
            return node.val;
        }
        
        const l = traverse(node.left);
        const r = traverse(node.right);
        
        const n = l + r + node.val;
        
        if(!map.get(n)) map.set(n, [1]);
        else map.get(n)[0]++;
        
        max = Math.max(max, map.get(n)[0]);
        
        return n;
    }
    
    traverse(root);
    let res = [];
    
    for (const [key, value] of map) {
        if(value[0] === max) res.push(key);
    }
    
    return res;
};