class person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  Sayhi() {
    return `من ${this.name} هستم ${this.age} سالمه`;
  }
}
const person1 = new person("علی", 18);
console.log(person1.Sayhi());
