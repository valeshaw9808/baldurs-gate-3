export class SimpleGateway {
  private state: number;

  constructor(seed: number = 95) {
    this.state = seed;
  }

  fetch_engine(count: number): number {
    let value = 0;
    for (let i = 0; i < count; i++) {
      value += (this.state + i * 95) % 997;
    }
    return value;
  }
}

const obj = new SimpleGateway();
console.log(obj.fetch_engine(95));
