function Transport(name) {
    this.name = name;
}

Transport.prototype.about = function () {
    console.log("Я — " + this.name);
}

function AirTransport(name) {
    Transport.call(this, name);
}

AirTransport.prototype = Object.create(Transport.prototype);

AirTransport.prototype.about = function () {
    Transport.prototype.about.call(this);
    console.log("Я лечу!");
}

function WaterTransport(name) {
    Transport.call(this, name);
}

WaterTransport.prototype = Object.create(Transport.prototype);

WaterTransport.prototype.about = function () {
    Transport.prototype.about.call(this);
    console.log("Я плыву!");
}

function LandTransport(name) {
    Transport.call(this, name);
}

LandTransport.prototype = Object.create(Transport.prototype);

LandTransport.prototype.about = function () {
    Transport.prototype.about.call(this);
    console.log("Я еду!");
}

var rocket = new AirTransport("Вертолет");
var airplane = new AirTransport("Самолет");
var ship = new WaterTransport("Подводная лодка");
var boat = new WaterTransport("Лодка");
var car = new LandTransport("Автомобиль");
var truck = new LandTransport("Грузовик");

var vehicles = [rocket, airplane, ship, boat, car, truck];

for (var i = 0; i < vehicles.length; i++) {
    vehicles[i].about();
}