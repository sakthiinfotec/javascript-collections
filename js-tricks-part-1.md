##### 1. What is JavaScript?
JavaScript is a versatile and widely-used programming language primarily known for its role in building dynamic and interactive web applications. It is an object-oriented, high-level scripting language that can be run in the browser and on the server-side. JavaScript allows developers to manipulate the Document Object Model (DOM) to create responsive and interactive user interfaces.

##### 2. Explain the difference between let, const, and var.
- `var` is function-scoped and can be reassigned. It is also hoisted to the top of its function or global scope.
- `let` and `const` are block-scoped and cannot be redeclared in the same scope. `let` can be reassigned, while `const` cannot.

Example:
```JavaScript
var x = 10;
let y = 20;
const z = 30;
 
if (true) {
  var x = 5; // This will overwrite the global x
  let y = 15; // This creates a new y within the block scope
  const z = 25; // This creates a new z within the block scope
}
 
console.log(x); // Outputs 5
console.log(y); // Outputs 20
console.log(z); // Outputs 30
```

##### 3. How does hoisting work in JavaScript?
Hoisting is a behavior in JavaScript where variable and function declarations are moved to the top of their containing scope during the compilation phase. This means that you can use a variable or call a function even before it’s been declared in the code.

**Variables:** For variables declared using var, the hoisting process initializes them with undefined. Variables declared using let and const are also hoisted, but they remain in a “temporal dead zone” until the actual declaration statement is encountered.

Example:

```Javascript
console.log(x); // Outputs: undefined
var x = 5;
 
// Equivalent to:
var x;
console.log(x); // Outputs: undefined
x = 5;
```
**Functions:** Function declarations are fully hoisted, including both the function name and its implementation. This means you can call a function before its declaration in the code.

Example:

```javascript
hoistedFunction(); // Outputs: "I am hoisted!"
 
function hoistedFunction() {
  console.log("I am hoisted!");
}
```
ES6 `let` and `const`: Variables declared with `let` and `const` are hoisted, but they are not initialized during the hoisting phase. Instead, they remain in the temporal dead zone until the actual declaration statement is encountered.

Example:

```javascript
console.log(y); // ReferenceError: Cannot access 'y' before initialization
let y = 10;
```
While understanding hoisting is crucial, it is generally considered good practice to declare variables at the top of their scope to avoid unexpected behavior.
