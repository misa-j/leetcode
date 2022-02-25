/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    let stack = [];
    let res = 0;
    
    for(let i = 0; i < height.length; i++) {
        if(!stack.length || stack[stack.length - 1][0] > height[i]) stack.push([height[i], 1]);
        else {
            const current = height[i];
            let len = 0;
            let h = 0;
            let n = 0;
            while(stack.length && stack[stack.length - 1][0] <= current) {
                const [he, le] = stack.pop();
                len += le;
                h = he;
                n += he * le;
            }
            
            let area = 0;
            
            if(stack.length) {
                h = current;
                stack.push([current, len + 1]);
            } else stack.push([current, 1]);
            
            area = len * h - n;
            res += area;
        }
    }
    
    return res;
};