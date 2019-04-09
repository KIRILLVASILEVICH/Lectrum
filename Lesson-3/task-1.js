function f(num) {
    if (typeof num === 'number') {
        return (Math.pow(num, 3));
    } else {
        throw Error("Error: parameter type is not a Number");
    }
}
console.log(f(2, "a"));

// непонятно это поведение, почему второй аргумент не выдает ошибку?

