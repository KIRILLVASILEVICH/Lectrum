function f(num) {
    var arr = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
    if (typeof num !== 'number') {
        throw Error("Error: parameter type is not a Number");
    } else if (num > 7 || num < 1) {
        throw Error("Error: parameter should be in the range of 1 to 7");
    } else {
        return arr[num - 1];
    }
}

console.log(f(8));