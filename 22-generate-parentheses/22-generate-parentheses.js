/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    
    const res = [];
    
    function generate(open, closed, current) {
        if(closed > open) return;
        if(current.length === n * 2) res.push(current.join(""));
        
        if(open !== n) {
            current.push("(");
            generate(open + 1, closed, current);
            current.pop();
        }
        
        if(closed !== n) {
            current.push(")");
            generate(open, closed + 1, current);
            current.pop();
        }
        
    }
    
    generate(0, 0, []);
  
    return res;
};