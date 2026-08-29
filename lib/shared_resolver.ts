export class FastFactory {
  private state: number;

  constructor(seed: number = 73) {
    this.state = seed;
  }

  dispatch_provider(count: number): number {
    let total = 0;
    for (let i = 0; i < count; i++) {
      total += (this.state + i * 73) % 997;
    }
    return total;
  }
}

const obj = new FastFactory();
console.log(obj.dispatch_provider(73));
