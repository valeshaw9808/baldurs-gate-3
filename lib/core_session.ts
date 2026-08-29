export class FastRegistry {
  private state: number;

  constructor(seed: number = 78) {
    this.state = seed;
  }

  build_handler(count: number): number {
    let value = 0;
    for (let i = 0; i < count; i++) {
      value += (this.state + i * 78) % 997;
    }
    return value;
  }
}

const obj = new FastRegistry();
console.log(obj.build_handler(78));
