/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function(heights) {
    let res = heights[0];
    let stack = [[heights[0], 1]];
    
    for(let i = 1; i < heights.length; i++) {
        const current = heights[i];
        if(stack.length === 0 || stack[stack.length - 1][0] < current) stack.push([current, 1]);
        else {
            let len = 0;
            while(stack.length && stack[stack.length - 1][0] >= current) {
                const h = stack[stack.length - 1][0];
                len += stack[stack.length - 1][1];
                res = Math.max(res, len * h);
                stack.pop();
            }
            
            if(stack.length && stack[stack.length - 1][0] >= current) {
                const h = stack[stack.length - 1][0];
                len += stack[stack.length - 1][1];
                res = Math.max(res, len * h);
                stack.pop();
            }
            stack.push([current, len + 1]);
        }
    }
    
    let len = 0;
    while(stack.length) {
        const h = stack[stack.length - 1][0];
        len += stack[stack.length - 1][1];
        res = Math.max(res, len * h);
        stack.pop();
    }
    
    return res;
};