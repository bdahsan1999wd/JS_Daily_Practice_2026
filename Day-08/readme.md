# 🧠 JS Daily Practice – Day 08

📅 **Date:** 08 January 2026
🎯 **Goal:** Solve interview-level real-world data processing problems
📌 **Focus:** Reduce + Grouping + Frequency + Deduplication + Validation + Edge Case Handling

---

## ⚠️ General Rules (Must Follow)

- Solve every problem using a **function**.
- **Return** the result (❌ `console.log` is not allowed).
- Proper **input validation** is mandatory.
- If input is invalid, return the **specified error message**.

---

## 🧩 Problem–01: Find Best Selling Product

**Function Name:** `findBestSellingProduct()`

You are given an array of sales records.

### Input

```js
[
  { name: "Laptop", price: 50000, sold: 3 },
  { name: "Mouse", price: 500, sold: 50 },
  { name: "Keyboard", price: 1500, sold: 10 },
];
```

### Rules

1. If input is not an array → return **"Invalid Input"**.
2. A record is valid if:
   - `name` is a string
   - `price` is a number
   - `sold` is a number
3. Calculate total revenue using: `price × sold`.
4. Ignore invalid records.
5. Return the **name** of the product with the highest revenue.
6. If no valid record → return `""`.

### Output

- Return a **string**.

### Example

```js
findBestSellingProduct([
  { name: "Laptop", price: 50000, sold: 3 },
  { name: "Mouse", price: 500, sold: 50 },
  { name: "Keyboard", price: 1500, sold: 10 },
]); // "Mouse"
```

---

## 🧩 Problem–02: Group Users By Age Range

**Function Name:** `groupUsersByAgeRange()`

You are given an array of users.

### Input

```js
[
  { name: "Ahsan", age: 23 },
  { name: "Karim", age: 17 },
  { name: "Rahim", age: 35 },
  { name: "Sabbir", age: 65 },
];
```

### Rules

1. If input is not an array → return **"Invalid Input"**.
2. Only consider users whose `age` is a number.
3. Group users into:
   - **"child"** → age < 18
   - **"adult"** → age 18–59
   - **"senior"** → age ≥ 60
4. Ignore users with invalid age.
5. Return an object:

```js
{
  child: [...],
  adult: [...],
  senior: [...]
}
```

If no valid users → return:

```js
{ child: [], adult: [], senior: [] }
```

### Output

- Return an **object**.

### Example

```js
groupUsersByAgeRange([
  { name: "Ahsan", age: 23 },
  { name: "Karim", age: 17 },
  { name: "Rahim", age: 35 },
  { name: "Sabbir", age: 65 },
]);
```

---

## 🧩 Problem–03: Remove Duplicate Products (By Name)

**Function Name:** `removeDuplicateProducts()`

You are given an array of products.

### Input

```js
[
  { name: "Laptop", price: 50000 },
  { name: "Mouse", price: 500 },
  { name: "Laptop", price: 48000 },
];
```

### Rules

1. If input is not an array → return **"Invalid Input"**.
2. Only consider items whose `name` is a string.
3. Remove duplicates by **product name**.
4. Keep the **first occurrence**.
5. Ignore invalid items.
6. If no valid product → return `[]`.

### Output

- Return an **array of objects**.

### Example

```js
removeDuplicateProducts([
  { name: "Laptop", price: 50000 },
  { name: "Mouse", price: 500 },
  { name: "Laptop", price: 48000 },
]);
```

---

## 🧩 Problem–04: Validate Order & Calculate Total

**Function Name:** `validateAndCalculateOrder()`

You are given an array of order items.

### Input

```js
[
  { name: "Laptop", price: 50000, quantity: 1 },
  { name: "Mouse", price: 500, quantity: 2 },
  { name: "Keyboard", price: "1500", quantity: 1 },
];
```

### Rules

1. If input is not an array → return **"Invalid Input"**.
2. An item is valid if:
   - `name` is a string
   - `price` is a number
   - `quantity` is a number
3. Ignore invalid items.
4. Calculate total using: `price × quantity`.
5. Return an object:

```js
{
  total: 51000,
  validItems: 2,
  invalidItems: 1
}
```

If no valid items → return:

```js
{
  total: 0,
  validItems: 0,
  invalidItems: array.length
}
```

### Output

- Return an **object**.

### Example

```js
validateAndCalculateOrder([
  { name: "Laptop", price: 50000, quantity: 1 },
  { name: "Mouse", price: 500, quantity: 2 },
  { name: "Keyboard", price: "1500", quantity: 1 },
]);
```

---

## 🧩 Problem–05: Find Most Frequent Product

**Function Name:** `findMostFrequentProduct()`

You are given an array of sold product names.

### Input

```js
["Laptop", "Mouse", "Mouse", "Keyboard", "Mouse", "Laptop"];
```

### Rules

1. If input is not an array → return **"Invalid Input"**.
2. Only count values that are **strings**.
3. Count the frequency of each product name.
4. Return the product name which appears **most frequently**.
5. If there is a tie, return **any one** of them.
6. If no valid string found → return `""`.

### Output

- Return a **string**.

### Example

```js
findMostFrequentProduct([
  "Laptop",
  "Mouse",
  "Mouse",
  "Keyboard",
  "Mouse",
  "Laptop",
]); // "Mouse"
```

---
