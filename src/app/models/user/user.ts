export class User {
  constructor(private name: string, private age: number) {}

  public getName(): string {
    return this.name;
  }

  public getAge(): number {
    return this.age;
  }

  public setName(newName : string) {
    this.name = newName;
  }

  public setAge(newAge : number) {
    this.age = newAge;
  }
}
