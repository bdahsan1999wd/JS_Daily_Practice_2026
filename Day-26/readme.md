# 💥 🧠 JS DAILY PRACTICE – DAY 26

📅 **Goal:** Practice real-life simulation & system problems
🎯 **Focus:** Sorting + HashMap + Sliding Window + Greedy + Prefix / Sweep Line + Simulation

---

## ⚠️ General Rules

- Solve every problem using a **function**
- **Return** the result (❌ do not use `console.log`)
- Proper **input validation** is mandatory
- If input is invalid → return `"Invalid Input"`

---

## 🧩 PROBLEM–01: 🎬 Streaming Platform Load Predictor

**Function Name:** `maxConcurrentUsers(sessions)`

### Description

Each session is:

```js
[startTime, endTime];
```

- A user starts watching at `startTime`
- A user stops watching at `endTime`
- If one session ends at time `t` and another starts at time `t`, they do **NOT** overlap

Return **maximum number of users watching at the same time**.

### Input Example

```js
maxConcurrentUsers([
  [1, 4],
  [2, 5],
  [7, 9],
  [3, 6],
  [5, 8],
]);
```

### Rules

- Input must be an array of intervals
- Each interval must be `[start, end]`
- `start` and `end` must be numbers
- `start < end`
- If input is empty → return `0`
- If input is invalid → return `"Invalid Input"`

### Output

```js
3;
```

---

## 🧩 PROBLEM–02: 📱 App Notification Spam Detector

**Function Name:** `longestNonRepeatingWindow(events, k)`

### Description

Each element in `events` represents an app name (string) that sent a notification.

Find the **length of the longest contiguous window** such that:

> No app appears more than `k` times inside the window.

### Input Example

```js
longestNonRepeatingWindow(
  [
    "Facebook",
    "YouTube",
    "Facebook",
    "Instagram",
    "YouTube",
    "Facebook",
    "Twitter",
    "Instagram",
    "WhatsApp",
    "Facebook",
  ],
  2,
);
```

### Rules

- `events` must be an array
- Each element must be a string
- `k` must be a non-negative integer
- If `k === 0` → return `0`
- If input is invalid → return `"Invalid Input"`

### Output

```js
8;
```

---

## 🧩 PROBLEM–03: 🚕 Ride Sharing Surge Analyzer

**Function Name:** `maxActiveRides(trips)`

### Description

Each trip is:

```js
[startTime, endTime];
```

- A ride starts at `startTime`
- A ride ends at `endTime`
- `endTime` is exclusive

Return **maximum number of rides active at the same time**.

### Input Example

```js
maxActiveRides([
  [1, 5],
  [2, 6],
  [4, 8],
  [7, 9],
  [3, 4],
]);
```

### Rules

- Input must be an array of intervals
- Each interval must be `[start, end]`
- `start` and `end` must be numbers
- `start < end`
- If input is empty → return `0`
- If input is invalid → return `"Invalid Input"`

### Output

```js
3;
```

---

## 🧩 PROBLEM–04: 🛍️ E-Commerce Order Burst Detector

**Function Name:** `longestOrderBurst(orders, limit)`

### Description

Each number in `orders` represents the number of orders received per minute.

Find the **length of the longest contiguous window** such that:

```js
max(orders in window) - min(orders in window) <= limit;
```

### Input Example

```js
longestOrderBurst([3, 5, 2, 6, 4, 7, 3, 5, 4], 3);
```

### Rules

- `orders` must be an array of numbers
- `limit` must be a non-negative number
- Use **Sliding Window**
- If input is invalid → return `"Invalid Input"`

### Output

```js
3;
```

---

## 🧩 PROBLEM–05: 🚚 Courier Loading Optimizer

**Function Name:** `minDaysToShip(packages, dailyLimit)`

### Description

Each number in `packages` represents a package weight.

- Packages must be shipped **in order**
- Each day you can ship packages with total weight **≤ dailyLimit**

Return **minimum number of days** needed to ship all packages.

### Input Example

```js
minDaysToShip([5, 3, 4, 7, 2, 6, 4], 10);
```

### Rules

- `packages` must be an array of positive numbers
- `dailyLimit` must be a positive number
- If any package weight > `dailyLimit` → return `"Invalid Input"`
- If input is invalid → return `"Invalid Input"`

### Output

```js
4;
```

---
