function Bird(name) {
  this.name = name;
}

let duck = new Bird("Donald");


Bird.prototype.isPrototypeOf(duck);
// returns true


function Dog(name) {
  this.name = name;
}

let beagle = new Dog("Snoopy");
Dog.prototype.isPrototypeOf(beagle);
