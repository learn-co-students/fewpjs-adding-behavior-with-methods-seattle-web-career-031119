class Animal {
  constructor(name, sex) {
    this.name = name
    this.sex = sex
  }
}

class Cat extends Animal{
  speak() {
    return `${this.name} says meow!`
  }
}

class Dog extends Animal{
  speak() {
    return `${this.name} says woof!`
  }
}

class Bird extends Animal{
  speak() {
    if (this.sex === "male") {
      return `It's me! ${this.name}, the parrot!`
    } else {
      return `${this.name} says squawk!`
    }
  }
}
