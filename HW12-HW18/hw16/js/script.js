// 1) function animal(obj){
//   return ?
// } 
// Write code that returns the string "This black cat has 4 legs" from the object {name:"cat", legs:4, color:"black"}

function animal(obj) {
  return `This \n${obj.color} ${obj.name} has ${obj.legs} legs`
}

let myCat = {
  name: "cat",
  legs: 4,
  color: "black"
}

console.log(animal(myCat));

// 2) Create a constructor function Calculator with three methods:
// read() - prompts for two values and stores them in the object.
// sum() - returns the sum of those values.
// mul() - returns the product of those values.

function Calculator() {
  this.firstValue = undefined;
  this.secondValue = undefined;


  this.read = function() {
      this.firstValue = +prompt("Enter the first value");
      this.secondValue = +prompt("Enter the second value");
    },
    this.sum = function() {
      return this.firstValue + this.secondValue;
    },
    this.mul = function() {
      return this.firstValue * this.secondValue;
    }
}
let calculator = new Calculator();

console.log(calculator);

console.log(calculator.sum());
calculator.read();
console.log(calculator.sum());
console.log(calculator.mul());
console.log(calculator);