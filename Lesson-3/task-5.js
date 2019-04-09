var arr = [1, 2, -4, 3, -9, -1, 7];
var newArr = [];
function isPositive(x) {
    if (typeof x !== 'number') {
        throw Error("Error: parameter type is not a Number");
    } else if (x > 0) {
        return true;
    } else {
        return false;
    }
}

for (var i = 0; i < arr.length; i++) {
    if (isPositive(arr[i])) {
        newArr.push(arr[i]);
    }
}
console.log(newArr);