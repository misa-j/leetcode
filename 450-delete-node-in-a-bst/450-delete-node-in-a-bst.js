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
 * @param {number} key
 * @return {TreeNode}
 */
var deleteNode = function(root, key) {
    
    function find(node) {
        while(node.left != null){
            node = node.left;
        }
        return node;
    }
    
    function traverse(node) {
        if(!node) return null;
        if(node.val === key) {
            
            if(!node.left || !node.right) return node.left || node.right;
            const curr = find(node.right);
            
            curr.left = node.left;
            return node.right;
        }
        
        if(key < node.val) node.left = traverse(node.left);
        else node.right = traverse(node.right);
        
        return node;
    }
    
    
    
    return traverse(root);
};