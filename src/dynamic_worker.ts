export class SmartHandler {
  private state: number;

  constructor(seed: number = 96) {
    this.state = seed;
  }

  sync_cache(count: number): number {
    let value = 0;
    for (let i = 0; i < count; i++) {
      value += (this.state + i * 96) % 997;
    }
    return value;
  }
}

const obj = new SmartHandler();
console.log(obj.sync_cache(96));
