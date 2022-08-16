// 1) Create a function that calculates the length of a train
// Train length is the sum of existing cars and their counts.

let train = {
  isLocomotive: true,
  locomotiveLength: 25,
  locomotiveColor: 'black',
  isFreightCar: false,
  freightCarLength: 30,
  isCoachCar: true,
  totalCoachCars: 9,
  coachLength: 20,
};

function calcTrainLength(train) {
  let trainLenght = 0;
  if (train.isLocomotive === true) {
    trainLenght += train.locomotiveLength;
  }
  if (train.isFreightCar === true) {
    trainLenght += train.freightCarLength * (train.totalFreightCars || 0);
  }
  if (train.isCoachCar === true) {
    trainLenght += train.coachLength * train.totalCoachCars;
  }
  return trainLenght;
}
console.log('Train length: ' + calcTrainLength(train));


// 2) Create an object for your favourite car (brand, color, doors, horsepower, engine capacity, manual/automatic) and clone it using the two methods we covered.

let myCar = {
  carBrand: 'Jeep',
  carColor: 'yellow',
  sumDoors: 4,
  maxPower: 268,
  engineDisplacement: 1998,
  TransmissionType: 'Automatic',
};

let yourCar = {};

for (key in myCar) {
  yourCar[key] = myCar[key];
}

console.log(yourCar);

let herCar = Object.assign({}, myCar);

console.log(herCar);


// 3) In the book object, output to the console the keys whose values are boolean.
// let book = {
//      numberOfPages : 545,
//      cover  : true,
//      isTheAuthorAlive  : false, 
//      isBestseller  : true,
//      booksEditions  : 20000000,
//  };

let book = {
  numberOfPages: 545,
  cover: true,
  isTheAuthorAlive: false,
  isBestseller: true,
  booksEditions: 20000000,
};

function booleanTypesInBook(book) {
  for (let key in book) {
    if (typeof(book[key]) === 'boolean')
      console.log(key)
  }
}
booleanTypesInBook(book);