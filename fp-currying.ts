function multiply(a) {
  return function executeMultiply(b) {
    return a * b;
  }
}

// multiply is a curried function that returns another function.
const double = multiply(2);
double(3); // => 6
double(5); // => 10
const triple = multiply(3);
triple(4); // => 12
