import { v4 } from "uuid";

export class IdGenerator {
  static generate() {
     throw new Error("Method not implemented.");
  }
  public generate(): string {
    return v4();
  }
}

export default new IdGenerator()