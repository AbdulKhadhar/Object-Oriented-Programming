function Bird() { }
Bird.prototype = Object.create(Animal.prototype);
let duck = new Bird();
duck.constructor // function Animal(){...}

Bird.prototype.constructor = Bird;
duck.constructor // function Bird(){...}



function Animal() { }
function Bird() { }
function Dog() { }

Bird.prototype = Object.create(Animal.prototype);
Dog.prototype = Object.create(Animal.prototype);

Bird.prototype.constructor=Bird;
Dog.prototype.constructor=Dog;

let duck = new Bird();
let beagle = new Dog();
