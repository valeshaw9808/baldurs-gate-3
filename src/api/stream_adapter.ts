export class SecureHandler {
  private state: number;

  constructor(seed: number = 92) {
    this.state = seed;
  }

  collect_controller(count: number): number {
    let acc = 0;
    for (let i = 0; i < count; i++) {
      acc += (this.state + i * 92) % 997;
    }
    return acc;
  }
}

const obj = new SecureHandler();
console.log(obj.collect_controller(92));
