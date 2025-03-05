### 11. What is a callback function?
A callback function in JavaScript is a function that is passed as an argument to another function, to be executed at a later time. Essentially, it's a way to make sure a function is not going to run until another function has already finished executing.

Here are the key aspects of callback functions:

1.  **Passed as an argument:** A callback function is passed as an argument to another function, which we often refer to as the "higher-order function."

    ```javascript
    function greet(name, callback) {
      console.log('Hello ' + name);
      callback();
    }
    ```

2.  **Executed later:** The higher-order function executes the callback function at a specific point, often after it has completed some operation.

    ```javascript
    function sayGoodbye() {
      console.log('Goodbye!');
    }

    greet('John', sayGoodbye);
    // Output:
    // Hello John
    // Goodbye!
    ```

3.  **Asynchronous operations:** Callbacks are commonly used in asynchronous operations, such as making HTTP requests or reading files. This ensures that code depending on the result of these operations is executed only after the operation completes.

    ```javascript
    function fetchData(url, callback) {
      // Simulate fetching data from a URL
      setTimeout(() => {
        const data = 'Some data from ' + url;
        callback(data); // Execute the callback with the fetched data
      }, 1000);
    }

    function processData(data) {
      console.log('Processing data: ' + data);
    }

    fetchData('https://example.com/api/data', processData);
    // Output (after 1 second):
    // Processing data: Some data from https://example.com/api/data
    ```

4.  **Event listeners:** Callbacks are also used in event listeners, where a function is executed when a specific event occurs.

    ```javascript
    document.getElementById('myButton').addEventListener('click', function() {
      console.log('Button clicked!');
    });
    ```

**Why Use Callbacks?**  
*   **Asynchronous Programming:** Callbacks are essential for handling asynchronous operations in JavaScript, allowing you to perform tasks like fetching data from a server without blocking the main thread.
*   **Event Handling:** They are used to respond to events, such as user interactions or system events.
*   **Event-Driven Programming:** Efficiently handling user interactions and system events.
*   **Customization:** Callbacks allow you to customize the behavior of a function by passing in different functions as arguments.
*   **Modularity:** Decoupling code into smaller, reusable functions.

**Callback Hell**  
A common issue with callbacks is "callback hell," where multiple nested callbacks make the code difficult to read and maintain. Promises and async/await are more modern solutions to this problem.

```javascript
asyncOperation1(function(result1) {
  asyncOperation2(result1, function(result2) {
    asyncOperation3(result2, function(result3) {
      console.log('Final result: ' + result3);
    });
  });
});
```

In summary, a callback function is a function passed as an argument to another function and executed at a later time. They are crucial for handling asynchronous operations, event handling, and customizing function behavior in JavaScript.

<hr/>

### 12. Explain the Concept of Pure Function
A pure function is a fundamental concept in functional programming. It's a function that adheres to two key principles:

1.  **Deterministic:** Given the same input, it will always return the same output.
2.  **No Side Effects:** It does not cause any observable side effects outside of its own scope.

Let's break down each of these principles:

#### 1. Deterministic

A pure function's output depends solely on its input arguments. It doesn't rely on any external state or mutable data. This means that if you call the function with the same arguments multiple times, you'll always get the same result.

**Example of a pure function:**

```javascript
function add(x, y) {
  return x + y;
}

console.log(add(2, 3)); // Output: 5
console.log(add(2, 3)); // Output: 5 (always the same)
```

In this example, `add(2, 3)` will always return `5`, regardless of where or when it's called.

**Example of an impure function (not deterministic):**

```javascript
let counter = 0;

function increment(x) {
  counter++;
  return x + counter;
}

console.log(increment(5)); // Output: 6
console.log(increment(5)); // Output: 7 (changes due to external state)
```

Here, `increment(x)` depends on the external variable `counter`, so it's not deterministic.

#### 2. No Side Effects

A pure function does not modify anything outside its own scope. It doesn't change any external variables, properties of objects, or perform I/O operations. This is crucial for maintaining predictability and avoiding unexpected behavior.

**Examples of side effects to avoid:**

*   Modifying global variables.
*   Modifying function arguments (mutating input data).
*   Performing I/O operations (e.g., `console.log`, reading/writing files).
*   Making HTTP requests.
*   Modifying the DOM.

**Example of a pure function (no side effects):**

```javascript
function multiply(x, y) {
  return x * y;
}

let a = 5;
let b = 10;
let result = multiply(a, b);
console.log(a, b, result); // Output: 5, 10, 50 (a and b are unchanged)
```

In this case, `multiply` only returns a value and doesn't modify `a` or `b` or any external state.

**Example of an impure function (with side effects):**

```javascript
let person = { name: 'Alice', age: 30 };

function birthday(obj) {
  obj.age++; // Modifies the input object
  return obj.age;
}

console.log(person); // Output: { name: 'Alice', age: 30 }
let age = birthday(person);
console.log(person); // Output: { name: 'Alice', age: 31 } (person object is modified)
console.log(age);    // Output: 31
```

Here, `birthday` modifies the `person` object, causing a side effect outside of the function itself.

##### Benefits of Pure Functions

*   **Predictability:** Pure functions are easier to reason about and test because their output is solely determined by their inputs.
*   **Testability:** Testing pure functions is straightforward because you can easily predict the output for a given set of inputs.
*   **Cacheability:** Pure functions can be easily memoized (cached) to improve performance since the same inputs always produce the same outputs.
*   **Concurrency:** Pure functions are safe to run in parallel because they don't rely on or modify any shared state.
*   **Composability:** Pure functions can be easily composed together to create more complex functions.

##### Summary

A pure function is a function that is deterministic (always returns the same output for the same input) and has no side effects (does not modify anything outside its own scope). Using pure functions promotes more predictable, testable, and maintainable code. They are a cornerstone of functional programming and contribute to creating robust applications.

<hr/>

### 13. What are the differences between function.call, function.apply, and function.bind?
In JavaScript, `call`, `apply`, and `bind` are methods that allow you to manipulate the `this` context of a function and execute or create a new function with a specific `this` value. Here's a breakdown of their differences:

### 1. `function.call(thisArg, arg1, arg2, ...)`

*   **Purpose:** Executes the function immediately with a specified `this` value and individual arguments.
*   **Arguments:**
    *   `thisArg`: The value to be used as `this` when executing the function. If `thisArg` is `null` or `undefined`, the global object (window in browsers, global in Node.js) is used. In strict mode, `thisArg` will be `null` or `undefined` as provided.
    *   `arg1, arg2, ...`: A list of arguments that are passed to the function.
*   **Usage:** Useful when you know the number of arguments beforehand and want to execute the function immediately.

```javascript
function greet(message, punctuation) {
  console.log(`${message}, ${this.name}${punctuation}`);
}

const person = { name: 'Alice' };

greet.call(person, 'Hello', '!'); // Output: Hello, Alice!
```

### 2. `function.apply(thisArg, [argsArray])`

*   **Purpose:** Executes the function immediately with a specified `this` value and arguments provided as an array.
*   **Arguments:**
    *   `thisArg`: The value to be used as `this` when executing the function. If `thisArg` is `null` or `undefined`, the global object (window in browsers, global in Node.js) is used. In strict mode, `thisArg` will be `null` or `undefined` as provided.
    *   `[argsArray]`: An array containing the arguments that are passed to the function. If the function does not require any arguments, this can be an empty array or `null`.
*   **Usage:** Useful when you have an array of arguments and want to execute the function immediately.

```javascript
function greet(message, punctuation) {
  console.log(`${message}, ${this.name}${punctuation}`);
}

const person = { name: 'Alice' };
const args = ['Hello', '!'];

greet.apply(person, args); // Output: Hello, Alice!
```

### 3. `function.bind(thisArg, arg1, arg2, ...)`

*   **Purpose:** Creates a new function that, when called, has its `this` value set to the provided `thisArg`. It can also pre-fill some of the arguments.
*   **Arguments:**
    *   `thisArg`: The value to be used as `this` when the new function is called.
    *   `arg1, arg2, ...`: Optionally, a list of arguments to be pre-filled into the new function's argument list.
*   **Usage:** Useful when you want to create a new function with a fixed `this` value that can be called later.

```javascript
function greet(message, punctuation) {
  console.log(`${message}, ${this.name}${punctuation}`);
}

const person = { name: 'Alice' };

const greetAlice = greet.bind(person, 'Hello'); // Creates a new function

greetAlice('!'); // Output: Hello, Alice!
```

### Key Differences Summarized

| Feature       | `call`                                 | `apply`                                | `bind`                                                 |
| ------------- | -------------------------------------- | -------------------------------------- | ------------------------------------------------------ |
| **Execution** | Executes the function immediately.     | Executes the function immediately.     | Returns a new function that can be executed later.     |
| **Arguments** | Takes arguments individually.          | Takes arguments as an array.           | Can pre-fill arguments, returns a new function.       |
| **`this`**    | Specifies `this` for the execution.    | Specifies `this` for the execution.    | Specifies `this` for the new function when it's called. |
| **Return**      | Returns the result of the function call. | Returns the result of the function call. | Returns a new bound function.                          |

### When to Use Which

*   **Use `call`** when you want to execute a function immediately with a specific `this` value and you know the arguments beforehand.
*   **Use `apply`** when you want to execute a function immediately with a specific `this` value and you have the arguments in an array.
*   **Use `bind`** when you want to create a new function with a fixed `this` value that you can call later, and/or when you want to pre-fill some of the arguments.

Understanding these differences will help you effectively manage the `this` context in JavaScript and create more flexible and reusable code.
