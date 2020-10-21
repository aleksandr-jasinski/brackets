module.exports = function check(str, bracketsConfig) {
const stack = [];
    if (str.length % 2 === 1) {
        return false;
    } else {
        let openingBrackets = [];
        let closingBrackets = [];
        for (let i = 0; i < bracketsConfig.length; i++) {
            openingBrackets.push(bracketsConfig[i][0] );
            closingBrackets.push(bracketsConfig[i][1] );
        }
        const arr = str.split('');
        for (let i = 0; i < arr.length; i++) {
            if (openingBrackets.includes(arr[i]) && arr[i] === closingBrackets[openingBrackets.indexOf(arr[i])] ) {
                let j = arr.indexOf(arr[i], i+1);
                arr[j] = 'close' + arr[j];
                arr[i] = 'open' + arr[i];
            }
        }
        for (let i = 0; i < openingBrackets.length; i++) {
            if (openingBrackets[i] === closingBrackets[i]) {
                openingBrackets[i] = 'open' + openingBrackets[i];
                closingBrackets[i] = 'close' + closingBrackets[i];
            }
        }
        for (let char of arr) {
            if (openingBrackets.includes(char)) {
                stack.push(char);
            } else if (closingBrackets.includes(char)) {
                if (stack.length === 0) {
                    return false;
                } else if (stack[stack.length - 1] === openingBrackets[closingBrackets.indexOf(char)]) {
                    stack.pop();
                }
            }
        }
    }
return Boolean(stack.length === 0);
}
