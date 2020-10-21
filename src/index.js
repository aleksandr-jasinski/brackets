module.exports = function check(str, bracketsConfig) {
let isCorrect;
    if (str.length % 2 === 1) {
        isCorrect = false;
    } else {
        const stack = [];
        const openingBrackets = [];
        const closingBrackets = [];
        for (let i = 0; i < bracketsConfig.length; i++) {
            openingBrackets.push(bracketsConfig[i][0]);
            closingBrackets.push(bracketsConfig[i][1]);
        }
        for (let char of str) {
            if (openingBrackets.includes(char)) {
                stack.push(char);
            } else if (closingBrackets.includes(char)) {
                if (stack.length === 0) {
                    return false;
                } else if (stack[stack.length - 1] === openingBrackets[closingBrackets.indexOf(char)]) {
                    stack.pop();
                } else {
                    return false;
                }
            }
        }

        if (stack.length === 0) {
        isCorrect = true;
        } else {
        console.log(stack.length);
        console.log(stack);
        isCorrect = false;
        }

    }
return isCorrect;
}
