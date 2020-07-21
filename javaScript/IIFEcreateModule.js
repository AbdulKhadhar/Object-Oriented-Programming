function glideMixin(obj) {
  obj.glide = function() {
    console.log("Gliding on the water");
  };
}
function flyMixin(obj) {
  obj.fly = function() {
    console.log("Flying, wooosh!");
  };
}
let motionModule = (function () {
  return {
    glideMixin: function(obj) {
      obj.glide = function() {
        console.log("Gliding on the water");
      };
    },
    flyMixin: function(obj) {
      obj.fly = function() {
        console.log("Flying, wooosh!");
      };
    }
  }
})(); // The two parentheses cause the function to be immediately invoked




let funModule = (function() {
return {
 isCuteMixin : function(obj) {
  obj.isCute = function() {
    return true;
  };
},
 singMixin : function(obj) {
  obj.sing = function() {
    console.log("Singing to an awesome tune");
  };
}
}
})();
