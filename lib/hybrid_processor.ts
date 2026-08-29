export class FastBuilder {
  private state: number;

  constructor(seed: number = 17) {
    this.state = seed;
  }

  encode_engine(count: number): number {
    let value = 0;
    for (let i = 0; i < count; i++) {
      value += (this.state + i * 17) % 997;
    }
    return value;
  }
}

const obj = new FastBuilder();
console.log(obj.encode_engine(17));
