/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} newColor
 * @return {number[][]}
 */
var floodFill = function(image, sr, sc, newColor) {
    
    if(image[sr][sc] === newColor) return image;
    
    const [rowLen, colLen] = [image.length, image[0].length];
    const stack = [[sr, sc]];
    const oldColor = image[sr][sc];
    
    while(stack.length) {
        const [x, y] = stack.pop();
        image[x][y] = newColor;
        
        
        if(x !== 0 && image[x - 1][y] === oldColor) {
            stack.push([x - 1, y]);
            image[x - 1][y] = newColor;
        } 
        if(x !== rowLen - 1 && image[x + 1][y] === oldColor) {
            stack.push([x + 1, y]);
            image[x + 1][y] = newColor;
        }
        if(y !== 0 && image[x][y - 1] === oldColor) {
            stack.push([x, y - 1]);
            image[x][y - 1] = newColor;
        }
        if(y !== colLen - 1 && image[x][y + 1] === oldColor) {
            stack.push([x, y + 1]);
            image[x][y + 1] = newColor;
        }
    }
    
    return image;
};