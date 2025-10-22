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

//function can return object
function calculator() {
    return {
        addition: function (a, b) {
            return a + b;
        },

        subtraction: function (a, b) {
            return a - b;
        },
    };
}

console.log(calculator().addition(25, 20)); //45

//function can return function
function multiplier() {
    return function (a, b) {
        return a * b;
    };
}

let result = multiplier();
console.log("7 Times 5 is  ", result(7, 5));

//callback function----------------------------

function greet(name) {
    console.log("Hello " + name + " ,welcome!");
}

function inputProcessor(input, fn) {
    fn(input);
}
inputProcessor("Rakib", greet);

function showMessage() {
    console.log(" DownLoad Successful!");
}

function download(fn) {
    console.log("Downloading .......");

    setTimeout(() => {
        fn();
    }, 2000);
}

download(showMessage);

//function expression

let multiply = function (a, b) {
    return a * b;
};

console.log(multiply(10, 345));

//arrow function

let arrowAdd = (a, b) => a + b;

console.log(arrowAdd(334, 443));

let isEven = (num) => num % 2 == 0;

console.log(isEven(23947));

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9.1];

function evnChecker(numArray, fn) {
    console.log("Checkcing .....");

    numArray.map((num) => {
        if (fn(num)) {
            console.log(num, " is Even");
        } else {
            console.log(num, " is Odd.");
        }
    });
}

evnChecker(numbers, isEven);
