// 1) Combine [1,2,3,4,5] and ['Text','Audio','Video'] into one array, then reverse the order
let arr1 = [1, 2, 3, 4, 5];
let arr2 = ['Text', 'Audio', 'Video'];
let arr3 = arr1.concat(arr2).reverse();
console.log(arr3);

// 2)
let dumbledoresArmy = [
  { age: 15, name: "Harry", wasThere: true },
  { age: 16, name: "Draco", wasThere: false },
  { age: 15, name: "Ronald", wasThere: true },
  { age: 17, name: "Luna", wasThere: true },
  { age: 16, name: "Crabbe", wasThere: false },
  { age: 16, name: "Hermione", wasThere: true },
  { age: 15, name: "Neville", wasThere: true },
];
// 2.1 Get the average age of all participants in the squad
function calcMediumAge(array) {
  let sumAges = 0;
  let participants = array.filter(item => item.wasThere)
  participants.forEach(element => sumAges += element.age);
  return sumAges / participants.length;
}
console.log(calcMediumAge(dumbledoresArmy));

// 2.2 Convert to an array of names only
dumbledoresArmyNames = dumbledoresArmy.map(item => item.name);
console.log(dumbledoresArmyNames);

// 3) 
let arr = [14, 15, 1, -10, -8, 0, 12, -11];
// 3.1 Copy to arrCopy and sort ascending
let arrCopy = arr.sort((a, b) => a - b);
console.log(arrCopy);
// 3.2 Keep only negative numbers, then sort descending
let arrCopy2 = arr.filter(item => item < 0).sort((a, b) => b - a);
console.log(arrCopy2);
// 3.3 Square each element, sort ascending, then output as a single string
let arrCopy3 = arr.map((item) => item * item).sort((a, b) => a - b).join(', ');
console.log(arrCopy3);

// 4) 
let numbers = [44, 35, 76, 2, 65, 71, 3, 55, 76];
// 4.1 Output each element and its index (e.g. Index 0 - 44)
numbers.forEach((item, index) => {
    console.log(`Index ${index} - value ${item}`);
  })
  // 4.2 Output the maximum value in the array
function getMaxOfArray(numArray) {
  return Math.max.apply(null, numArray);
}
console.log(getMaxOfArray(numbers));
// 4.3 Find the index (or indices) of the maximum value
function getIndexesMaxOfArray(array) {
  let maxValue = getMaxOfArray(array);
  array.forEach((item, index) => {
    if (item === maxValue)
      console.log(`Index of maximum value - ${index}`);
  })
}
getIndexesMaxOfArray(numbers);
// 5) 
let students = [
    { name: 'John', id: 123, marks: 9 },
    { name: 'Kate', id: 101, marks: 5 },
    { name: 'Olya', id: 200, marks: 7 },
    { name: 'Dan', id: 115, marks: 10 }
  ]
  // 5.1 Output the array of names in uppercase
console.log(students.map((item) => item.name.toLocaleUpperCase()));
// 5.2 Create an array of student marks only and compute the average
let studentsScores = students.map((item) => item.marks);

function calcMediumScore(array) {
  let sum = array.reduce((sum, nextElement) => sum + nextElement);
  return sum / array.length;
}
console.log(calcMediumScore(studentsScores));
// 6) 
let arrayOfNumber = [1, 2, 3, 0, 12, 1, 3]
  // Find how many of the first elements must be summed so the sum is greater than 10
let sumOfNumbers = 0;
for (i = 0; i < arrayOfNumber.length; i++) {
  sumOfNumbers += arrayOfNumber[i];
  if (sumOfNumbers > 10) {
    console.log(`Sum of first ${i+1} elements is greater than 10`);
    break;
  }
}


// 7) 
// https://learn.javascript.ru/task/array-get-names
let vasya = { name: "John", age: 25 };
let petya = { name: "Bob", age: 30 };
let masha = { name: "Mary", age: 28 };

let users = [vasya, petya, masha];

let names = users.map(item => item.name);
console.log(names);

// https://learn.javascript.ru/task/map-objects
let vasya2 = { name: "John", surname: "Doe", id: 1 };
let petya2 = { name: "Bob", surname: "Smith", id: 2 };
let masha2 = { name: "Mary", surname: "Jones", id: 3 };

let users2 = [vasya2, petya2, masha2];

let usersMapped = users2.map(user => ({
  fullName: `${user.name} ${user.surname}`,
  id: user.id
}));
console.log(usersMapped);