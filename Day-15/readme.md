# 🧠 JS Daily Practice – Day 15

📅 **Date:** 15 January 2026
🎯 **Goal:** Real-world analytics & resource management
📌 **Focus:** Event tracking + Resource usage + Seat allocation + Tax calculations + Stock monitoring

---

## ⚠️ General Rules (Must Follow)

- Solve every problem using a **function**.
- **Return** the result (❌ `console.log` is not allowed).
- Proper **input validation** is mandatory.
- If input is invalid → return **"Invalid Input"**.

---

## 🧩 Problem–01: Event Attendance Tracker

**Function Name:** `attendanceTracker()`

You are given events with a list of attendees.

### Input

```js
attendanceTracker([
  { event: "Workshop", attendees: ["Ahsan", "Karim", "Rahim"] },
  { event: "Seminar", attendees: ["Salim"] },
]);
```

### Rules

- If input is not an array → return **"Invalid Input"**.
- If input array is empty → return **"Invalid Input"**.
- An event is valid if:
  - `event` is a string
  - `attendees` is a **non-empty** array of strings
- If any attendee is not a string → return **"Invalid Input"**.
- If any event name is duplicated → return **"Invalid Input"**.
- Count **number of attendees per event**.
- Identify the **event with the highest attendance**.

### Return

```js
{
  counts: { [event]: number },
  topEvent: { event: string, attendees: number }
}
```

### Example

```js
// Result:
{
  counts: { Workshop: 3, Seminar: 1 },
  topEvent: { event: "Workshop", attendees: 3 }
}
```

---

## 🧩 Problem–02: Gym Equipment Usage

**Function Name:** `gymUsage()`

You are given equipment and daily usage hours.

### Input

```js
gymUsage([
  { equipment: "Treadmill", hours: [2, 1.5, 2] },
  { equipment: "Bike", hours: [1, 2, 1] },
]);
```

### Rules

- If input is not an array → return **"Invalid Input"**.
- If input array is empty → return **"Invalid Input"**.
- An equipment is valid if:
  - `equipment` is a string
  - `hours` is a **non-empty** array of numbers
- If any hour is **not a number or is negative** → return **"Invalid Input"**.
- If any equipment name is duplicated → return **"Invalid Input"**.
- Calculate **total usage hours per equipment**.
- Identify the **equipment with the maximum usage**.

### Return

```js
{
  usageTotals: { [equipment]: number },
  topEquipment: { equipment: string, totalHours: number }
}
```

### Example

```js
// Result:
{
  usageTotals: { Treadmill: 5.5, Bike: 4 },
  topEquipment: { equipment: "Treadmill", totalHours: 5.5 }
}
```

---

## 🧩 Problem–03: Workshop Seat Allocation

**Function Name:** `seatAllocation()`

You are given a total number of seats and participants requesting seats.

### Input

```js
seatAllocation(3, [
  { name: "Ahsan" },
  { name: "Karim" },
  { name: "Rahim" },
  { name: "Salim" },
]);
```

### Rules

- If `seats` is not a number or `participants` is not an array → return **"Invalid Input"**.
- If `participants` array is empty → return **"Invalid Input"**.
- If `seats` is negative → return **"Invalid Input"**.
- A participant is valid if:
  - `name` is a **non-empty** string
- If any participant name is duplicated → return **"Invalid Input"**.
- Assign seats **sequentially** until seats run out.
- Track **assigned**, **waiting**, and **remainingSeats**.

### Return

```js
{
  assigned: string[],
  waiting: string[],
  remainingSeats: number
}
```

### Example

```js
// Result:
{
  assigned: ["Ahsan", "Karim", "Rahim"],
  waiting: ["Salim"],
  remainingSeats: 0
}
```

---

## 🧩 Problem–04: Tax Summary Calculator

**Function Name:** `taxSummary()`

You are given a list of taxpayers with their income. Calculate tax per person and total tax collected.

### Input

```js
taxSummary([
  { name: "Ahsan", income: 50000 },
  { name: "Karim", income: 75000 },
  { name: "Rahim", income: 120000 },
]);
```

### Rules

- If input is not an array → return **"Invalid Input"**.
- If input array is empty → return **"Invalid Input"**.
- A taxpayer is valid if:
  - `name` is a string
  - `income` is a number
- If any income is **not a number or is ≤ 0** → return **"Invalid Input"**.
- If any taxpayer name is duplicated → return **"Invalid Input"**.
- Tax calculation rules:
  - Income ≤ 50,000 → **10% tax**
  - Income > 50,000 and ≤ 100,000 → **20% tax**
  - Income > 100,000 → **30% tax**
- Calculate **tax per person** and **total tax collected**.
- Identify the **highest taxpayer**.

### Return

```js
{
  taxes: { [name]: number },
  totalTax: number,
  highestTaxpayer: { name: string, tax: number }
}
```

### Example

```js
// Result:
{
  taxes: { Ahsan: 5000, Karim: 15000, Rahim: 36000 },
  totalTax: 56000,
  highestTaxpayer: { name: "Rahim", tax: 36000 }
}
```

---

## 🧩 Problem–05: Supermarket Stock Monitor

**Function Name:** `stockMonitor()`

You are given supermarket products and their current stock levels.

### Input

```js
stockMonitor([
  { product: "Milk", stock: 20 },
  { product: "Eggs", stock: 50 },
  { product: "Bread", stock: 10 },
]);
```

### Rules

- If input is not an array → return **"Invalid Input"**.
- If input array is empty → return **"Invalid Input"**.
- A product is valid if:
  - `product` is a string
  - `stock` is a number
- If stock is **not a number or is negative** → return **"Invalid Input"**.
- If any product name is duplicated → return **"Invalid Input"**.
- Identify **low-stock products** (stock ≤ 15).
- Calculate **total stock available**.

### Return

```js
{
  totalStock: number,
  lowStock: string[]
}
```

### Example

```js
// Result:
{
  totalStock: 80,
  lowStock: ["Milk", "Bread"]
}
```

---
