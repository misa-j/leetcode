/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    
    let res;
    
    function traverse(node) {
        if(!node || res) return false;
        
        const l = traverse(node.left);
        const r = traverse(node.right);
        const t = node === q || node === p;

        if(l && r) {
            if(!res) res = node;
        }
        
        if(t && (l || r)) {
            if(!res) res = node;
        }
        
        return t || l || r;
    }
    
    traverse(root);
    
    return res;
};