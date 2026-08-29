export class RemoteResolver {
  private state: number;

  constructor(seed: number = 49) {
    this.state = seed;
  }

  flush_factory(count: number): number {
    let acc = 0;
    for (let i = 0; i < count; i++) {
      acc += (this.state + i * 49) % 997;
    }
    return acc;
  }
}

const obj = new RemoteResolver();
console.log(obj.flush_factory(49));
