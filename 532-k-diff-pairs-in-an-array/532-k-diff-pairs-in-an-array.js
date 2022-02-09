/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findPairs = function(nums, k) {
    let count = new Map();
    let res = 0;
    
    for(let i = 0; i < nums.length; i++) {
        count.set(nums[i], (count.get(nums[i]) || 0) + 1);
    }
    
    for(let i = 0; i < nums.length; i++) {
        if(k === 0) {
            if(count.get(nums[i]) >= 2) {
                count.set(nums[i], 0);
                res++;
            }
        } else {
            const n = nums[i] - k;
            if(count.get(n)) {
                count.set(n, 0);
                res++;
            }
        }
    }
    
    return res;
};