# 💥 🧠 JS DAILY PRACTICE – DAY 23

📅 **Goal:** Think like a system designer & problem solver
🎯 **Focus:** Simulation + Constraint Solving + Optimization + State Management + Greedy Logic

---

## ⚠️ General Rules

- Solve every problem using a **function**
- **Return** the result (❌ `console.log` not allowed)
- Proper **input validation** is mandatory
- If input is invalid → return `"Invalid Input"`
- No duplicate names / ids allowed

---

## 🧩 PROBLEM–01: 🏟️ Stadium Seat Booking System with Dynamic Shifting

**Function Name:** `stadiumSeatManager(seats, bookings)`

**Purpose:** You manage seat bookings in a stadium where seats are in a single line and bookings require continuous seats.

### Input Example

```js
stadiumSeatManager(10, [
  { name: "A", seats: 3 },
  { name: "B", seats: 4 },
  { name: "C", seats: 3 },
]);
```

### Rules

- Seats are in a single row: `1 → N`
- Each booking must get **continuous seats**
- If no continuous block is available → you may **shift previous allocations**
- If still not possible → **reject** that booking
- **Earlier bookings have priority**

### Return

```js
{
  allocations: { [name]: number[] },
  rejected: string[]
}
```

### Example Output

```js
{
  allocations: { A: [ 1, 2, 3 ], B: [ 4, 5, 6, 7 ], C: [ 8, 9, 10 ] },
  rejected: []
}
```

---

## 🧩 PROBLEM–02: 🛒 Smart Supermarket Billing System with Offers & Conflicts

**Function Name:** `smartBillingSystem(products, offers, cart)`

**Purpose:** You calculate the best possible bill for a customer by applying offers optimally.

### Input Example

```js
smartBillingSystem(
  { rice: 60, oil: 120, sugar: 80 },
  [
    { type: "BUY_X_GET_Y", product: "rice", x: 2, y: 1 },
    { type: "FLAT_DISCOUNT", product: "oil", percent: 10 },
    { type: "BUNDLE", items: ["rice", "sugar"], discount: 20 },
  ],
  ["rice", "rice", "rice", "oil", "sugar"],
);
```

### Rules

- A product **cannot use multiple offers**
- Choose the **best possible discount** for the customer
- Bundle discount applies **after** item-level pricing
- If unknown product exists in cart → return `"Invalid Input"`

### Return

```js
{
  originalTotal: number,
  finalTotal: number,
  totalDiscount: number,
  appliedOffers: []
}
```

### Example Output

```js
{
  originalTotal: 380,
  finalTotal: 288,
  totalDiscount: 92,
  appliedOffers: [
    'BUY_X_GET_Y on rice',
    'FLAT_DISCOUNT on oil',
    'BUNDLE rice+sugar'
  ]
}
```

---

## 🧩 PROBLEM–03: 🏦 ATM Cash Dispenser with Limited Notes

**Function Name:** `atmCashDispenser(balance, notes, withdraws)`

**Purpose:** You simulate an ATM system that can only dispense limited notes and must handle multiple withdrawal requests using a greedy strategy.

### Input Example

```js
atmCashDispenser(10000, { 1000: 5, 500: 4, 100: 10 }, [2300, 3700, 1500]);
```

### Rules

- Use **greedy** from highest note to lowest
- Must use **available notes only**
- If exact amount cannot be made → that withdrawal **fails**
- After a successful withdrawal → **notes are reduced**

### Return

```js
{
  success: number[],
  failed: number[],
  remainingNotes: {}
}
```

### Example Output

```js
{
  success: [ 2300, 3700, 1500 ],
  failed: [],
  remainingNotes: { '100': 5, '500': 0, '1000': 0 }
}
```

---

## 🧩 PROBLEM–04: 🧬 DNA Mutation Simulation Engine

**Function Name:** `dnaMutationEngine(dna, operations)`

**Purpose:** You simulate a DNA mutation system where a DNA string is modified step-by-step using a sequence of mutation operations.

### Input Example

```js
dnaMutationEngine("AACCGG", [
  { type: "insert", index: 2, value: "T" },
  { type: "delete", index: 4 },
  { type: "replace", index: 1, value: "G" },
]);
```

### Rules

- DNA can only contain: `A`, `C`, `G`, `T`
- If **invalid index** or **invalid character** → skip that operation
- Apply operations **in order**

### Return

```js
{
  finalDNA: string,
  applied: number,
  skipped: number
}
```

### Example Output

```js
{ finalDNA: 'AGTCGG', applied: 3, skipped: 0 }
```

---

## 🧩 PROBLEM–05: 🧠 AI Exam Hall Seating Strategy System

**Function Name:** `examHallSeating(students, hallSize)`

**Purpose:** You design an AI-based seating strategy system that arranges students in a way that minimizes cheating risk and maximizes skill difference between adjacent students.

### Input Example

```js
examHallSeating(
  [
    { name: "A", skill: 90 },
    { name: "B", skill: 30 },
    { name: "C", skill: 80 },
    { name: "D", skill: 40 },
  ],
  4,
);
```

### Rules

- **Highest skill** and **lowest skill** students **cannot sit adjacent**
- Try to **maximize difference** between adjacent students
- If arrangement is not possible → return `"Not Possible"`

### Return

```js
{
  seating: string[]
}
```

### Example Output

```js
{
  seating: ["A", "D", "B", "C"];
}
```

---
