/**
 * @param {number} n
 * @return {number}
 */
var countOrders = function(n) {
    if(n === 1) return 1;
    let prev = 6;
    const mod = (10**9+7);
    
    for(let i = 3; i <= n; i++) {
        const a = i * 2 - 1;
        const sum = (1 + a) * (a / 2);
        prev *= sum;
        prev %= mod;
    }

    return prev;
};