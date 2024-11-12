class Stack<T> {
  private items: T[] = [];

  // Add an element to the top of the stack
  push(element: T): void {
    this.items.push(element);
  }

  // Remove and return the top element of the stack
  pop(): T | undefined {
    return this.items.pop();
  }

  // Return the top element of the stack without removing it
  peek(): T | undefined {
    if (this.isEmpty()) {
      return undefined;
    }
    return this.items[this.items.length - 1];
  }

  // Check if the stack is empty
  isEmpty(): boolean {
    return this.items.length === 0;
  }

  // Get the number of elements in the stack
  size(): number {
    return this.items.length;
  }

  // Clear all elements from the stack
  clear(): void {
    this.items = [];
  }
}

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
