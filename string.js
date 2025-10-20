// 🟣 5. String Methods (Immutable)
// 5.1 toUpperCase(), toLowerCase()
// 5.2 slice()
// 5.3 includes()
// 5.4 split(), join()
// 5.5 reverse (via split().reverse().join())

let str = "DhaKa";

let uprCase = str.toUpperCase();
console.log(uprCase);

let lowerCase = str.toLowerCase();
console.log(lowerCase);

//Slice------------------------
let str2 = "I love JavaScript";
let word = str2.slice(2, 7);
console.log(word); //love

let lang = str2.slice(-10);
console.log(lang); //Javascript

//includes-----------------------

let sentence = "Hello World";

console.log(sentence.includes("world")); //false
console.log(sentence.includes("World")); //true
console.log(sentence.includes("Hello", 5)); //false

//split-------------------------------
//It cuts a string into smaller pieces (array elements) based on a separator you choose.

let newWord = "Metamorphosis";

console.log(newWord.split("")); //[ 'M', 'e', 't', 'a', 'm', 'o', 'r', 'p', 'h', 'o', 's', 'i', 's' ]

let data = "apple,banana,grape";
console.log(data.split(",")); // ["apple", "banana", "grape"]

//Join-----------------------------------------
let parts = ["JavaScript", "is", "fun"];
console.log(parts.join(" ")); //JavaScript is fun

let date = "10-07-25";
console.log(date.split("-").join("/")); //10/07/25

//reverse string
let newSentance = "I love JavaScript";
let reversed = newSentance.split("").reverse().join("");
console.log(reversed);//tpircSavaJ evol I
