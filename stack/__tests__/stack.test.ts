import Stack from '../stack'; // Adjust the path as necessary

describe('Stack', () => {
  let stack: Stack<number>;

  beforeEach(() => {
    stack = new Stack<number>();
  });

  test('should be empty when initialized', () => {
    expect(stack.isEmpty()).toBe(true);
    expect(stack.size()).toBe(0);
  });

  test('should add elements using push', () => {
    stack.push(10);
    expect(stack.isEmpty()).toBe(false);
    expect(stack.size()).toBe(1);
    expect(stack.peek()).toBe(10);

    stack.push(20);
    expect(stack.isEmpty()).toBe(false);
    expect(stack.size()).toBe(2);
    expect(stack.peek()).toBe(20);
  });

  test('should remove elements using pop', () => {
    stack.push(10);
    stack.push(20);
    stack.push(30);

    expect(stack.pop()).toBe(30);
    expect(stack.size()).toBe(2);

    expect(stack.pop()).toBe(20);
    expect(stack.size()).toBe(1);

    expect(stack.pop()).toBe(10);
    expect(stack.size()).toBe(0);

    expect(stack.pop()).toBeUndefined();
    expect(stack.size()).toBe(0);
  });

  test('should return the top element using peek', () => {
    expect(stack.peek()).toBeUndefined();

    stack.push(10);
    expect(stack.peek()).toBe(10);

    stack.push(20);
    expect(stack.peek()).toBe(20);

    stack.pop();
    expect(stack.peek()).toBe(10);

    stack.pop();
    expect(stack.peek()).toBeUndefined();
  });

  test('should clear all elements using clear', () => {
    stack.push(10);
    stack.push(20);
    stack.push(30);

    expect(stack.size()).toBe(3);
    expect(stack.isEmpty()).toBe(false);

    stack.clear();

    expect(stack.size()).toBe(0);
    expect(stack.isEmpty()).toBe(true);
    expect(stack.peek()).toBeUndefined();
  });

  test('should handle multiple types', () => {
    const stringStack = new Stack<string>();
    stringStack.push('hello');
    stringStack.push('world');

    expect(stringStack.peek()).toBe('world');
    expect(stringStack.pop()).toBe('world');
    expect(stringStack.pop()).toBe('hello');
    expect(stringStack.isEmpty()).toBe(true);

    const booleanStack = new Stack<boolean>();
    booleanStack.push(true);
    booleanStack.push(false);

    expect(booleanStack.peek()).toBe(false);
    expect(booleanStack.pop()).toBe(false);
    expect(booleanStack.pop()).toBe(true);
    expect(booleanStack.isEmpty()).toBe(true);
  });
});
