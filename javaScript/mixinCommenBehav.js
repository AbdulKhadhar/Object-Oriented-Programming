let flyMixin = function(obj) {
  obj.fly = function() {
    console.log("Flying, wooosh!");
  }
};



let bird = {
  name: "Donald",
  numLegs: 2
};

let plane = {
  model: "777",
  numPassengers: 524
};

flyMixin(bird);
flyMixin(plane);



bird.fly(); // prints "Flying, wooosh!"
plane.fly(); // prints "Flying, wooosh!"


let bird = {
  name: "Donald",
  numLegs: 2
};

let boat = {
  name: "Warrior",
  type: "race-boat"
};

let glideMixin = function(obj) {
  obj.glide = function() {
    console.log("gleeee");
  }
};

glideMixin(bird);
glideMixin(boat);

