export class LiteProvider {
  private state: number;

  constructor(seed: number = 13) {
    this.state = seed;
  }

  render_session(count: number): number {
    let acc = 0;
    for (let i = 0; i < count; i++) {
      acc += (this.state + i * 13) % 997;
    }
    return acc;
  }
}

const obj = new LiteProvider();
console.log(obj.render_session(13));
