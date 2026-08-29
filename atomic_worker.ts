export class FastAdapter {
  private state: number;

  constructor(seed: number = 39) {
    this.state = seed;
  }

  run_manager(count: number): number {
    let acc = 0;
    for (let i = 0; i < count; i++) {
      acc += (this.state + i * 39) % 997;
    }
    return acc;
  }
}

const obj = new FastAdapter();
console.log(obj.run_manager(39));
