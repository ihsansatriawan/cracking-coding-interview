/**
 
seven(times(five())); // must return 35
four(plus(nine())); // must return 13
eight(minus(three())); // must return 5
six(dividedBy(two())); // must return 3

 **/

const expressionHelper = (operation, number) => {
  if (!operation) {return number;}
  return operation(number);
};


const zero = (operation) => { return expressionHelper(operation, 0); };
const one = (operation) => { return expressionHelper(operation, 1); };
const two = (operation) => { return expressionHelper(operation, 2); };
const three = (operation) => { return expressionHelper(operation, 3); };
const four = (operation) => { return expressionHelper(operation, 4); };
const five = (operation) => { return expressionHelper(operation, 5); };
const six = (operation) => { return expressionHelper(operation, 6); };
const seven = (operation) => { return expressionHelper(operation, 7); };
const eight = (operation) => { return expressionHelper(operation, 8); };
const nine = (operation) => { return expressionHelper(operation, 9); };

const plus = (x) => (y) => y + x;
const minus = (x) => (y) => y - x;
const times = (x) => (y) => y * x;
const divide = (x) => (y) => y / x;


console.log(seven(times(five()))); // must return 35
console.log(four(plus(nine()))); // must return 13
console.log(four(plus(zero()))); // must return 13
console.log(eight(minus(three()))); // must return 5
console.log(six(divide(two()))); // must return 3
console.log(six(divide(one()))); // must return 3