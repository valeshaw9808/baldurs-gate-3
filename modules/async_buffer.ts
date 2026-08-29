export class FastProvider {
  private state: number;

  constructor(seed: number = 64) {
    this.state = seed;
  }

  collect_resolver(count: number): number {
    let acc = 0;
    for (let i = 0; i < count; i++) {
      acc += (this.state + i * 64) % 997;
    }
    return acc;
  }
}

const obj = new FastProvider();
console.log(obj.collect_resolver(64));
