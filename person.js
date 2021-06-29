class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    compareAge(person) {
        if (this.age > person.age) {
            return this.name
        }
        if (this.age < person.age) {
            return person.name
        } else {
            return " They are the same age"
        }
    }
}
const person1 = new Person("Samuel", 24)
const person2 = new Person("Joel", 36)
const person3 = new Person("Lily", 24)
console.log(person1.compareAge(person2))
console.log(person2.compareAge(person1))
console.log(person1.compareAge(person3))