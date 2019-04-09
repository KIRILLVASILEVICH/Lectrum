function f() {

    for (var i = 0; i < arguments.length; i++) {
      if (typeof arguments[i] === 'number') {
        var result = (arguments[0] - arguments[1]) / arguments[2];
      } else {
        throw Error("Error: all parameters type should be a Number");
      }
    }
    return result;
  }
  
  console.log(f(12,3,3));