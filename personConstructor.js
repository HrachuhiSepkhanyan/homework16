function Person(name, age) {
    this.name = name;
    this.age = age;
    this.stomach = [];
}

Person.prototype.eat = function(food) {
    if (this.stomach.length < 10) {
        this.stomach.push(food);
        console.log("I am hungry");
    } else {
        console.log("I am not hungry");
    }
};
Person.prototype.poop = function() {
    this.stomach = [];
    console.log("I am hungry");
};
Person.prototype.toString = function() {
    return `${this.name} ${this.age}`;
};

let person = new Person("Mary", 1000);

person.eat("dsh")
console.log(person)