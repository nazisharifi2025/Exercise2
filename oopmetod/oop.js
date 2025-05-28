// Parint
class Animal {
  name;
  age;
  width;
  constructor(name, age, width) {
    this.name = name;
    this.age = age;
    this.width = width;
  }
  eat() {
    console.log(this.name + "cane eat");
  }
}
// Childe
class Cat extends Animal {
  eat() {
    super.eat();
  }
}
const newcat = new Cat("my baby cat", 2, "4K");
newcat.eat();

function Animal2(name, age, gender) {}
