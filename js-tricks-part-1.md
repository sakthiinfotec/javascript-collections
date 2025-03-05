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
Hoisting in JavaScript is a behavior where variable and function declarations are conceptually moved to the top of their containing scope during the compilation phase, before the code is executed. It's important to note that the actual code isn't physically moved, but the JavaScript engine behaves as if it were.

Here's how hoisting works for variables and functions:

### Variable Hoisting
1.  **`var` declarations:**
    *   Variables declared with `var` are hoisted to the top of their scope and initialized with `undefined`.
    *   This means you can use the variable before it appears to be declared in the code, but its value will be `undefined` until the line where you actually assign a value to it.

    ```javascript
    console.log(myVar); // Output: undefined
    var myVar = 10;
    console.log(myVar); // Output: 10
    ```
2.  **`let` and `const` declarations:**
    *   Variables declared with `let` and `const` are also hoisted, but they are not initialized. They are in a "temporal dead zone" (TDZ) from the start of the scope until the line where they are declared.
    *   Accessing a `let` or `const` variable before its declaration results in a `ReferenceError`.

    ```javascript
    console.log(myLet); // Output: ReferenceError: Cannot access 'myLet' before initialization
    let myLet = 20;
    console.log(myLet); // Output: 20

    console.log(myConst); // Output: ReferenceError: Cannot access 'myConst' before initialization
    const myConst = 30;
    console.log(myConst); // Output: 30
    ```

### Function Hoisting
1.  **Function declarations:**
    *   Function declarations are fully hoisted to the top of their scope. This means you can call the function before its declaration in the code.
    *   Both the function's declaration and its definition are hoisted.

    ```javascript
    myFunction(); // Output: "Hello, world!"

    function myFunction() {
      console.log("Hello, world!");
    }
    ```
2.  **Function expressions:**
    *   Function expressions are not hoisted in the same way as function declarations. If a function expression is assigned to a variable declared with `var`, only the variable declaration is hoisted (and initialized with `undefined`), not the function itself.
    *   If a function expression is assigned to a variable declared with `let` or `const`, the variable is hoisted but remains in the TDZ, similar to variable hoisting with `let` and `const`.

    ```javascript
    myExpression(); // Output: TypeError: myExpression is not a function

    var myExpression = function() {
      console.log("This is a function expression.");
    };
    ```

    ```javascript
    myExpression(); // Output: ReferenceError: Cannot access 'myExpression' before initialization

    let myExpression = function() {
      console.log("This is a function expression.");
    };
    ```

**Key Points:**
*   Hoisting allows functions to be used before they are defined in the code, which can improve readability.
*   `let` and `const` were introduced to provide more control over variable scope and to avoid some of the pitfalls associated with `var` and hoisting.
*   Understanding hoisting is essential for writing predictable and bug-free JavaScript code.
*   Always declare variables and functions at the top of their scope to avoid confusion and potential errors.

By understanding how hoisting works, you can avoid common pitfalls and write cleaner, more maintainable JavaScript code.

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
  console.log(nonHoistedFunction); // Uncaught ReferenceError: Cannot access 'nonHoistedFunction' before initialization
   
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
