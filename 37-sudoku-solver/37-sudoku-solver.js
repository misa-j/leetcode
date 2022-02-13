/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solveSudoku = function(board) {
    let r = 0, c = 0;

    let row = new Array(9), col = new Array(9);
    let box = new Array(9);

    function fillBox(x, y) {
        const arr = new Array(10).fill(false);
        for (let i = x; i < x + 3; i++) {
            for (let j = y; j < y + 3; j++) {
                box[i][j] = arr;
                const current = board[i][j];
                if (current === ".") continue;
                arr[board[i][j]] = true;
            }
        }
    }

    for (let i = 0; i < 9; i++) {
        row[i] = new Array(10).fill(false);
        box[i] = new Array(9);
        for (let j = 0; j < 9; j++) {
            const current = board[i][j];
            if (current === ".") {
                r = i;
                c = j;
                continue;
            }
            if (!col[j]) col[j] = new Array(10).fill(false);

            row[i][current] = true;
            col[j][current] = true;
        }
    }

    for (let i = 0; i < 9; i += 3) {
        for (let j = 0; j < 9; j += 3) {
            fillBox(i, j);
        }
    }

    function fill(x, y) {
        if (x === r && y === c) return true;

        for (let i = 0; i < 9; i++) {
            let flag = false;
            for (let j = 0; j < 9; j++) {
                if (board[i][j] !== ".") continue;
                flag = true;
                for (let n = 1; n < 10; n++) {
                    if (row[i][n] || col[j][n] || box[i][j][n]) continue;
                    board[i][j] = n.toString();
                    row[i][n] = true;
                    col[j][n] = true;
                    box[i][j][n] = true;
            
                    if (fill(i, j)) return true;
            
                    board[i][j] = ".";
                    row[i][n] = false;
                    col[j][n] = false;
                    box[i][j][n] = false;
                }
                break;
            }
            if (flag) break;
        }
        return false;
    }

    fill(0, 0);
};
















