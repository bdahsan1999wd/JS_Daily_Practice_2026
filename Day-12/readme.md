# 🧠 JS Daily Practice – Day 12

📅 **Date:** 12 January 2026
🎯 **Goal:** Business logic simulation & backend-style systems
📌 **Focus:** Validation + State Update + Sequential Processing + Rule Engine

---

## ⚠️ General Rules (Must Follow)

- Solve every problem using a **function**.
- **Return** the result (❌ `console.log` is not allowed).
- Proper **input validation** is mandatory.
- If input is invalid → return **"Invalid Input"**.

---

## 🧩 Problem–01: Mobile Recharge System

**Function Name:** `processRecharges()`

You are given total balance and recharge requests.

### Input

```js
processRecharges(100, [
  { user: "Ahsan", amount: 30 },
  { user: "Karim", amount: 50 },
  { user: "Rahim", amount: 40 },
]);
```

### Rules

- If `totalBalance` is not a number or `requests` is not an array → return **"Invalid Input"**.
- A request is valid if:
  - `user` is string
  - `amount` is a positive number
- Process requests one by one in order.
- If not enough balance → reject that request.
- Return an object:

```js
{
  successful: string[],
  failed: string[],
  remainingBalance: number
}
```

### Output

- Return an **object**.

### Example

```js
// Result:
{
  successful: ["Ahsan", "Karim"],
  failed: ["Rahim"],
  remainingBalance: 20
}
```

---

## 🧩 Problem–02: Online Course Enrollment System

**Function Name:** `enrollStudents()`

You are given total seats and student list.

### Input

```js
enrollStudents(3, [
  { name: "Ahsan" },
  { name: "Karim" },
  { name: "Rahim" },
  { name: "Tania" },
]);
```

### Rules

- If `seats` is not a number or `students` is not an array → return **"Invalid Input"**.
- A student is valid if:
  - `name` is string
- Each enrollment takes 1 seat.
- Process students in order.
- Return an object:

```js
{
  enrolled: string[],
  waitlist: string[],
  remainingSeats: number
}
```

### Output

- Return an **object**.

### Example

```js
// Result:
{
  enrolled: ["Ahsan", "Karim", "Rahim"],
  waitlist: ["Tania"],
  remainingSeats: 0
}
```

---

## 🧩 Problem–03: Warehouse Product Dispatch System

**Function Name:** `dispatchProducts()`

You are given stock and dispatch orders.

### Input

```js
dispatchProducts({ rice: 10, oil: 5 }, [
  { shop: "Shop1", item: "rice", qty: 4 },
  { shop: "Shop2", item: "oil", qty: 3 },
  { shop: "Shop3", item: "oil", qty: 4 },
]);
```

### Rules

- If `stock` is not an object or `orders` is not an array → return **"Invalid Input"**.
- An order is valid if:
  - `shop` is string
  - `item` is string
  - `qty` is a positive number
- If item does not exist in stock → reject.
- If not enough stock → reject.
- Process orders sequentially.
- Return an object:

```js
{
  dispatched: string[],
  rejected: string[],
  remainingStock: object
}
```

### Output

- Return an **object**.

### Example

```js
// Result:
{
  dispatched: ["Shop1", "Shop2"],
  rejected: ["Shop3"],
  remainingStock: { rice: 6, oil: 2 }
}
```

---

## 🧩 Problem–04: E-Commerce Coupon System

**Function Name:** `applyCoupons()`

You are given a base price and coupon requests.

### Input

```js
applyCoupons(1000, [
  { user: "Ahsan", coupon: "DISC10" },
  { user: "Karim", coupon: "DISC20" },
  { user: "Rahim", coupon: "ABC" },
]);
```

### Rules

- If `price` is not a number or `requests` is not an array → return **"Invalid Input"**.
- Coupons:
  - `"DISC10"` → 10% off
  - `"DISC20"` → 20% off
- Each user starts from original price.
- If coupon invalid → goes to `invalid`.
- Return an object:

```js
{
  applied: string[],
  invalid: string[],
  finalPrices: {
    [userName]: finalPrice
  }
}
```

### Output

- Return an **object**.

### Example

```js
// Result:
{
  applied: ["Ahsan", "Karim"],
  invalid: ["Rahim"],
  finalPrices: {
    Ahsan: 900,
    Karim: 800
  }
}
```

---

## 🧩 Problem–05: Office Attendance & Salary Deduction

**Function Name:** `processAttendance()`

You are given base salary and attendance records.

### Input

```js
processAttendance(30000, [
  { name: "Ahsan", absent: 1 },
  { name: "Karim", absent: 5 },
  { name: "Rahim", absent: 0 },
]);
```

### Rules

- If `baseSalary` is not a number or `records` is not an array → return **"Invalid Input"**.
- A record is valid if:
  - `name` is string
  - `absent` is a number ≥ 0
- Deduction:
  - Per day = 1000
  - If `absent > 3` → extra penalty 2000
- Return an object:

```js
{
  salaries: {
    [name]: finalSalary
  },
  penalized: string[]
}
```

### Output

- Return an **object**.

### Example

```js
// Result:
{
  salaries: {
    Ahsan: 29000,
    Karim: 23000,
    Rahim: 30000
  },
  penalized: ["Karim"]
}
```

---
