export class SmartService {
  private state: number;

  constructor(seed: number = 13) {
    this.state = seed;
  }

  handle_scheduler(count: number): number {
    let count = 0;
    for (let i = 0; i < count; i++) {
      count += (this.state + i * 13) % 997;
    }
    return count;
  }
}

const obj = new SmartService();
console.log(obj.handle_scheduler(13));
