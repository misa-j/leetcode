/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number} n
 * @return {TreeNode[]}
 */
var generateTrees = function(n) {
    
    function generate(s, e) {
        let res = [null];
        
        if(s > e) return res;
        res.pop();
        
        for(let i = s; i <= e; i++) {
            const l = generate(s, i - 1);
            const r = generate(i + 1, e);
            
            for(let j = 0; j < l.length; j++) {
                for(let k = 0; k < r.length; k++) {
                    const node = new TreeNode(i);
                    node.left = l[j];
                    node.right = r[k];
                    res.push(node)
                }
            }
            
        }
        
        return res;
    }
    
    
    
    return generate(1, n);
};