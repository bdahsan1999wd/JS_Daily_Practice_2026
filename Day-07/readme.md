# 🧠 JS Daily Practice – Day 07

📅 **Date:** 07 January 2026
🎯 **Goal:** Improve real-world data processing logic
📌 **Focus:** Search + Filter + Reduce + Validation + Object Analysis

---

## ⚠️ General Rules (Must Follow)

- Solve every problem using a **function**.
- **Return** the result (❌ `console.log` is not allowed).
- Proper **input validation** is mandatory.
- If input is invalid, return the **specified error message**.

---

## 🧩 Problem–01: Find Cheapest Product

**Function Name:** `findCheapestProduct()`

You are given an array of products.

### Input

```js
[
  { name: "Laptop", price: 50000 },
  { name: "Mouse", price: 500 },
  { name: "Keyboard", price: 1500 },
];
```

### Rules

1. If input is not an array → return **"Invalid Input"**.
2. Ignore invalid price values.
3. Return the **name** of the cheapest product.
4. If no valid product → return `""`.

### Output

- Return a string (product name).

### Example

```js
findCheapestProduct([
  { name: "Laptop", price: 50000 },
  { name: "Mouse", price: 500 },
  { name: "Keyboard", price: 1500 },
]); // "Mouse"
```

---

## 🧩 Problem–02: Calculate Total Cart Price

**Function Name:** `calculateCartTotal()`

You are given a shopping cart containing multiple products.

### Input

```js
[
  { name: "Laptop", price: 50000, quantity: 1 },
  { name: "Mouse", price: 500, quantity: 2 },
  { name: "Keyboard", price: 1500, quantity: 1 },
];
```

### Rules

1. If input is not an array → return **"Invalid Input"**.
2. Each item must have:
   - `price` → number
   - `quantity` → number
3. Ignore items with invalid `price` or `quantity`.
4. Calculate total as: `price × quantity`.
5. If no valid items → return **0**.

### Output

- Return the total cart price (number).

### Example

```js
calculateCartTotal([
  { name: "Laptop", price: 50000, quantity: 1 },
  { name: "Mouse", price: 500, quantity: 2 },
  { name: "Keyboard", price: 1500, quantity: 1 },
]); // 52500

calculateCartTotal("cart"); // "Invalid Input"
```

---

## 🧩 Problem–03: Find Most Expensive Product

**Function Name:** `findMostExpensiveProduct()`

You are given an array of products.

### Input

```js
[
  { name: "Laptop", price: 50000 },
  { name: "Phone", price: 30000 },
  { name: "Monitor", price: 15000 },
];
```

### Rules

1. If input is not an array → return **"Invalid Input"**.
2. Ignore invalid price values.
3. Return the **name** of the most expensive product.
4. If no valid product → return `""`.

### Output

- Return a string (product name).

### Example

```js
findMostExpensiveProduct([
  { name: "Laptop", price: 50000 },
  { name: "Phone", price: 30000 },
  { name: "Monitor", price: 15000 },
]); // "Laptop"
```

---

## 🧩 Problem–04: Count Out of Stock Items

**Function Name:** `countOutOfStockItems()`

You are given an array of products.

### Input

```js
[
  { name: "Laptop", stock: 10 },
  { name: "Mouse", stock: 0 },
  { name: "Keyboard", stock: 0 },
  { name: "Monitor", stock: 5 },
];
```

### Rules

1. If input is not an array → return **"Invalid Input"**.
2. A product is **out of stock** if `stock` is a number and equals 0.
3. Ignore invalid stock values.
4. Count only out of stock items.
5. If none found → return 0.

### Output

- Return the count (number).

### Example

```js
countOutOfStockItems([
  { name: "Laptop", stock: 10 },
  { name: "Mouse", stock: 0 },
  { name: "Keyboard", stock: 0 },
  { name: "Monitor", stock: 5 },
]); // 2
```

---

## 🧩 Problem–05: Extract Phone Numbers

**Function Name:** `extractPhoneNumbers()`

You are given an array of users.

### Input

```js
[
  { name: "Ahsan", phone: "01712345678" },
  { name: "Test", phone: 12345 },
  { name: "Karim", phone: "01987654321" },
];
```

### Rules

1. If input is not an array → return **"Invalid Input"**.
2. A valid phone number must:
   - be a string
   - length must be exactly 11
3. Return only valid phone numbers.
4. If none valid → return `[]`.

### Output

- Return an array of strings.

### Example

```js
extractPhoneNumbers([
  { name: "Ahsan", phone: "01712345678" },
  { name: "Test", phone: 12345 },
  { name: "Karim", phone: "01987654321" },
]); // ["01712345678", "01987654321"]
```

---
