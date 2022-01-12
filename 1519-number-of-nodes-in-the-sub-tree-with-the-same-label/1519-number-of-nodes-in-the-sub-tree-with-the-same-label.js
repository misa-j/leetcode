/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {string} labels
 * @return {number[]}
 */
var countSubTrees = function(n, edges, labels) {
    let graph = new Array(n).fill([]);
    let seen = new Array(n).fill(false);
    let res = new Array(n).fill(1);
    
    for(let i = 0; i < edges.length; i++) {
        const [x, y] = edges[i];
        if(graph[x].length === 0) graph[x] = [];
        if(graph[y].length === 0) graph[y] = [];
        graph[x].push(y);
        graph[y].push(x);
    }
    
    function traverse(node) {
        if(seen[node]) return null;
        seen[node] = true;
        const nodes = graph[node];
        let count = new Array(26).fill(0);
        const char = labels[node].charCodeAt() - 97;
        count[char]++;
        
        for(let i = 0; i < nodes.length; i++) {
            const current = traverse(nodes[i]);
            if(current) {
                for(let i = 0; i < 26; i++) count[i] += current[i];
            }
        }
        
        res[node] = count[char] || 1;
        return count;
    }
    traverse(0);
    
    return res;
};