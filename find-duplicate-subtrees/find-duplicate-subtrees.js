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
 * @return {TreeNode[]}
 */
var findDuplicateSubtrees = function(root) {
    let map = new Map();
    let seen = new Set();
    let res = [];
    
    function traverse(node) {
        if(!node) return 0;
        let n = traverse(node.left);
        n += traverse(node.right);
        
        if(!map.get(n + 1)) map.set(n + 1, []);
        map.get(n + 1).push(node);
        
        return n + 1;
    }
    
    const n = traverse(root);
    
    function check(node1, node2) {
        if(!node1 && !node2) return true;
        if(!node1 || !node2) return false;
        if(node1.val !== node2.val) return false;
        
        return check(node1.left, node2.left) && check(node1.right, node2.right);
    }
    
    for(let k = 1; k < n; k++) {
        const list = map.get(k) || [];

        for(let i = 0; i < list.length; i++) {
            const node = list[i];
            if(seen.has(node)) continue;

            for(let j = i + 1; j < list.length; j++) {
                if(check(node, list[j])) {
                    if(!seen.has(node)) res.push(node);
                    seen.add(node);
                    seen.add(list[j]);
                }    
            }
        }
    }
    
    return res;
};





