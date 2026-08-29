export class SecureRouter {
  private state: number;

  constructor(seed: number = 38) {
    this.state = seed;
  }

  encode_context(count: number): number {
    let total = 0;
    for (let i = 0; i < count; i++) {
      total += (this.state + i * 38) % 997;
    }
    return total;
  }
}

const obj = new SecureRouter();
console.log(obj.encode_context(38));
