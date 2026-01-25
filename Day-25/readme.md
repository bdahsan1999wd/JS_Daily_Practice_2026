# 💥 🧠 JS DAILY PRACTICE – DAY 25

📅 **Goal:** Practice practical interview problems
🎯 **Focus:** HashMap + Greedy + Sorting + Sliding Window + Simulation

---

## ⚠️ General Rules

- Solve every problem using a **function**
- **Return** the result (❌ do not use `console.log`)
- Proper **input validation** is mandatory
- If input is invalid → return `"Invalid Input"`

---

## 🧩 PROBLEM–01: 🏨 Hotel Room Booking System

**Function Name:** `minRoomsRequired(bookings)`

### Description

Each booking is `[checkIn, checkOut]`.
A room can be reused only after previous guest checks out.

Return **minimum number of rooms required**.

### Input Example

```js
minRoomsRequired([
  [1, 3],
  [2, 5],
  [4, 6],
  [5, 8],
]);
```

### Rules

- Input must be an array of valid intervals
- `checkIn < checkOut`
- If input is empty → return `0`
- If input is invalid → return `"Invalid Input"`

### Output

```js
2;
```

---

## 🧩 PROBLEM–02: 🛒 Shopping Cart – Top Selling Products

**Function Name:** `topSellingProducts(orders, k)`

### Description

Each order contains product IDs.
Return **top K most sold products**.

### Input Example

```js
topSellingProducts([1, 2, 3, 1, 2, 1, 4, 3, 3, 3], 2);
```

### Rules

- Input must be an array of numbers
- `k` must be positive integer
- If `k >` unique products → return `"Invalid Input"`
- Use **HashMap + Sorting / Heap**
- If input is invalid → return `"Invalid Input"`

### Output

```js
[3, 1];
```

---

## 🧩 PROBLEM–03: 📊 Website Traffic Analyzer

**Function Name:** `longestStableTraffic(visits, k)`

### Description

Each number represents visitors per minute.
Find the **longest contiguous period** where the difference between **max and min ≤ k**.

### Input Example

```js
longestStableTraffic([10, 12, 11, 14, 13, 15, 10], 3);
```

### Rules

- Input must be an array of numbers
- `k` must be non-negative number
- Use **Sliding Window**
- If input is invalid → return `"Invalid Input"`

### Output

```js
4;
```

---

## 🧩 PROBLEM–04: 🚚 Delivery Capacity Planner

**Function Name:** `minTrucksRequired(packages, capacity)`

### Description

Each package has a weight.
Each truck can carry up to `capacity`.
Packages must be loaded **in order**.

Return **minimum number of trucks needed**.

### Input Example

```js
minTrucksRequired([4, 8, 1, 4, 2, 1], 10);
```

### Rules

- Input must be an array of positive numbers
- `capacity` must be positive
- If any package > `capacity` → return `"Invalid Input"`
- If input is invalid → return `"Invalid Input"`

### Output

```js
3;
```

---

## 🧩 PROBLEM–05: ⏱️ CPU Task Execution Simulator

**Function Name:** `minExecutionTime(tasks, cooldown)`

### Description

Each task is a capital letter.
Same task needs `cooldown` time before re-execution.

Return **minimum total time** to finish all tasks.

### Input Example

```js
minExecutionTime(["A", "A", "A", "B", "B", "B"], 2);
```

### Rules

- Input must be an array of strings
- `cooldown` must be a non-negative integer
- Use **Greedy**
- If input is invalid → return `"Invalid Input"`

### Output

```js
8;
```

---
