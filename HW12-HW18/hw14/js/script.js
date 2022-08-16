// function howManyDays(month) {
//   let days;
//   switch (true) {
//     case (month === 1 || month === 3 || month === 5 || month === 7 || month === 8 || month === 10 || month === 12):
//       days = 31;
//       break;
//     case (month === 4 || month === 6 || month === 9 || month === 11):
//       days = 30;
//       break;
//     case month === 2:
//       days = 28;
//       break;
//   }
//   return days;
// }

function howManyDays(month) {
  let days;
  switch ((typeof(month) == 'number') ? month : (month || '').toLowerCase()) {
    case 1:
    case 'january':
    case 3:
    case 'march':
    case 5:
    case 'may':
    case 7:
    case 'july':
    case 8:
    case 'august':
    case 10:
    case 'october':
    case 12:
    case 'december':
      days = 31;
      break;
    case 4:
    case 'april':
    case 6:
    case 'june':
    case 9:
    case 'september':
    case 11:
    case 'november':
      days = 30;
      break;
    case 2:
    case 'february':
      days = 28;
      break;
  }
  return days;
}

// console.log(howManyDays(7));


function max(a, b) {
  return a >= b ? a : b;
}

// console.log(max(5, 5));


function pow(x, n) {
  let result = x;
  while (n - 1 > 0) {
    result *= x;
    n--;
  }
  return result;
  // return x ** n;
}

// console.log(pow(2, 4));


function calcMultiplication(numOne, numTwo, oddNum, evenNum) {
  if ((numOne * numTwo) % 2 === 0) {
    evenNum();
  } else {
    oddNum();
  }
}

function showMessageEvenNum() {
  console.log('Product is even');
}

function showMessageOddNum() {
  console.log('Product is odd');
}

// calcMultiplication(3, 2, showMessageOddNum, showMessageEvenNum);