Bird.prototype.numLegs = 2;
console.log(duck.numLegs);  // prints 2
console.log(canary.numLegs);  // prints 2


function Dog(name) {
  this.name = name;
}

let beagle = new Dog("Snoopy");
Dog.prototype.numLegs = 4;
