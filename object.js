// 🔴 6. Object Methods
// 6.1 Access & Update Properties
// 6.2 Add/Delete Keys
// 6.3 Object.keys(), Object.values()
// 6.4 Nested Objects

// Access & Update Properties

let user = {
  name: "Fahad Rakin",
  id: 213054,
  address: "Dhaka,Bangladesh",
};

console.log(user.name); //Fahad Rakin
console.log(user["id"]); //213054

user.id = 1111111;

console.log(user["id"]); //1111111

// Add/Delete Keys

user.hobby = "coding";
console.log(user.hobby); //coding

delete user.hobby;
console.log(user);

// Object.keys(), Object.values()
//Extract all keys or values from an object as arrays.

console.log(Object.keys(user));
console.log(Object.values(user));
let keys = Object.keys(user);
let values = Object.values(user);

for (let i = 0; i < keys.length; i++) {
  console.log(keys[i] + ": " + values[i]);
} // name: Fahad Rakin
// id: 111111
// address: Dhaka,Bangladesh

//nested objects

let student = {
  name: "Seraya",
  marks: {
    math: 85,
    english: 92,
    science: 88,
  },
};

console.log(student.marks); //{ math: 85, english: 92, science: 88 }
