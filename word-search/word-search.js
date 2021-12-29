/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
    let char;
    
    for(let i = 0; i < board.length; i++) {
        for(let j = 0; j < board[0].length; j++) {
            if(board[i][j] === word[0]) {
                char = board[i][j];
                board[i][j] = "";
                if(traverse(board, word, 0, i, j)) return true;
                board[i][j] = char;
            }
        }
    }
    
    return false;
};

function traverse(board, word, idx, x, y) {
    let r = board.length - 1, c = board[0].length - 1, char;
    if(idx === word.length - 1) return true;
    
    if(x !== 0 && board[x - 1][y] === word[idx + 1]) {
        char = board[x - 1][y];
        board[x - 1][y] = "";
        if(traverse(board, word, idx + 1, x - 1, y)) return true;
        board[x - 1][y] = char;
    }
    
    if(x !== r && board[x + 1][y] === word[idx + 1]) {
        char = board[x + 1][y];
        board[x + 1][y] = "";
        if(traverse(board, word, idx + 1, x + 1, y)) return true;
        board[x + 1][y] = char;
    }
    
    if(y !== 0 && board[x][y - 1] === word[idx + 1]) {
        char = board[x][y - 1];
        board[x][y - 1] = "";
        if(traverse(board, word, idx + 1, x, y - 1)) return true;
        board[x][y - 1] = char;
    }
    
    if(y !== c && board[x][y + 1] === word[idx + 1]) {
        char = board[x][y + 1];
        board[x][y + 1] = "";
        if(traverse(board, word, idx + 1, x, y + 1)) return true;
        board[x][y + 1] = char;
    }
}