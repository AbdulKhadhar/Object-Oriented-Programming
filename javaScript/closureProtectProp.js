bird.name = "Duffy";

function Bird() {
  let hatchedEgg = 10; // private variable

  /* publicly available method that a bird object can use */
  this.getHatchedEggCount = function() { 
    return hatchedEgg;
  };
}
let ducky = new Bird();
ducky.getHatchedEggCount(); // returns 10




function Bird() {
  let weight = 15;
  this.getWeight = function() {
    return weight;
  }

}
