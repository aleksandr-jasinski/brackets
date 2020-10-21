module.exports = function check(str, bracketsConfig) {
let isCorrect;
    if (str.length % 2 === 1) {
        isCorrect = false;
    } else {
        const stack = [];
        for (let i = 0; i < bracketsConfig.length; i++) {
            //??? config2 = [['(', ')'], ['[', ']']];
            let opening = bracketsConfig[i][0];
            let closing = bracketsConfig[i][1];
            //TODO | = (|, |)
            //??? '[(])'
            for (let char of str) {
                if (char === opening) {
                    stack.push(char);
                } else if (char === closing) {
                    if (stack.length === 0) {
                        return false;
                    } else if (stack[stack.length - 1] === opening) {
                        stack.pop();
                    } else {
                        return false;
                    }
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
