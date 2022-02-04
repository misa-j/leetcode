/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    let j = 0;
    let max = -Infinity;
    let current = 1;
    
    for(let i = 0; i < nums.length; i++) {
        if(nums[i] === 0) {
            max = Math.max(max, 0);
            while(j < i - 1) {
                current /= nums[j++];
                max = Math.max(max, current);
            }
            current = 1;
            j = i + 1;
        } else {
            current *= nums[i];
            max = Math.max(max, current);
        }
    }

    while(j < nums.length - 1) {
        current /= nums[j++];
        max = Math.max(max, current);
    }
    
    return max;
};