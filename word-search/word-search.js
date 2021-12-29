/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
    const row = board.length - 1, col = board[0].length - 1;
    
    function traverse(x, y, index) {
        if(index === word.length) return true;
        const char = board[x][y];
        board[x][y] = "#";
        
        if(x !== 0 && board[x - 1][y] === word[index]) {
            if(traverse(x - 1, y, index + 1)) return true;
        }
        
        if(x !== row && board[x + 1][y] === word[index]) {
            if(traverse(x + 1, y, index + 1)) return true;
        }
        
        if(y !== 0 && board[x][y - 1] === word[index]) {
            if(traverse(x, y - 1, index + 1)) return true;
        }
        
        if(y !== col && board[x][y + 1] === word[index]) {
            if(traverse(x, y + 1, index + 1)) return true;
        }
        
        board[x][y] = char;
        return false;
    }
    
    for(let i = 0; i <= row; i++) {
        for(let j = 0; j <= col; j++) {
            if(board[i][j] === word[0]) {
                if(traverse(i, j, 1)) return true;
            }
        }
    }
    
    return false;
};






















