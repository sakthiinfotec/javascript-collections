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

