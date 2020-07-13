function Dog(name) {
  this.name = name;
}

let beagle = new Dog("Snoopy");

Dog.prototype.isPrototypeOf(beagle);  // yields true

// Fix the code below so that it evaluates to true
Object.prototype.isPrototypeOf(Dog.prototype);



function Bird(name) {
  this.name = name;
}

typeof Bird.prototype; // yields 'object'
Object.prototype.isPrototypeOf(Bird.prototype); // returns true
let duck = new Bird("Donald");
duck.hasOwnProperty("name"); // yields true
