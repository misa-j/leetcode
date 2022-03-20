/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {string[][]}
 */
var findLadders = function(beginWord, endWord, wordList) {
    const map = new Map();
    const seen = new Array(wordList.length).fill(false);
    let res = [];
    let q = [beginWord];
    
    map.set(beginWord, []);
    for(let i = 0; i < wordList.length; i++) {
        if(wordList[i] === beginWord) seen[i] = true;
        map.set(wordList[i], []);
    }
    
    function check(s1, s2) {
        let c = 0;
        for(let i = 0; i < s1.length; i++) {
            if(s1[i] !== s2[i]) c++;
            if(c > 1) return false;
        }
        return true;
    }
    
    while(q.length) {
        const len = q.length;
        let idx = new Set();
        
        for(let i = 0; i < len; i++) {
            const word = q.shift();
            for(let j = 0; j < wordList.length; j++) {
                if(seen[j]) continue;
                if(check(word, wordList[j])) {
                    map.get(wordList[j]).push(word);
                    idx.add(j);
                }
            }
        }
        
        for(const index of idx) {
            seen[index] = true;
            q.push(wordList[index]);
        }
        
    }
    
    function traverse(word, current) {
        if(word === beginWord) {
            res.push([...current].reverse());
            return;
        }
        
        const nodes = map.get(word);
        if(!nodes) return;
        
        for(let i = 0; i < nodes.length; i++) {
            current.push(nodes[i]);
            traverse(nodes[i], current);
            current.pop();
        }
        
    }
    
    traverse(endWord, [endWord]);
    
    return res;
};
















