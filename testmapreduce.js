const sample = [1, 2, 3];
const mapped = sample.map(elem => elem * 10); //example map method
console.log(
  `Result of forEach function New array of map funciton = [ ${mapped} ]`
);
console.log("=========");

//example forEach method
const foreached = sample.forEach((elem, index) => {
  console.log("Resutl of New Element = ", (newElement = elem * 10));
  console.log(`Result of forEach function ${elem} index is ${index}`);
});
console.log("=========");
//example filter method
const filtered = sample.filter(elem => elem !== 1); // return array does not contain 1
console.log(`Result of filter function [ ${filtered}]`);
console.log("=========");
//example reduce method
// return single value with sumation, subtraction and multiplicatio.
const reducedAdd = sample.reduce((sum, elem) => sum + elem); // using sum = 0 result [6]
console.log(`Result of reduce function for adding  [${reducedAdd}]`);

const reducedMult = sample.reduce((sum, elem) => sum * elem); // using sum = 1 result [6]
console.log(`Result of reduce function for multiply [${reducedMult}]`);

const reducedSub = sample.reduce((sum, elem) => sum - elem); // using [sum =?] result [-4]
console.log(`Result of reduce function for subtraction [${reducedSub}]`);
const reducedSub2 = sample.reduce((sum, elem) => sum - elem, 0);
console.log(`Result of reduceRight function for subtraction2 [${reducedSub2}]`); // using [sum =?] result [-6]

//Using reduceRight to find subtraction.
const reducedSubRight = sample.reduceRight((sum, elem) => sum - elem);
console.log(
  `Result of reduceRight function for reducedSubRight [${reducedSubRight}]`
); // using [sum =?] result [0]
console.log("=========");

const isZero = n => n === 0; // isZeros function to find how many zeros.
let array = [0, 1, 0, 2, 3, 0];
console.log(`Array contines [${array.filter(isZero)}] zeros`); // return a new array with zeros.
console.log(`Array contines ${array.filter(isZero).length} zeros`);
console.log("=========");
//multiply function
const multiply = (x, y) => x * y;
console.log(`Multiplication result x * y = ${multiply(5, 10)}`); // 50
// Method chaining
const cart = [
  { name: "Drink", price: 3.12 },
  { name: "Steak", price: 45.15 },
  { name: "Drink", price: 11.01 }
];
let drinkTotal = cart
  .filter(elem => elem.name === "Drink") // return a new array with two object of name  and price
  .map(elem => elem.price) // return a new array for two numbers of price of drink
  .reduce((sum, current) => sum + current) // summition of two numbers
  .toFixed(2);
console.log("=========");
console.log(`Total Drink Cost is ${drinkTotal}`);
