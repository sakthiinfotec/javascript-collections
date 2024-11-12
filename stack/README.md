##### Example usage

```javascript
// Example usage:
const stack = new Stack<number>();
stack.push(10);
stack.push(20);
stack.push(30);

console.log(stack.peek()); // Output: 30
console.log(stack.pop());  // Output: 30
console.log(stack.size()); // Output: 2
console.log(stack.isEmpty()); // Output: false

stack.clear();
console.log(stack.isEmpty()); // Output: true
```

Writing unit and integration tests is crucial to ensure that your Stack implementation works correctly. We'll use a testing framework like Jest, which is widely used for JavaScript and TypeScript projects. If you haven't already set up Jest, you can do so by running the following commands in your project directory:

```sh
npm install --save-dev jest @types/jest ts-jest
npx ts-jest config:init
```
Then, update your package.json to include a test script:

```json
"scripts": {
  "test": "jest"
}
```

Now, let's write some unit and integration tests for the Stack implementation: [__tests__/stack.test.ts](__tests__/stack.test.ts)

##### Integration Tests
Integration tests typically involve testing how different parts of the system work together. For a simple Stack class, integration tests might not be necessary since each method is relatively independent. However, we can create a more complex scenario to demonstrate integration testing.

Let's create an integration test that simulates a sequence of operations: [__tests__/stack.integratoin.test.ts](__tests__/stack.integration.test.ts)

##### Running the Tests
To run the tests, execute the following command in your terminal:
```sh
npm test
```

This will run all the tests in your project, including the unit and integration tests for the Stack class.

##### Summary
- Unit Tests: Test individual methods and their behavior in isolation.
- Integration Tests: Test a sequence of operations to ensure they work together as expected.

These tests should cover the basic functionality of your Stack implementation and help catch any potential issues.
