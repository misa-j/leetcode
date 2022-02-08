/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let i = 0, j = 0;
    let n = nums.length;
    
    while(i < n) {
        nums[j] = nums[i++];
        j++;
        if(nums[i - 1] === nums[i]) {
            nums[j] = nums[i++];
            j++;
        }
        while(i < n && nums[i - 1] === nums[i]) i++;
    }
    
    return j;
};