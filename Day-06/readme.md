# 🧠 JS Daily Practice – Day 06

📅 **Date:** 06 January 2026
🎯 **Goal:** Master array logic & object processing
📌 **Focus:** Filtering + Mapping + Validation + Data Aggregation

---

## ⚠️ General Rules (Must Follow)

- Solve every problem using a **function**.
- **Return** the result (❌ `console.log` is not allowed).
- Proper **input validation** is mandatory.
- If input is invalid, return the **specified error message**.

---

## 🧩 Problem–01: Count Valid Products

**Function Name:** `countValidProducts()`

You are given a product list.

### Input

An array of objects:

```js
[
  { name: "Laptop", price: 50000 },
  { name: "Mouse", price: 500 },
  { name: "Pen", price: "10" },
];
```

### Rules

1. If input is not an array → return **"Invalid Input"**.
2. A product is valid if:
   - `name` is a string
   - `price` is a number
3. Count only valid products.
4. If no valid products → return **0**.

### Output

- Return the number of valid products.

### Example

```js
countValidProducts([
  { name: "Laptop", price: 50000 },
  { name: "Mouse", price: 500 },
  { name: "Pen", price: "10" },
]); // 2

countValidProducts("products"); // "Invalid Input"
```

---

## 🧩 Problem–02: Get Names Above Age

**Function Name:** `getNamesAboveAge()`

You are given an array of people.

### Input

```js
[
  { name: "Ahsan", age: 22 },
  { name: "Rahim", age: 17 },
  { name: "Karim", age: 25 },
];
```

### Rules

1. If input is not an array → return **"Invalid Input"**.
2. Ignore invalid objects.
3. Return names of people whose age is **18 or above**.
4. If none found → return `[]`.

### Output

- Return an array of names.

### Example

```js
getNamesAboveAge([
  { name: "Ahsan", age: 22 },
  { name: "Rahim", age: 17 },
  { name: "Karim", age: 25 },
]); // ["Ahsan", "Karim"]
```

---

## 🧩 Problem–03: Find Highest Paid Employee

**Function Name:** `highestPaidEmployee()`

You are given an array of employees.

### Input

```js
[
  { name: "A", salary: 20000 },
  { name: "B", salary: 50000 },
  { name: "C", salary: 30000 },
];
```

### Rules

1. If input is not an array → return **"Invalid Input"**.
2. Ignore invalid salary values.
3. Return the **name** of the employee with highest salary.
4. If no valid employee → return `""`.

### Output

- Return a string (employee name).

### Example

```js
highestPaidEmployee([
  { name: "A", salary: 20000 },
  { name: "B", salary: 50000 },
  { name: "C", salary: 30000 },
]); // "B"
```

---

## 🧩 Problem–04: Calculate Average Score

**Function Name:** `averageScore()`

You are given an array of student objects.

### Input

```js
[
  { name: "A", score: 80 },
  { name: "B", score: 70 },
  { name: "C", score: 90 },
];
```

### Rules

1. If input is not an array → return **"Invalid Input"**.
2. Ignore invalid score values.
3. Calculate the average of valid scores.
4. If no valid scores → return **0**.

### Output

- Return the average score (number).

### Example

```js
averageScore([
  { name: "A", score: 80 },
  { name: "B", score: 70 },
  { name: "C", score: 90 },
]); // 80
```

---

## 🧩 Problem–05: Extract Valid Emails

**Function Name:** `extractValidEmails()`

You are given an array of user objects.

### Input

```js
[
  { name: "Ahsan", email: "ahsan@gmail.com" },
  { name: "Test", email: "testgmail.com" },
  { name: "Karim", email: "karim@yahoo.com" },
];
```

### Rules

1. If input is not an array → return **"Invalid Input"**.
2. A valid email must:
   - be a string
   - include `@` and `.`
3. Return only valid emails.
4. If none valid → return `[]`.

### Output

- Return an array of email strings.

### Example

```js
extractValidEmails([
  { name: "Ahsan", email: "ahsan@gmail.com" },
  { name: "Test", email: "testgmail.com" },
  { name: "Karim", email: "karim@yahoo.com" },
]); // ["ahsan@gmail.com", "karim@yahoo.com"]
```

---
