// 🟡 2. Conditionals
// 2.1 Comparison Operators (==, ===, >, <, etc.)
// 2.2 If-Else Ladder
// 2.3 Ternary Operator
// 2.4 Switch Case

let num1 = 20;
let num2 = 30;
let num3 = 27;

if (num1 > num2) {
  console.log("num1 is the greater number");
} else {
  console.log("num2 is the greater number");
}

if (num1 > num2 && num1 > num3) {
  console.log("num1 is the greatest number");
} else if (num2 > num1 && num2 > num3) {
  console.log("num2 is the greatest number");
} else {
  console.log("num3 is the greatest number");
}

let name = "Eli";
let age = 20;
let marksInMath = 60;

switch (true) {
  case marksInMath >= 80:
    console.log(`${name} got A+ in math`);
    break;
  case marksInMath >= 70:
    console.log(`${name} got A in math`);
    break;
  case marksInMath >= 60:
    console.log(`${name} got A- in math`);
    break;
  case marksInMath >= 50:
    console.log(`${name} got B in math`);
    break;
  case marksInMath >= 40:
    console.log(`${name} got C in math`);
    break;
  case marksInMath >= 33:
    console.log(`${name} got D in math`);
    break;

  default:
    console.log(`${name} failed in math`);
    break;
}

//ternary operator
age >= 18 ? console.log(name + " can vote!") : console.log(name + " can't vote!");
