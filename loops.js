// 🟠 4. Loops
// 4.1 For Loop
// 4.2 While Loop
// 4.3 Do While Loop
// 4.4 For-In Loop
// 4.5 For-Of Loop
// 4.6 forEach Method

// 🧾 When to Use Which Loop?
// ------------------------------------------
// for        → Fixed number of iterations (best for arrays with index)
// while      → Unknown end point (keep looping until condition false)
// do...while → Run code at least once, then check condition
// for...in   → Loop through object keys/properties
// for...of   → Loop through array or string values
// forEach()  → Run a function for each array element (cleaner syntax)

//for

let students = ["Rahim", "Shkail", "Rafi", "Rabbi"];

for (let i = 0; i < students.length; i++) {
  console.log(`Our number ${i + 1} student is: ${students[i]}`);
}

//while

let num = 50,
  j = 0;

while (j <= num) {
  if (j % 5 == 0) {
    console.log(j);
  }
  j++;
}

//do while

let passInput = "Abc",
  k = 0,
  rightPass = false;

do {
  if (passInput === "Abcd1") {
    console.log("Login SucessFull!");
    rightPass = true;
  } else {
    console.log("Try Again !");
  }
  k++;
} while (!rightPass && k <= 2);

//for in

let inventory = { apples: 10, oranges: 5, bananas: 8 };

for (const fruit in inventory) {
  console.log("There are " + inventory[fruit] + " " + fruit + " in Invwentory");
}

//for of

let str = "Hello World , I am Rakib !";
let reversedStr = "";

for (const letter of str) {
  reversedStr = letter + reversedStr;
}

console.log(reversedStr);

//for each

let marksOutOf150 = [80, 70, 37, 120, 133, 145, 99];

marksOutOf150.forEach((mark, index) => {
  let percentage = (mark / 150) * 100;
  console.log(
    `Student no ${index + 1} got ${parseInt(percentage)} % marks out of 150.`
  );
});
