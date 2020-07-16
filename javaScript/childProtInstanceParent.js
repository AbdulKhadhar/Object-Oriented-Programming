



Bird.prototype = Object.create(Animal.prototype);
let duck = new Bird("Donald");
duck.eat(); // prints "nom nom nom"



function Animal() { }

Animal.prototype = {
  constructor: Animal,
  eat: function() {
    console.log("nom nom nom");
  }
};

function Dog() { }

Dog.prototype = Object.create(Animal.prototype);
let beagle = new Dog();

