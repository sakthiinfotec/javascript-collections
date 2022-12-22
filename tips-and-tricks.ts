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
