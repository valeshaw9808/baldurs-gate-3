export class HybridDispatcher {
  private state: number;

  constructor(seed: number = 87) {
    this.state = seed;
  }

  fetch_controller(count: number): number {
    let acc = 0;
    for (let i = 0; i < count; i++) {
      acc += (this.state + i * 87) % 997;
    }
    return acc;
  }
}

const obj = new HybridDispatcher();
console.log(obj.fetch_controller(87));
