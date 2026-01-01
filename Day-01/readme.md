# 🧠 JS Daily Practice – Day 01

📅 **Date:** 01 January 2026
🎯 **Goal:** Daily JavaScript practice for MERN Stack journey
📌 **Focus:** Core JavaScript + Validation + Logical Thinking

---

## ⚠️ General Rules (Must Follow)

- Solve every problem using a **function**.
- **Return** the result (❌ do not use `console.log` for the solution).
- Proper **input validation** is mandatory.
- If input is invalid, return the **specified error message** for that problem.

---

## 🧩 Problem–01: Calculate Discount

**Function Name:** `calculateDiscount()`

Create a function that calculates the final price of a product after applying a discount.

### Input

- `price` → number (product price)
- `discountPercent` → number (0–100)

### Rules

1. If any input is not a number → return `"Invalid Input"`.
2. If any input is negative → return `"Invalid Input"`.
3. If the discount percentage exceeds 100 → return `"Invalid Input"`.

### Output

- Return the final price after applying the discount.

### Example

```js
calculateDiscount(1000, 10); // 900
calculateDiscount(500, 0); // 500
calculateDiscount(200, 50); // 100
calculateDiscount(-100, 10); // "Invalid Input"
calculateDiscount(100, 150); // "Invalid Input"
```

---

## 🧩 Problem–02: Count Even Numbers

**Function Name:** `countEvens()`

Create a function that counts how many even numbers exist in an array.

### Input

- An array containing mixed values

### Rules

1. If input is not an array → return `"Invalid Input"`.
2. Ignore non-number values when counting even numbers.

### Output

- Return the count of even numbers.

### Example

```js
countEvens([1, 2, 3, 4, 6]); // 3
countEvens([10, 15, 20, "a", 30]); // 3
countEvens([]); // 0
countEvens("not an array"); // "Invalid Input"
```

---

## 🧩 Problem–03: Reverse a Valid String

**Function Name:** `reverseString()`

Create a function that reverses a given string.

### Input

- A string

### Rules

1. If input is not a string → return `"Invalid Input"`.

### Output

- Return the reversed string.

### Example

```js
reverseString("Ahsan"); // "nashA"
reverseString("Hello123"); // "321olleH"
reverseString("JavaScript"); // "tpircSavaJ"
reverseString(12345); // "Invalid Input"
```

---

## 🧩 Problem–04: Find Highest Number

**Function Name:** `findMax()`

Create a function that returns the highest number from an array.

### Input

- An array containing numbers (may include non-number values, ignore them)

### Rules

1. If input is not an array → return `"Invalid Input"`.
2. If array is empty or contains no numbers → return `"No Data"`.

### Output

- Return the maximum number found in the array.

### Example

```js
findMax([10, 25, 5, 40]); // 40
findMax([-10, -5, -2]); // -2
findMax([1, "a", null, 3]); // 3
findMax([]); // "No Data"
findMax("not an array"); // "Invalid Input"
```

---

## 🧩 Problem–05: Simple Login Checker

**Function Name:** `loginCheck()`

Create a function that checks user login credentials.

### 🔹 Input

An object:

```js
{ username: "admin", password: "1234" }
```

### 🔹 Rules

1. If username is **"admin"** and password is **"1234"** → return **"Login Successful"**
2. Otherwise → return **"Invalid Credentials"**
3. If input is not an object → return **"Invalid Input"**

### 🔹 Output

- A string based on login validation

### Example

```js
loginCheck({ username: "admin", password: "1234" }); // "Login Successful"
loginCheck({ username: "admin", password: "wrong" }); // "Invalid Credentials"
loginCheck({ username: "user", password: "1234" }); // "Invalid Credentials"
loginCheck("not an object"); // "Invalid Input"
```

---
