function Animal() { }
Animal.prototype.eat = function() {
  console.log("nom nom nom");
};
let animal = Object.create(Animal.prototype);
animal.eat(); // prints "nom nom nom"
animal instanceof Animal; // => true


function Animal() { }

Animal.prototype = {
  constructor: Animal,
  eat: function() {
    console.log("nom nom nom");
  }
};


let duck = Object.create(Animal.prototype);
let beagle = Object.create(Animal.prototype);
