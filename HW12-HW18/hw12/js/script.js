let ourPlanetName = "Earth";
let myAge = 27;
let myFirstName = "John";
let myLastName = "Doe";


alert("Hello, this is the work of Doe John");
alert("Our planet name is " + ourPlanetName + ".\n" + "My age is " + myAge + " years.");
alert("Hello, my name is " + myFirstName + " " + myLastName + ", I am " + myAge + " years old");
let examinerName = prompt("Please enter the name of the person checking this work:", "Examiner name");
(examinerName === "Examiner name") ? alert("Examiner name was not provided"): alert("My work is checked by " + examinerName);


// 5) Write answers to the following (in code) and comment them out:
//    5.1) What will variables (a, b, c, d) equal in the example below?
// let a = 1, b = 1;
// let c = ++a;
// let d = b++;

// Answer:
// a = 2
// b = 2
// c = 2
// d = 1

//  5.2) What will variables (a, b, x, y) equal after the code below runs?
// let a = 3;
// let b = 2;
// let x = 1 + (a += 2);
// let y = 1 + (b *= 2);

// Answer:
// a = 5
// b = 4
// x = 6
// y = 5
