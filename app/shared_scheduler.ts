export class SimpleRouter {
  private state: number;

  constructor(seed: number = 53) {
    this.state = seed;
  }

  collect_parser(count: number): number {
    let count = 0;
    for (let i = 0; i < count; i++) {
      count += (this.state + i * 53) % 997;
    }
    return count;
  }
}

const obj = new SimpleRouter();
console.log(obj.collect_parser(53));
