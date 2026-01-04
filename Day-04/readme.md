# 🧠 JS Daily Practice – Day 04

📅 **Date:** 04 January 2026
🎯 **Goal:** Advance problem-solving & real-world logic
📌 **Focus:** Array + String + Object + Nested Logic

---

## ⚠️ General Rules (Must Follow)

- Solve every problem using a **function**.
- **Return** the result (❌ `console.log` is not allowed).
- Proper **input validation** is mandatory.
- If input is invalid, return the **specified error message**.

---

## 🧩 Problem–01: Find Second Largest Number

**Function Name:** `secondLargest()`

Create a function that returns the **second largest unique number** from an array.

### Input

- An array containing mixed values

### Rules

1. If input is not an array → return **"Invalid Input"**.
2. Ignore non-number values.
3. If fewer than 2 unique numbers exist → return **"Not Applicable"**.

### Output

- Return the second largest number.

### Example

```js
secondLargest([10, 20, 30, 40]); // 30
secondLargest([5, 5, 5]); // "Not Applicable"
secondLargest([1, "a", 2]); // 1
secondLargest("array"); // "Invalid Input"
```

---

## 🧩 Problem–02: Capitalize First Letter of Each Word

**Function Name:** `capitalizeWords()`

Create a function that capitalizes the first letter of each word in a sentence.

### Input

- A string sentence

### Rules

1. If input is not a string → return **"Invalid Input"**.
2. Extra spaces before, after, or between words should be ignored.
3. Only the **first letter** of each word should be capitalized.
4. The rest of the letters should remain unchanged.

### Output

- Return the formatted string.

### Example

```js
capitalizeWords("i love javascript"); // "I Love javascript"
capitalizeWords("   learn   js daily "); // "Learn Js Daily"
capitalizeWords("hello World"); // "Hello World"
capitalizeWords(123); // "Invalid Input"
```

---

## 🧩 Problem–03: Count Occurrences of Each Element

**Function Name:** `countOccurrences()`

Create a function that counts how many times each valid element appears in an array.

### Input

- An array containing numbers or strings

### Rules

1. If input is not an array → return **"Invalid Input"**.
2. Count only **number** and **string** values.
3. Ignore other data types.
4. Return an object where:
   - keys are the elements
   - values are their occurrence counts

### Output

- Return an object containing occurrence counts.

### Example

```js
countOccurrences([1, 2, 2, 3, 1]);
// { 1: 2, 2: 2, 3: 1 }

countOccurrences(["a", "b", "a"]);
// { a: 2, b: 1 }

countOccurrences([1, "a", true, null, "a"]);
// { 1: 1, a: 2 }

countOccurrences("array");
// "Invalid Input"
```

---

## 🧩 Problem–04: Validate Strong Password

**Function Name:** `isStrongPassword()`

Create a function that checks whether a password is strong.

### Input

- A string password

### Rules

1. If input is not a string → return **"Invalid Input"**.
2. Password length must be **at least 8 characters**.
3. Must contain:
   - At least **one uppercase letter**
   - At least **one lowercase letter**
   - At least **one number**
4. Password must **not contain spaces**.

### Output

- Return **true** if the password is strong, otherwise **false**.

### Example

```js
isStrongPassword("Ahsan123"); // true
isStrongPassword("password"); // false
isStrongPassword("A1a"); // false
isStrongPassword("Ahsan 123"); // false
isStrongPassword(12345); // "Invalid Input"
```

---

## 🧩 Problem–05: Group Numbers by Even and Odd

**Function Name:** `groupEvenOdd()`

Create a function that separates numbers into even and odd groups.

### Input

- An array containing mixed values

### Rules

1. If input is not an array → return **"Invalid Input"**.
2. Ignore non-number values.
3. Return an object with two properties:
   - `even` → array of even numbers
   - `odd` → array of odd numbers

### Output

- An object containing grouped numbers.

### Example

```js
groupEvenOdd([1, 2, 3, 4, 5]);
// { even: [2, 4], odd: [1, 3, 5] }

groupEvenOdd([10, "a", 7, null]);
// { even: [10], odd: [7] }

groupEvenOdd([1, 3, 5]);
// { even: [], odd: [1, 3, 5] }

groupEvenOdd("array");
// "Invalid Input"
```

---
