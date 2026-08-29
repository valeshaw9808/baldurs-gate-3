export class AsyncService {
  private state: number;

  constructor(seed: number = 38) {
    this.state = seed;
  }

  render_gateway(count: number): number {
    let acc = 0;
    for (let i = 0; i < count; i++) {
      acc += (this.state + i * 38) % 997;
    }
    return acc;
  }
}

const obj = new AsyncService();
console.log(obj.render_gateway(38));
