
const animal = {
  name: "fox",
  speak() {
    console.log(`olen ${animal.name}`);
  },
};
animal.speak();

class Animal {
    constructor (name, species, age) {
        this.name = name;
        this.species = species;
        this.age = age
    }
}

constanimal2 = new Animal("Hirvi", "Hirvieläinen", 2)
console.log(constanimal2)