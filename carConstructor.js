function Car(model, milesPerGallon) {
    this.model = model;
    this.milesPerGallon = milesPerGallon;
    this.tank = 0;
    this.odometer = 0;


};
Car.prototype.fill = function(gallons) {
    return (this.tank += gallons);
};
Car.prototype.drive = function(distance) {

    if (this.tank === 0) {
        throw new Error("Out of Fuel");
    }
    if (this.tank - distance < 0) {
        throw new Error("Out of Fuel")
    }
    this.odometer += distance;
    this.tank -= distance / milesPerGallon;
    console.log(`You can drive ${this.tank} * ${milesPerGallon}`);
    return "Iran out of fuel at x miles!";
};
const merc = new Car("Merc", 25)
console.log(merc)