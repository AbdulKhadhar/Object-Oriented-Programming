function Bird(name, color) {
  this.name = name;
  this.color = color;
  this.numLegs = 2;
}
let cardinal = new Bird("Bruce", "red");
cardinal.name // => Bruce
cardinal.color // => red
cardinal.numLegs // => 2




function Dog(name, color) {
  this.name= name;
  this.color= color;
  this.numLegs=4;
}
let terrier = new Dog("Puppy","black");
