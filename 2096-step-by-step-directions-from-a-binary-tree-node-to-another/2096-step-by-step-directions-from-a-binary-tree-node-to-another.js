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
 * @param {number} startValue
 * @param {number} destValue
 * @return {string}
 */
var getDirections = function(root, startValue, destValue) {
    
    function traverse(node) {
        if(!node) return null;
        if(node.val === startValue || node.val === destValue) return node;
        const l = traverse(node.left);
        const r = traverse(node.right);
        
        if(l && r) return node;
        
        return l || r;
    }
    
    const root1 = traverse(root);
    let res = [];
    
    function findPath(node, current) {
        if(!node) return;
        if(node.val === startValue) res.unshift("U".repeat(current.length));
        else if(node.val === destValue) res.push(...current);
        if(node.left) {
            current.push("L");
            findPath(node.left, current);
            current.pop();
        }
        if(node.right) {
            current.push("R");
            findPath(node.right, current);
            current.pop();
        }
    }
    
    findPath(root1, []);
    
    return res.join("");
};


















