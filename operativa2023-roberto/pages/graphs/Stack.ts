export class Stack<T> {
    private elements: T[];
  
    constructor(initialElements?: T[]) {
      this.elements = initialElements || [];
    }
  
    public push(...items: T[]): void {
      this.elements.push(...items);
    }
  
    public pop(): T | undefined {
      return this.elements.pop();
    }
  
    public peek(): T | undefined {
      return this.elements[this.elements.length - 1];
    }
  
    public size(): number {
      return this.elements.length;
    }
  
    public isEmpty(): boolean {
      return this.elements.length === 0;
    }
  
    public clear(): void {
      this.elements = [];
    }
  
    public toArray(): T[] {
      return [...this.elements];
    }
  
    public sort(compareFn?: (a: T, b: T) => number): void {
      this.elements.sort(compareFn);
    }
  }