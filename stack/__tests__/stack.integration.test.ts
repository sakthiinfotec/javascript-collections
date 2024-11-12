import Stack from './stack'; // Adjust the path as necessary

describe('Stack Integration', () => {
  let stack: Stack<number>;

  beforeEach(() => {
    stack = new Stack<number>();
  });

  test('should handle a sequence of operations correctly', () => {
    // Initial state
    expect(stack.isEmpty()).toBe(true);
    expect(stack.size()).toBe(0);

    // Push elements
    stack.push(10);
    stack.push(20);
    stack.push(30);

    expect(stack.isEmpty()).toBe(false);
    expect(stack.size()).toBe(3);
    expect(stack.peek()).toBe(30);

    // Pop an element
    expect(stack.pop()).toBe(30);
    expect(stack.isEmpty()).toBe(false);
    expect(stack.size()).toBe(2);
    expect(stack.peek()).toBe(20);

    // Push another element
    stack.push(40);

    expect(stack.isEmpty()).toBe(false);
    expect(stack.size()).toBe(3);
    expect(stack.peek()).toBe(40);

    // Clear the stack
    stack.clear();

    expect(stack.isEmpty()).toBe(true);
    expect(stack.size()).toBe(0);
    expect(stack.peek()).toBeUndefined();
  });
});
