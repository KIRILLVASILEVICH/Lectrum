function getDivisors(num) {
	var arr = [];
	for (var i = 1; i <= num; i++) {
        if (typeof num !== 'number') {
            throw Error("Error: parameter type is not a Number");
        } else if (num % i == 0) {
			arr.push(i);
		}
	}
	return arr;
}

console.log(getDivisors("12"));