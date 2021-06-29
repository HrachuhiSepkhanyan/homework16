function Person(name, age) {
    this.name = name;
    this.age = age;
}

function Baby(name, age, favoriteToy) {
    Person.call(this, name, age)
    this.favoriteToy = favoriteToy
}
Baby.prototype.play = function() {
    return ` ${this.name} Playing with ${this.favoriteToy}`;
};

const Aram = new Baby("Aram", 7, "car");

console.log(Aram.play());
console.log(Aram);