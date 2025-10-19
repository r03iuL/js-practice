// 🟢 1. JavaScript Basics
// 1.1 Number
// 1.2 String
// 1.3 Boolean
// 1.4 Naming Conventions (camelCase, snake_case, etc.)
// 1.5 Type Conversion

const stdName = "Kutub Ali";
var age = 20;
let yearOfbirth = 2001;
let isStudent = true;
let isMarried = false;

let details = "Student's name: " + stdName + ", " + "age: " + age;
console.log(details);

// Type Conversion
console.log(Number(age));  // 20 (string → number)
console.log(String(age));   // "20" (number → string)
console.log(Boolean(age));   // true
console.log(parseInt("45.8"));    // 45
console.log(parseFloat("45.8"));  // 45.8

//Naming Convention
let thisIsCamelCase = "Camel Case naming convetion, commonly used in js .";
let ThisIsPascalCase = "Pascal Case naming convetion, not commonly used in js .";
let this_is_snake_case = "Snake Case naming convetion, not commonly used in js .";

// ✅ JavaScript Variable Naming Rules

// 1️⃣ Must start with a letter, $, or _
let name; // ✅ valid
let $price; // ✅ valid
let _hidden; // ✅ valid
// let 1name;   // ❌ invalid (cannot start with a number)

// 2️⃣ Can only contain letters, numbers, _ or $ (no spaces or special symbols)
let fullName; // ✅ valid
let user_1; // ✅ valid
let user$name; // ✅ valid
// let full name;    // ❌ invalid (no spaces)
// let user-name;    // ❌ invalid (no hyphens)

// 3️⃣ Case-sensitive
let nameVar = "Riju";
let NameVar = "Leo"; // different variable
// console.log(nameVar); // Riju
// console.log(NameVar); // Leo

// 4️⃣ Cannot use reserved keywords
// let let = 5;        // ❌ invalid
// let function = 10;  // ❌ invalid
// let if = 20;        // ❌ invalid
// Reserved keywords: let, const, var, function, if, else, return, while, for, etc.

// 5️⃣ Use meaningful names (best practice)
let x = 5; // ❌ unclear
let numberOfApples = 5; // ✅ clear and meaningful

// 🧠 Naming Conventions (Best Practices)

// 🟡 camelCase → commonly used for variables and functions
let userName = "Riju";
let totalAmount = 100;

// 🔴 snake_case → allowed but not recommended in JS
let user_name = "Riju";

// 🔵 PascalCase → used for class names
class UserProfile {
  constructor(name) {
    this.name = name;
  }
}

// 🟣 SCREAMING_SNAKE_CASE → used for constants
const MAX_SPEED = 120;
