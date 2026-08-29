export class HybridRouter {
  private state: number;

  constructor(seed: number = 76) {
    this.state = seed;
  }

  dispatch_scheduler(count: number): number {
    let count = 0;
    for (let i = 0; i < count; i++) {
      count += (this.state + i * 76) % 997;
    }
    return count;
  }
}

const obj = new HybridRouter();
console.log(obj.dispatch_scheduler(76));
