# 🧠 JS Daily Practice – Day 09

📅 **Date:** 09 January 2026
🎯 **Goal:** Master complex array + object processing & real-life business logic
📌 **Focus:** Map + Reduce + Filter + Grouping + Sorting + Validation + Edge Case Handling

---

## ⚠️ General Rules (Must Follow)

- Solve every problem using a **function**.
- **Return** the result (❌ `console.log` is not allowed).
- Proper **input validation** is mandatory.
- If input is invalid, return the **specified error message**.

---

## 🧩 Problem–01: Find Top Customer By Total Purchase

**Function Name:** `findTopCustomer()`

You are given an array of orders.

### Input

```js
[
  { customer: "Ahsan", amount: 500 },
  { customer: "Karim", amount: 300 },
  { customer: "Ahsan", amount: 700 },
  { customer: "Rahim", amount: 1000 },
];
```

### Rules

1. If input is not an array → return **"Invalid Input"**.
2. A record is valid if:
   - `customer` is a string
   - `amount` is a number
3. Sum total purchase per customer.
4. Ignore invalid records.
5. Return the **customer name** with highest total purchase.
6. If no valid record → return `""`.

### Output

- Return a **string**.

### Example

```js
findTopCustomer([
  { customer: "Ahsan", amount: 500 },
  { customer: "Karim", amount: 300 },
  { customer: "Ahsan", amount: 700 },
  { customer: "Rahim", amount: 1000 },
]);

// Result: "Ahsan"
// Because: Ahsan total = 1200, Rahim = 1000, Karim = 300
```

---

## 🧩 Problem–02: Generate Product Sales Summary

**Function Name:** `generateSalesSummary()`

You are given an array of sales.

### Input

```js
[
  { name: "Laptop", price: 50000, sold: 2 },
  { name: "Mouse", price: 500, sold: 10 },
  { name: "Laptop", price: 50000, sold: 1 },
];
```

### Rules

1. If input is not an array → return **"Invalid Input"**.
2. A record is valid if:
   - `name` is a string
   - `price` is a number
   - `sold` is a number
3. Group by product name.
4. For each product return:
   - `totalSold`
   - `totalRevenue`
5. Ignore invalid records.
6. Return an object:

```js
{
  Laptop: { totalSold: 3, totalRevenue: 150000 },
  Mouse: { totalSold: 10, totalRevenue: 5000 }
}
```

### Output

- Return an **object**.

### Example

```js
generateSalesSummary([
  { name: "Laptop", price: 50000, sold: 2 },
  { name: "Mouse", price: 500, sold: 10 },
  { name: "Laptop", price: 50000, sold: 1 },
]);

// Result:
// {
//   Laptop: { totalSold: 3, totalRevenue: 150000 },
//   Mouse: { totalSold: 10, totalRevenue: 5000 }
// }
```

---

## 🧩 Problem–03: Find Second Highest Salary

**Function Name:** `findSecondHighestSalary()`

You are given an array of employees.

### Input

```js
[
  { name: "Ahsan", salary: 30000 },
  { name: "Karim", salary: 50000 },
  { name: "Rahim", salary: 40000 },
  { name: "Sabbir", salary: 50000 },
];
```

### Rules

1. If input is not an array → return **"Invalid Input"**.
2. Only consider records where `salary` is a number.
3. Find the **second highest unique salary**.
4. If not possible → return `null`.

### Output

- Return a **number** or **null**.

### Example

```js
findSecondHighestSalary([
  { name: "Ahsan", salary: 30000 },
  { name: "Karim", salary: 50000 },
  { name: "Rahim", salary: 40000 },
  { name: "Sabbir", salary: 50000 },
]);

// Result: 40000
// Because highest salary = 50000, second highest unique = 40000
```

---

## 🧩 Problem–04: Sort Products By Multiple Conditions

**Function Name:** `sortProductsAdvanced()`

You are given an array of products.

### Input

```js
[
  { name: "Laptop", price: 50000, rating: 4.5 },
  { name: "Mouse", price: 500, rating: 4.8 },
  { name: "Keyboard", price: 1500, rating: 4.8 },
];
```

### Rules

1. If input is not an array → return **"Invalid Input"**.
2. Only consider valid records where:
   - `name` is string
   - `price` is number
   - `rating` is number
3. Sort by:
   - First → **rating descending**
   - If rating same → **price ascending**
4. Return the sorted array.

### Output

- Return an **array**.

### Example

```js
sortProductsAdvanced([
  { name: "Laptop", price: 50000, rating: 4.5 },
  { name: "Mouse", price: 500, rating: 4.8 },
  { name: "Keyboard", price: 1500, rating: 4.8 },
]);

// Result:
// [
//   { name: "Mouse", price: 500, rating: 4.8 },
//   { name: "Keyboard", price: 1500, rating: 4.8 },
//   { name: "Laptop", price: 50000, rating: 4.5 }
// ]
```

---

## 🧩 Problem–05: Analyze User Activity

**Function Name:** `analyzeUserActivity()`

You are given an array of logs.

### Input

```js
[
  { user: "Ahsan", action: "login" },
  { user: "Ahsan", action: "logout" },
  { user: "Karim", action: "login" },
  { user: "Ahsan", action: "login" },
];
```

### Rules

1. If input is not an array → return **"Invalid Input"**.
2. A record is valid if:
   - `user` is string
   - `action` is string
3. Count total actions per user.
4. Ignore invalid records.
5. If no valid logs → return `{}`.

### Output

- Return an **object**.

### Example

```js
analyzeUserActivity([
  { user: "Ahsan", action: "login" },
  { user: "Ahsan", action: "logout" },
  { user: "Karim", action: "login" },
  { user: "Ahsan", action: "login" },
]);

// Result:
// {
//   Ahsan: 3,
//   Karim: 1
// }
```

---
