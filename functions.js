// 🟤 7. Functions
// 7.1 Parameters & Default Values
// 7.2 Return Values (Basic & Objects)
// 7.3 Callback Functions
// 7.4 Function Expressions
// 7.5 Arrow Functions
// 7.6 Scope & Closures
// 7.7 Higher-Order Functions (HOFs)
// 7.8 IIFE (Immediately Invoked Function Expressions)
// 7.9 Recursion
// 7.10 Function Composition

function add(a, b) {
  return a + b;
}

let res = add(10, 20);
console.log(res); //30

function calculate(fn, ...args) {
  return fn(...args);
}

console.log(calculate(add, 15, 20)); //35


//Return Values (Basic & Objects)-----------------------------
//functions can return number , string ,boolean , null ,undefined etc

//fuction can return object
function claculator() {
  return {
    addition: function (a, b) {
      return a + b;
    },

    substraction: function (a, b) {
      return a - b;
    },
  };
}

console.log(claculator().addition(25, 20)); //45

//fuction can return function
function multiplier() {
  return function (a, b) {
    return a * b;
  };
}

let result = multiplier();
console.log("7 Times 5 is  ", result(7, 5));

