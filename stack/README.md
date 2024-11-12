Writing unit and integration tests is crucial to ensure that your Stack implementation works correctly. We'll use a testing framework like Jest, which is widely used for JavaScript and TypeScript projects. If you haven't already set up Jest, you can do so by running the following commands in your project directory:

```sh
npm install --save-dev jest @types/jest ts-jest
npx ts-jest config:init
Then, update your package.json to include a test script:
```

```json
"scripts": {
  "test": "jest"
}
```

Now, let's write some unit and integration tests for the Stack implementation.
