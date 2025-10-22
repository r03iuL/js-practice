// ⚪ 8. Math Object
// 1. abs()   → always positive
// 2. round() → nearest whole number
// 3. floor() → round down
// 4. ceil()  → round up
// 5. min(), max() → find smallest/largest
// 6. random() → random decimal 0–1 (can scale to range)
// 7. pow()   → base^exponent
// 8. sqrt()  → square root
// 9. trunc() → remove decimals
// 10. sign()  → sign of number (-1, 0, or 1)


// Math.abs(x) → returns the absolute (positive) value
console.log(Math.abs(-10)); // 10
console.log(Math.abs(5)); // 5

// Math.round(x) → rounds to the nearest integer
console.log(Math.round(4.2)); // 4
console.log(Math.round(4.6)); // 5

// Math.floor(x) → always rounds DOWN
console.log(Math.floor(4.9)); // 4
console.log(Math.floor(-4.3)); // -5

// Math.ceil(x) → always rounds UP
console.log(Math.ceil(4.1)); // 5
console.log(Math.ceil(-4.7)); // -4

// Math.min(...numbers) → smallest number
console.log(Math.min(5, 10, 2, -3)); // -3

// Math.max(...numbers) → largest number
console.log(Math.max(5, 10, 2, -3)); // 10

// Can combine with arrays using the spread operator:
let nums = [3, 7, 2, 9, 1];
console.log(Math.min(...nums)); // 1
console.log(Math.max(...nums)); // 9

// Math.random() → returns a random decimal between 0 (inclusive) and 1 (exclusive)
console.log(Math.random()); // e.g., 0.735981723

// Get random integer between 0 and 9
console.log(Math.floor(Math.random() * 10));

// Get random integer between 1 and 10
console.log(Math.floor(Math.random() * 10) + 1);

function getRandom(a, b) {
    let range = b - a + 1;
    return Math.floor(Math.random()*range)+a;
}

console.log("A random value between 20-70",getRandom(20,70));

// pow()   → base^exponent
// Raises a number (base) to the power of another (exponent).
// Example:
console.log(Math.pow(2, 3));   // 8  → 2 × 2 × 2
console.log(Math.pow(5, 2));   // 25 → 5 × 5
console.log(Math.pow(10, 0));  // 1  → any number to the power of 0 equals 1


// sqrt()  → square root
// Returns the square root of a number.
// Example:
console.log(Math.sqrt(25));    // 5
console.log(Math.sqrt(81));    // 9
console.log(Math.sqrt(2));     // 1.414...
// If a negative number is given, the result is NaN (not a number)
console.log(Math.sqrt(-9));    // NaN


// trunc() → remove decimals
// Removes the fractional (decimal) part of a number without rounding.
// Example:
console.log(Math.trunc(4.987));   // 4
console.log(Math.trunc(-7.56));   // -7
console.log(Math.trunc(0.999));   // 0


// sign()  → sign of number (-1, 0, or 1)
// Returns:
//  1  if the number is positive
// -1  if the number is negative
//  0  if the number is zero
// -0  if the number is negative zero
// Example:
console.log(Math.sign(10));    // 1
console.log(Math.sign(-5));    // -1
console.log(Math.sign(0));     // 0
console.log(Math.sign(-0));    // -0
