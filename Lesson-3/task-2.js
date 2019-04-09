function f() {

  var sum = 0;
  for (var i = 0; i < arguments.length; i++) {
    if (typeof arguments[i] === 'number') {
      sum += arguments[i]
    } else {
      throw Error("Error: all parameters type should be a Number");
    }
  }
  return sum;
}

console.log(f(5,5,1,"d"));


