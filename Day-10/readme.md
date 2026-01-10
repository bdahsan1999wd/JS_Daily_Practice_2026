# 🧠 JS Daily Practice – Day 10

📅 Date: 10 January 2026
🎯 Goal: Advanced logic, system thinking & multi-step processing
📌 Focus: Validation + State Logic + Aggregation + Simulation + Decision Rules

---

## ⚠️ General Rules (Must Follow)

- Solve every problem using a **function**.
- **Return** the result (❌ `console.log` is not allowed).
- Proper **input validation** is mandatory.
- If input is invalid, return the **specified error message**.

---

## 🧩 Problem–01: Process Bank Transactions

**Function Name:** `processTransactions()`

You are given an initial balance and a list of transactions.

### Input

```js
processTransactions(1000, [
  { type: "deposit", amount: 500 },
  { type: "withdraw", amount: 300 },
  { type: "withdraw", amount: 1500 },
  { type: "deposit", amount: 200 },
]);
```

### Rules

- If balance is not a number or transactions is not an array → return **"Invalid Input"**.
- A transaction is valid if:
  - `type` is `"deposit"` or `"withdraw"`
  - `amount` is a positive number
- Withdraw cannot exceed current balance → ignore that transaction.
- Process transactions one by one in order.
- Return an object:

```js
{
  finalBalance: number,
  successCount: number,
  failedCount: number
}
```

### Output

- Return an **object**.

### Example

```js
// Result:
{
  finalBalance: 1400,
  successCount: 3,
  failedCount: 1
}
```

---

## 🧩 Problem–02: Seat Booking System

**Function Name:** `validateSeatBookings()`

You are given total seats and booking requests.

### Input

```js
validateSeatBookings(5, [
  { user: "Ahsan", seats: 2 },
  { user: "Karim", seats: 3 },
  { user: "Rahim", seats: 1 },
]);
```

### Rules

- If totalSeats is not a number or bookings is not an array → return **"Invalid Input"**.
- A booking is valid if:
  - `user` is a string
  - `seats` is a positive number
- Process bookings in order.
- If not enough seats left → reject that booking.
- Return:

```js
{
  accepted: string[],
  rejected: string[],
  remainingSeats: number
}
```

### Output

- Return an **object**.

### Example

```js
// Result:
{
  accepted: ["Ahsan", "Karim"],
  rejected: ["Rahim"],
  remainingSeats: 0
}
```

---

## 🧩 Problem–03: Exam Result Analyzer

**Function Name:** `processExamResults()`

You are given an array of students.

### Input

```js
[
  { name: "Ahsan", marks: [80, 70, 90] },
  { name: "Karim", marks: [30, 35, 40] },
  { name: "Rahim", marks: [60, 65, 70] },
];
```

### Rules

- If input is not an array → return **"Invalid Input"**.
- A record is valid if:
  - `name` is a string
  - `marks` is an array of numbers
- A student **fails** if any subject mark < 40.
- Otherwise calculate average:
  - avg ≥ 80 → `"Merit"`
  - avg ≥ 60 → `"Pass"`
  - else → `"Low Pass"`
- Return an object where key = student name, value = result.

### Output

- Return an **object**.

### Example

```js
// Result:
{
  Ahsan: "Merit",
  Karim: "Fail",
  Rahim: "Pass"
}
```

---

## 🧩 Problem–04: Traffic Signal Analyzer

**Function Name:** `simulateTraffic()`

You are given an array of traffic signals.

### Input

```js
[
  { color: "green", seconds: 30 },
  { color: "yellow", seconds: 5 },
  { color: "red", seconds: 40 },
];
```

### Rules

- If input is not an array → return **"Invalid Input"**.
- A record is valid if:
  - `color` is `"green"`, `"yellow"` or `"red"`
  - `seconds` is a positive number
- Calculate:
  - `totalTime`
  - `greenTime`
  - `redTime`
- Ignore invalid records.
- Return an object:

```js
{
  totalTime: number,
  greenTime: number,
  redTime: number
}
```

### Output

- Return an **object**.

### Example

```js
// Result:
{
  totalTime: 75,
  greenTime: 30,
  redTime: 40
}
```

---

## 🧩 Problem–05: Shopping Cart Price Engine

**Function Name:** `processCart()`

You are given a cart and a coupon code.

### Input

```js
processCart(
  [
    { name: "Laptop", price: 50000 },
    { name: "Mouse", price: 500 },
  ],
  "DISCOUNT10"
);
```

### Rules

- If cart is not an array → return **"Invalid Input"**.
- A cart item is valid if:
  - `name` is a string
  - `price` is a number
- Coupon rules:
  - `"DISCOUNT10"` → 10% off total
  - `"FLAT500"` → 500 off if total ≥ 2000
- Return an object:

```js
{
  total: number,
  discount: number,
  payable: number
}
```

### Output

- Return an **object**.

### Example

```js
// Result:
{
  total: 50500,
  discount: 5050,
  payable: 45450
}
```

---
