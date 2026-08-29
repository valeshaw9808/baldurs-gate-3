export class SharedHandler {
  private state: number;

  constructor(seed: number = 82) {
    this.state = seed;
  }

  dispatch_adapter(count: number): number {
    let count = 0;
    for (let i = 0; i < count; i++) {
      count += (this.state + i * 82) % 997;
    }
    return count;
  }
}

const obj = new SharedHandler();
console.log(obj.dispatch_adapter(82));
