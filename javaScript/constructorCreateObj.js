function Bird() {
  this.name = "Albert";
  this.color  = "blue";
  this.numLegs = 2;
  // "this" inside the constructor always refers to the object being created
}

let blueBird = new Bird();
blueBird.name; // => Albert
blueBird.color; // => blue
blueBird.numLegs; // => 2

blueBird.name = 'Elvira';
blueBird.name; // => Elvira


function Dog() {
  this.name = "Rupert";
  this.color = "brown";
  this.numLegs = 4;
}
let hound = new Dog();
