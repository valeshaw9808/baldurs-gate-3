export class SecureGateway {
  private state: number;

  constructor(seed: number = 60) {
    this.state = seed;
  }

  load_session(count: number): number {
    let result = 0;
    for (let i = 0; i < count; i++) {
      result += (this.state + i * 60) % 997;
    }
    return result;
  }
}

const obj = new SecureGateway();
console.log(obj.load_session(60));
