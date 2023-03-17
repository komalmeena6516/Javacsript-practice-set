
var phone = 345678;
let rect = {
    length : 5,
    height : 10,
    width : 5,
    Shape: "gol",
    square :{
          length : 2,
          height : 3
    },
     area : function(a, b){
        // this.length = a;
        // this.height = b;
        return this.length*this.height;
     },

     phone:phone
}

// var phone = 345678;

console.log(rect.area(3, 5));

let arr = Object.keys(rect);
console.log(arr);
console.log(rect);

// function RIO(color, name, age, owner){
//     this.color:
// }

let kuchbhi =rect.Shape;
 console.log(kuchbhi);
 console.log(rect);