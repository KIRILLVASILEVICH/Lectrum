function isEven(x) {
    if (typeof x !== 'number') {
        throw Error("Error: parameter type is not a Number");
    } else if (x % 2 === 0) {
        return true;
    } else {
        return false;
    }
}

console.log(isEven("6"));