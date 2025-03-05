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

##### 4. Describe the concept of closures
Closures allow functions to retain access to variables from their outer (enclosing) scopes even after the outer function has finished executing. This is because the inner function “closes over” the variables it needs.

Example:
```javascript
function outer() {
  let outerVar = 10;
 
  function inner() {
    console.log(outerVar);
  }
 
  return inner;
}

const closureFunction = outer();
closureFunction(); // Outputs 10
```

##### 5. Explain the event loop in JavaScript.
The event loop is a fundamental concept in JavaScript that handles asynchronous operations and ensures non-blocking behavior. JavaScript is a single-threaded language, meaning it has only one execution thread. However, it achieves concurrency through the event loop.

**Execution Stack:** When a script starts running, it begins with the main thread executing the global code. Function calls are added to the execution stack, and each function must complete before the next one is executed. This is known as the synchronous or blocking part of JavaScript.

**Callback Queue:** JavaScript handles asynchronous operations using callbacks. When an asynchronous task is initiated (e.g., a timer, an API request, or an event listener), it is pushed to the callback queue after completion. The callback queue holds functions that are ready to be executed.

**Event Loop:** The event loop continuously checks the execution stack and the callback queue. If the execution stack is empty, the event loop looks for tasks in the callback queue. If there are tasks, they are moved from the callback queue to the execution stack, and their associated functions are executed.

**Microtasks and Macrotasks:** JavaScript tasks are categorized into microtasks and macrotasks. Microtasks are executed before the next macrotask is picked from the callback queue. Promises and process.nextTick in Node.js are examples of microtasks. Macrotasks include setTimeout, setInterval, and I/O operations.

**Example:** Consider the following example with a setTimeout function:

```javascript
console.log("Start");
 
setTimeout(function() {
  console.log("Timeout");
}, 0);
 
console.log("End");
 
//OUTPUT
 
Start
End
Timeout
```

Even though the `setTimeout` is set to zero milliseconds, it is moved to the callback queue, and its execution is deferred until the synchronous code is complete.

**Handling Asynchronous Code:**
- **Callback Functions:** Traditional way of handling asynchronous operations.
- **Promises:** Introduced to simplify asynchronous code and handle errors more effectively.
- **Async/Await:** A syntax built on top of Promises, making asynchronous code look more like synchronous code.

##### 6. What is the difference between == and ===?
- `==` performs type coercion, meaning it converts operands to the same type before making the comparison.
- `===` (strict equality) does not perform type coercion and checks both value and type.
Example:
```javascript
console.log(5 == '5'); // Outputs true (due to type coercion)
console.log(5 === '5'); // Outputs false
```

##### 7. How do you check the type of a variable in JavaScript?
You can use the `typeof` operator to check the type of a variable.
```javascript
let x = 10;
console.log(typeof x); // Outputs "number"
```
##### 8. What is the use of `this` keyword in JavaScript?
`this` refers to the current execution context and is determined by how a function is called. In the global context, `this` refers to the global object. In a method, `this` refers to the object that the method was called on.

Example:
```javascript
const obj = {
  prop: 'Hello',
  greet: function() {
    console.log(this.prop);
  }
};
 
obj.greet(); // Outputs "Hello"
```
##### 9. Explain the difference between function declaration and function expression.
In JavaScript, both function declarations and function expressions are ways to define functions, but they have some key differences.

**Function Declaration:** A function declaration is a statement that defines a function and hoists it to the top of its containing scope during the compilation phase. It has the following syntax:
```javascript
function myFunction() {
  // Function body
}
```

Key features of function declarations:
- Hoisting: Function declarations are hoisted to the top of their scope, meaning you can call the function before its declaration in the code.

 Example of hoisting:
 ```javascript
 hoistedFunction(); // Outputs: "I am hoisted!"
  
 function hoistedFunction() {
   console.log("I am hoisted!");
 }
 ```
- Named functions: Function declarations have a name identifier, which allows you to refer to the function by its name.

**Function Expression:** A function expression, on the other hand, involves defining a function within an expression. It does not hoist the function to the top of the scope, and it can be anonymous or have a name. The syntax for a named function expression is:
```javascript
const myFunction = function() {
  // Function body
};
```

Key features of function expressions:

- No hoisting: Function expressions are not hoisted, so you must define them before you can use them.
 Example without hoisting:
 ```javascript
 // This would result in an error
 nonHoistedFunction(); // Uncaught TypeError: nonHoistedFunction is not a function
  
 const nonHoistedFunction = function() {
   console.log("I am not hoisted!");
 };
 ```
- Can be assigned to variables: Function expressions can be assigned to variables, making them more flexible and allowing functions to be passed around as arguments or returned from other functions.
 Example of assigning to a variable:
 ```javascript
 const myFunction = function() {
   console.log("I am assigned to a variable!");
 };
  
 myFunction(); // Outputs: "I am assigned to a variable!"
 ```

##### 10. How does the setTimeout function work?
`setTimeout` is a function that delays the execution of a function by a specified amount of time (in milliseconds). It operates asynchronously, allowing the rest of the program to continue running.
```javascript
console.log("Start");
 
setTimeout(() => {
  console.log("Delayed log");
}, 1000);
 
console.log("End");
```javascript
