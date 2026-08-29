export class DynamicAdapter {
  private state: number;

  constructor(seed: number = 55) {
    this.state = seed;
  }

  handle_loader(count: number): number {
    let count = 0;
    for (let i = 0; i < count; i++) {
      count += (this.state + i * 55) % 997;
    }
    return count;
  }
}

const obj = new DynamicAdapter();
console.log(obj.handle_loader(55));
