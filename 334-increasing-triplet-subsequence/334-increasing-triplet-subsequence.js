/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function(nums) {
    if(nums.length < 3) return false;
    
    const map = new Array(nums.length);
    map[map.length - 1] = nums[nums.length - 1];
    
    for(let i = nums.length - 2; i >= 0; i--) {
        map[i] = Math.max(map[i + 1], nums[i]);
    }
    
    let min = nums[0];
    
    for(let i = 1; i < nums.length - 1; i++) {
        if(min < nums[i] && nums[i] < map[i + 1]) return true;
        min = Math.min(min, nums[i]);
    }
    
    return false;
};