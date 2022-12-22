/* Function Scope */
// Output: 0 1 2 3
for(let i=0; i<=3;i++) {
    setTimeout(function cb(){
        console.log(`${i}`)
    }, i * 1000)
}

/* Variable Scope */
// Output: 200 200 200
var myVar = 100;

function Constructor() {
  var myVar = 200;
  this.myVar = 200;
  console.log(myVar)
  console.log(this.myVar)
}

const obj = new Constructor()
console.log(obj.myVar);

// Accidental global variable
function foo() {
  let a = b = 0;
  a++;
  return a;
}

foo();

console.log(typeof a);  // undefined
console.log(typeof b);	// number

// Automatic semicolon insertion
function arrayFromValue(item) {
  return
    [item];
}
arrayFromValue(10); // undefined
// Array length
const clothes = ['jacket', 't-shirt'];
clothes.length = 0; // Reducing length will delete elements there after from the index till end
console.log(clothes[0]);  // undefined


// Code debugging (Semicolon at end of For loop)
const length = 4;
const numbers = [];
for (var i = 0; i < length; i++);{
  numbers.push(i + 1);
}
console.log(numbers);   // [5]

// var vs let (1)
for (let i = 0; i < 3; i++) {
  setTimeout(function log() {
    console.log(i); // 0 1 2
  }, i * 1000);
}

// var vs let (2)
for (var i = 0; i < 3; i++) {
  setTimeout(function log() {
    console.log(i); // 3 3 3
  }, i * 1000);
}

// Variable scope
let i;
for (i = 0; i < 3; i++) {
  const log = () => {
    console.log(i);     // 3 3 3
  }
  setTimeout(log, 100);
}

let j;
for (j = 0; j < 3; j++) {
  setTimeout(function() {
	  console.log(j);   // 3 3 3
	}, 100);
}

for (let i = 0; i < 3; i++) {
  const log = () => {
    console.log(i);     // 0 1 2
  }
  setTimeout(log, 100);
}

for (let j = 0; j < 3; j++) {
  setTimeout(function() {
	  console.log(j);   // 0 1 2
	}, 100);
}

// Floating point match
0.1 + 0.2 === 0.3 // false
0.1 + 0.2; // => 0.30000000000000004

// Hoisting (1)
console.log(myVar);   // undefined
console.log(myConst); // Uncaught ReferenceError: Cannot access 'myConst' before initialization

var myVar = 'value';
const myConst = 3.14;


// Hosting (2)
numbers();	// two
var numbers = function () {
  console.log('Number one');
}
numbers();	// one

function numbers() {
  console.log('Number two');
}
numbers();	// one

// Hoisting (3)
console.log(a);		// undefined
var a;
console.log(b);		// Uncaught ReferenceError: b is not defined


// Closure (1)
let counter = function() {
  let k = 0;
  return () => k++;
}();
console.log(counter());	// 0
console.log(counter());	// 1
console.log(counter());	// 2
console.log(counter());	// 3

// Closure (2)
let count = 0;
(function immediate() {
  if (count === 0) {
    let count = 1;
    console.log(count); // 1
  }
  console.log(count); // 0
})();

// Mystry of this - keyword
var length = 4;
function callback() {
  console.log(this.length);	// 3
}
const object = {
  length: 5,
  method() {
    arguments[0]();
  }
};
object.method(callback, 1, 2);
