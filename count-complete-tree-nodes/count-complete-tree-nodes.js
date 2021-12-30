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
var countNodes = function(root) {
    let res = 0;
    
    function leftLen(node) {
        let res = 0;
        while(node) {
            node = node.left;
            res++;
        }
        return res;
    }
    
    function rightLen(node) {
        let res = 0;
        while(node) {
            node = node.right;
            res++;
        }
        return res;
    }
    
    function traverse(node) {
        if(!node) return;
        if(node.left === node.right) {
            res++;
            return;
        }
        const l = leftLen(node);
        const r = rightLen(node);
        //console.log(l ,r)
        if(l === r) {
            res += (1 << l) - 1; // 2**l - 1
            return;
        }
        res++;
        traverse(node.left);
        traverse(node.right);
        
    }
    
    traverse(root);
    
    return res;
};












