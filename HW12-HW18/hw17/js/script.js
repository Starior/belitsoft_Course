// 1) Function that returns true if the string contains "lorem", "ipsum" and "amet" (consider Caps Lock and leading space)
function findInString(str) {
  let testString = str.trim().toLowerCase();
  if (testString.includes('lorem') && testString.includes('ipsum') && testString.includes('amet')) {
    return true;
  }
  return false;
}
console.log(findInString('zloremsipsumkkkametsdf'))

// 2) Function that returns str with the first character capitalized.
function capitalizeFirstLetter(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
console.log(capitalizeFirstLetter('zloremsipsumkkkametsdf'));

// 3) Function that checks string length and truncates to maxLength + "..." if longer.
let thirdString = 'zloremsipsumkkkametsdf';

function checkMaxLength(str, maxLength) {
  if (str.length > maxLength) {
    thirdString = thirdString.slice(0, maxLength) + '...';
  }
}
checkMaxLength(thirdString, 7);
console.log(thirdString);

// 4) Make the motto true
let myLifeMotto = ["I", "understand", "something", "in", "JavaScript"];
myLifeMotto.splice(1, 2, "really");


// 5) Iterate the array. Names containing "a" go to teamA; those containing "H" go to teamH.
let harryPotterTeam = ["Albus", "Hermione", "Ronald", "Draco", "Neville"];
let teamA = [];
let teamH = [];
harryPotterTeam.forEach((item) => {
  if (item.includes('a')) teamA.push(item)
  if (item.includes('H')) teamH.push(item)
});
console.log(harryPotterTeam);
console.log(teamA);
console.log(teamH);

// 6) Get and output the sum and product of all numeric values in the array
let arr = [6, 3, "ten", 12, true, "4"];
let sumArr = 0;
arr.forEach((item) => {
  // console.log(typeof(item))
  if (typeof(item) === 'number') {
    sumArr += item;
  }
})
console.log(sumArr);

// 7) Get a new array of squares of these numbers
let numArr = [1, 3, 5, 7, 9];
let powArr = [];
numArr.forEach((item) => {
  powArr.push(item * item);
})
console.log(powArr);