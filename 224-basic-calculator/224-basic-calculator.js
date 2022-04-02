/**
 * @param {string} s
 * @return {number}
 */
var calculate = function(s) {
    let curr = 0;
    let str = "";
    
    for(let i = 0; i < s.length; i++) {
        if(s[i] !== " ") str += s[i];
    }
    
    return term();
    
    function term() {
        
        let left = factor();
    
        while (str[curr] === "+" || str[curr] === "-") {
            let sign = str[curr];
            curr++;
            let right = factor();
            
            if (sign === "+") left += right;
            else left -= right;
        }

        return parseInt(left);
    }

    function factor() {
    
        let left = unary();
    
        while (str[curr] === "*" || str[curr] === "/") {
            let sign = str[curr];
            curr++;
            let right = unary();
            
            if (sign === "*") left *= right;
            else left /= right;
        }

        return parseInt(left);
    }

    function unary() {
    
        if (str[curr] === "-") {
            curr++;
            return -unary();
        } 
        else if(str[curr] === "+") {
            curr++;
            return unary();
        }
        
        return primary();
    }

    function primary() {
    
        if (str[curr] === "(") {
            curr++;
            let val = term();
            curr++;
            return val;
        }

        let num = "";
    
        while (str[curr] >= "0" && str[curr] <= "9") {
            num += str[curr++];
        }

        return parseInt(num);
    }
};