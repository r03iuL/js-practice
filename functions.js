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

// 🧩 Return Values (Basic & Objects) -----------------------------
//
// 0️⃣ A function can return anything: number, string, boolean, null, undefined, object, or another function.
// 1️⃣ Returning a function directly → call it as fn()
// 2️⃣ Returning it inside an object → call it as obj.fn()
// 3️⃣ If you log the function name without parentheses → you’ll see the function body (its reference), not its output.
// 4️⃣ Functions are *first-class values* in JS — they can be stored, passed, and returned like any other data.
// -----------------------------------------------------------

// Returning a simple value
function greet() {
    return "Hello from greet!";
}

console.log(greet()); //  Correct → "Hello from greet!"
console.log(greet); // Wrong → [Function: greet] (you forgot parentheses)

// Function returning an OBJECT-----------------
function calculator() {
    // object with two methods
    return {
        addition: function (a, b) {
            return a + b;
        },
        subtraction: function (a, b) {
            return a - b;
        },
    };
}

//Correct usage
console.log(calculator().addition(25, 20)); // 45

// Wrong usage
console.log(calculator().addition);
// Prints: [Function: addition] because you accessed the function itself, not called it

// Function returning another FUNCTION--------------------
function multiplier() {
    return function (a, b) {
        return a * b;
    };
}

// Correct usage
let resultFn = multiplier(); // returns the inner function
console.log(" 7 times 5 is", resultFn(7, 5)); // 35

//  Wrong usage - Calling outer function twice
console.log(multiplier(7, 5)); // [Function (anonymous)] because multiplier() returns a function, not the result

// Wrong usage — Forgetting to call the returned function
let wrongFn = multiplier;
console.log(wrongFn); // Output: [Function: multiplier] — you got the outer function reference, not its value

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
    console.log("Checking .....");

    numArray.map((num) => {
        if (fn(num)) {
            console.log(num, " is Even");
        } else {
            console.log(num, " is Odd.");
        }
    });
}

evnChecker(numbers, isEven);

// 7.6 Scope & Closures
//scope------------------------------------------
let schoolName = "Scholars Home"; //global scope

function studentProgress(name) {
    let studentName = name;
    let totalMarks = 0; //function scoped
    let totalSubjects = 0;

    function processMark(subject, marks) {
        if (marks) {
            let grade = ""; //bock scoped

            if (marks >= 80) {
                grade = "A";
            } else if (marks >= 60) {
                grade = "B";
            } else {
                grade = "C";
            }

            console.log(`${subject}: ${marks} (${grade})`);
        }

        totalMarks = totalMarks + marks;
        totalSubjects++;
    }

    function showDetails() {
        console.log(`🏫 ${schoolName}`); // accessing GLOBAL scoped variable
        console.log(`👩‍🎓 Student: ${studentName}`); // accessing function scoped variable
        console.log(`📊 Average: ${totalMarks / totalSubjects}`);
    }

    return {
        processMark,
        showDetails,
    };
}

let akibsProgress = studentProgress("Akib");
akibsProgress.processMark("English", 85);
akibsProgress.processMark("Math", 95);
akibsProgress.processMark("Bangla", 65);
akibsProgress.showDetails();

//closer------------------------------
function bankAccount(name) {
    let balance = 2000;
    function deposit(amount) {
        balance += amount;
        console.log(
            `Deposit amount ${amount} successful! ${name}'s account balance is ${balance}`
        );
    }
    function withdraw(amount) {
        balance -= amount;
        console.log(
            `Withdraw amount ${amount} successful! ${name}'s account balance is ${balance}`
        );
    }
    function checkBalance() {
        console.log(`${name}'s account balance is ${balance}`);
    }

    console.log(`Hello ${name}`);

    return {
        deposit,
        withdraw,
        checkBalance,
    };
}

let myAccount = bankAccount("Talha");
myAccount.checkBalance();
myAccount.deposit(2000);
myAccount.withdraw(300);

//HOFs---------------------
// A Higher-Order Function (HOF) is any function that does one or both of these:
// Takes another function as an argument, or
// Returns a function as its result!

function rateLimiter(fn, delay) {
    let lastCall = 0;

    return function (...args) {
        let now = Date.now();
        if (now - lastCall > delay) {
            lastCall = now;
            return fn(...args);
        } else {
            return "Try again after a while .......⌛";
        }
    };
}

function greetUser(userName) {
    return `Hello ${userName}, Welcome !!`;
}
let greetings = rateLimiter(greetUser, 300);
console.log(greetings("Rafid"));
console.log(greetings("Nahid"));

// 7.8 IIFE (Immediately Invoked Function Expressions)
// A function that is defined and executed immediately — as soon as JavaScript reads it.

const app = (function () {
    const appVersion = "1.0.0";
    console.log("App started successfully");

    function getAppVersion() {
        return `The current version of the app is ${appVersion}`;
    }

    return { getAppVersion };
})();

console.log(app.getAppVersion());

//7.9  RECURSION ----------------------------------------------------
//
// 🧠 Definition:
// A recursive function is a function that calls itself
// until it reaches a stopping condition (called the BASE CASE).

function backwardCounter(limit) {
    if (limit <= 0) {
        return;
    }
    console.log(limit);
    backwardCounter(limit - 1);
}

backwardCounter(10);

function factorial(n) {
    if (n === 1) return 1; // base case
    return n * factorial(n - 1); // recursive call
}

console.log("Factorial of 5:", factorial(5));

//7.10 FUNCTION COMPOSITION -----------------------------------------
//
// 🧠 Definition:
// Function Composition means combining two or more functions
// to build a new function — where the output of one becomes the
// input of the next.

function add5(val) {
    return val + 5;
}

function square(val) {
    return val * val;
}

function squreAndAdd5(val) {
    return add5(square(val));
}

console.log(squreAndAdd5(5));

function compositor(x, gn, fn) {
    return fn(gn(x));
}

console.log(compositor(3, add5, square));
console.log(compositor(3, square, add5));

const triple = x => x * 3;
const minus2 = x => x - 2;

function compositorAdv(x, fns) {
    fns.reduce((val, fn) => {
        const newVal = fn(val);
        console.log(`After ${fn.name || "anonymous"}:`, newVal);
        return newVal;
    }, x);
}

compositorAdv(10, [add5, triple, minus2]);
