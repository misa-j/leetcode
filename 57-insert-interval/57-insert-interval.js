/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function(intervals, newInterval) {
    if(!intervals.length) return [newInterval];
    
    const [start, end] = newInterval;
    let res = [];
    let flag = true;
    
    for(let i = 0; i < intervals.length; i++){
        if(flag && start <= intervals[i][0]) {
            flag = false;
            const current = [start, end];
            
            //if(i < intervals.length - 1 && end  intervals[i + 1][0])
            
            while(i <= intervals.length - 1 && intervals[i][0] <= end) {
                current[1] = Math.max(end, intervals[i][1]);
                i++;
            }
            
            if(res.length && res[res.length - 1][1] >= current[0]) {
                current[0] = res[res.length - 1][0];
                current[1] = Math.max(res[res.length - 1][1], current[1]);
                res.pop();
            }
            
            res.push(current);
            if(i <= intervals.length - 1 && intervals[i][0] >= current[1]) res.push(intervals[i]);
        } else res.push(intervals[i]);
    }
    
    if(flag) {
        if(res[res.length - 1][1] < newInterval[0]) res.push(newInterval);
        else {
            res[res.length - 1][1] = Math.max(newInterval[1], res[res.length - 1][1]);
        }
    }
    
    return res;
};