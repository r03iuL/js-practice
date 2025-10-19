// 🔵 3. Arrays & Methods
// 3.1 push(), pop(), shift(), unshift()
// 3.2 indexOf(), includes()
// 3.3 reverse(), sort(), slice(), join()

let students = ["Rahim", "Karim", "Bilkis", "Jorina", "Kashem"];
console.log(students);

let length = students.length;
console.log("Array length is : " + length);

let last = students[length - 1];
console.log("last in the list is : " + last);
console.log("First in the list is : " + students[0]);

let lastStd = students.pop();
console.log("poped std: " + lastStd);

students.push("Kashem");

students.unshift("Abul");
console.log(" after unshift: ");
console.log(students);

students.shift("Abul");
console.log(" after shift: ");
console.log(students);

let includesJorina = students.includes("Jorina");
console.log(includesJorina);

let jorinaPosition = students.indexOf("Jorina");
console.log(jorinaPosition);

students.sort();
console.log("After Sorting: ");
console.log(students);

students.reverse();
console.log("After reversing: ");
console.log(students);

let first3 = students.slice(0, 3);
console.log("First Three Students :");
console.log(first3);

let stdstring = students.join("|");
console.log("Joined String :");
console.log(stdstring);