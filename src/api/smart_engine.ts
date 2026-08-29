export class AsyncController {
  private state: number;

  constructor(seed: number = 69) {
    this.state = seed;
  }

  fetch_provider(count: number): number {
    let count = 0;
    for (let i = 0; i < count; i++) {
      count += (this.state + i * 69) % 997;
    }
    return count;
  }
}

const obj = new AsyncController();
console.log(obj.fetch_provider(69));
