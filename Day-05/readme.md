# 🧠 JS Daily Practice – Day 05

📅 **Date:** 05 January 2026
🎯 **Goal:** Handle real-world data & complex logic
📌 **Focus:** Nested Objects + Real-life Data Processing

---

## ⚠️ General Rules (Must Follow)

- Solve every problem using a **function**.
- **Return** the result (❌ `console.log` is not allowed).
- Proper **input validation** is mandatory.
- If input is invalid, return the **specified error message**.

---

## 🧩 Problem–01: Total Price from Cart Items

**Function Name:** `calculateTotalPrice()`

You are given a shopping cart containing multiple items.

### Input

An array of objects:

```js
[
  { name: "Laptop", price: 50000, quantity: 1 },
  { name: "Mouse", price: 500, quantity: 2 },
];
```

### Rules

1. If input is not an array → return **"Invalid Input"**.
2. Each item must have valid:
   - `price` → number
   - `quantity` → number
3. Ignore items with invalid or missing data.
4. If no valid items exist → return **0**.

### Output

- Return the total price calculated as:
  **price × quantity** for each valid item.

### Example

```js
calculateTotalPrice([
  { name: "Laptop", price: 50000, quantity: 1 },
  { name: "Mouse", price: 500, quantity: 2 },
]); // 51000

calculateTotalPrice([{ name: "Pen", price: "10", quantity: 2 }]); // 0

calculateTotalPrice("cart"); // "Invalid Input"
```

---

## 🧩 Problem–02: Find Most Frequent Word

**Function Name:** `mostFrequentWord()`

Create a function that finds the most frequently occurring word in a sentence.

### Input

- A string sentence

### Rules

1. If input is not a string → return **"Invalid Input"**.
2. Ignore punctuation.
3. Case insensitive (`"JS"` and `"js"` are treated the same).
4. If multiple words have the same highest frequency, return the **first one**.
5. If the sentence is empty → return `""`.

### Output

- Return the most frequent word.

### Example

```js
mostFrequentWord("I love JS and I love coding"); // "i"
mostFrequentWord("Hello hello world"); // "hello"
mostFrequentWord(""); // ""
mostFrequentWord(123); // "Invalid Input"
```

---

## 🧩 Problem–03: Validate User Object

**Function Name:** `validateUser()`

Create a function that validates a user object.

### Input

An object:

```js
{
  name: "Ahsan",
  email: "ahsan@gmail.com",
  age: 22
}
```

### Rules

1. If input is not an object → return **"Invalid Input"**.
2. `name` must be a non-empty string.
3. `email` must contain `@` and `.`.
4. `age` must be a number and `18` or older.

### Output

- Return **"Valid User"** if all conditions pass.
- Otherwise return **"Invalid User"**.

### Example

```js
validateUser({ name: "Ahsan", email: "ahsan@gmail.com", age: 22 });
// "Valid User"

validateUser({ name: "", email: "test@gmail.com", age: 20 });
// "Invalid User"

validateUser("user");
// "Invalid Input"
```

---

## 🧩 Problem–04: Group Students by Grade

**Function Name:** `groupByGrade()`

You are given an array of student objects.

### Input

```js
[
  { name: "A", score: 85 },
  { name: "B", score: 72 },
  { name: "C", score: 40 },
];
```

### Rules

1. If input is not an array → return **"Invalid Input"**.
2. Ignore students with invalid or missing `score`.
3. Grade rules:
   - **A** → score ≥ 80
   - **B** → score between 60 and 79
   - **F** → score < 60
4. Return an object grouped by grade.
5. If no valid students exist → return `{}`.

### Output

- Return an object where:
  - keys are grades (`A`, `B`, `F`)
  - values are arrays of student names

### Example

```js
groupByGrade([
  { name: "A", score: 85 },
  { name: "B", score: 72 },
  { name: "C", score: 40 },
]);

// {
//   A: ["A"],
//   B: ["B"],
//   F: ["C"]
// }
```

---

## 🧩 Problem–05: Validate User Profile Data

**Function Name:** `validateUserProfile()`

You are given a user profile object.

### Input

```js
{
  name: "Ahsan",
  email: "ahsan@gmail.com",
  age: 22
}
```

### Rules

1. If input is not an object → return **"Invalid Input"**.
2. The object must contain:
   - `name` → string, minimum 3 characters
   - `email` → string, must include `@` and `.`
   - `age` → number, must be 18 or greater
3. Ignore extra properties.
4. If any required field is invalid → return **false**.
5. If all required fields are valid → return **true**.

### Output

- Return **true** if profile is valid, otherwise **false**.

### Example

```js
validateUserProfile({
  name: "Ahsan",
  email: "ahsan@gmail.com",
  age: 22,
}); // true

validateUserProfile({
  name: "Al",
  email: "algmail.com",
  age: 16,
}); // false

validateUserProfile("user"); // "Invalid Input"
```

---
