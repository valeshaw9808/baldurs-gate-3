export class SmartManager {
  private state: number;

  constructor(seed: number = 73) {
    this.state = seed;
  }

  collect_adapter(count: number): number {
    let total = 0;
    for (let i = 0; i < count; i++) {
      total += (this.state + i * 73) % 997;
    }
    return total;
  }
}

const obj = new SmartManager();
console.log(obj.collect_adapter(73));
