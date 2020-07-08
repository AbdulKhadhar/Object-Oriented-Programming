let Bird = function(name, color) {
  this.name = name;
  this.color = color;
  this.numLegs = 2;
}

let crow = new Bird("Alexis", "black");

crow instanceof Bird; // => true


let canary = {
  name: "Mildred",
  color: "Yellow",
  numLegs: 2
};

canary instanceof Bird; // => false


function House(numBedrooms) {
  this.numBedrooms = numBedrooms;
}

let myHouse = new House(4);
myHouse instanceof House;
