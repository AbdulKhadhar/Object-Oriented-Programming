function Animal() { }
Animal.prototype.eat = function() {
  console.log("nom nom nom");
};
function Bird() { }
Bird.prototype = Object.create(Animal.prototype);
Bird.prototype.constructor = Bird;
Bird.prototype.fly = function() {
  console.log("I'm flying!");
};
Bird.prototype.fly = function() {
  console.log("I'm flying!");
};
let duck = new Bird();
duck.eat(); // prints "nom nom nom"
duck.fly(); // prints "I'm flying!"



function Animal() { }
Animal.prototype.eat = function() { console.log("nom nom nom"); };

function Dog() { }

Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

Dog.prototype.bark = function() {
  console.log("Woof!");
}

let beagle = new Dog();
