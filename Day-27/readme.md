# 💥 🧠 JS DAILY PRACTICE – DAY 27

📅 **Goal:** Practice real-life website & system problems
🎯 **Focus:** Sorting + HashMap + Sliding Window + Greedy + Simulation + Prefix/Sweep Line

---

## ⚠️ General Rules

- Solve every problem using a **function**
- **Return** the result (❌ do not use `console.log`)
- Proper **input validation** is mandatory
- If input is invalid → return `"Invalid Input"`

---

## 🧩 PROBLEM–01: 🛒 Product Sorting Analyzer

**Function Name:** `topSortedProducts(products, sortBy, topCount)`

### Description

Each product has:

```js
{ name: string, price: number, rating: number }
```

Sort products by `price` or `rating` in **descending order**.

Return the top `topCount` products.

### Input Example

```js
topSortedProducts(
  [
    { name: "Laptop", price: 1200, rating: 4.5 },
    { name: "Mouse", price: 25, rating: 4.8 },
    { name: "Keyboard", price: 50, rating: 4.2 },
    { name: "Monitor", price: 300, rating: 4.6 },
  ],
  "rating",
  2,
);
```

### Rules

- `products` must be an array of objects with `name`, `price`, `rating`
- `sortBy` must be `"price"` or `"rating"`
- `topCount` must be a positive integer
- If `topCount > products.length` → return `"Invalid Input"`
- If input is invalid → return `"Invalid Input"`

### Output

```js
[
  { name: "Mouse", price: 25, rating: 4.8 },
  { name: "Monitor", price: 300, rating: 4.6 },
];
```

---

## 🧩 PROBLEM–02: 🎯 Website Click Spike Detector

**Function Name:** `longestClickSpike(clicks, minClicks)`

### Description

Each element in `clicks` represents the number of clicks per minute.

Find the **longest contiguous period** where:

```js
clicks >= minClicks;
```

### Input Example

```js
longestClickSpike([10, 15, 20, 5, 7, 25, 30], 15);
```

### Rules

- `clicks` must be an array of numbers
- `minClicks` must be a non-negative number
- If input is invalid → return `"Invalid Input"`

### Output

```js
2;
```

---

## 🧩 PROBLEM–03: 💻 Server Load Balancer Simulation

**Function Name:** `maxServersRequired(loads, serverCapacity)`

### Description

Each element in `loads` represents the incoming load at a time point.

- Each server can handle up to `serverCapacity` load
- Return **maximum number of servers required** at any time

### Input Example

```js
maxServersRequired([120, 150, 80, 200], 100);
```

### Rules

- `loads` must be an array of positive numbers
- `serverCapacity` must be a positive number
- If input is invalid → return `"Invalid Input"`

### Output

```js
2;
```

---

## 🧩 PROBLEM–04: 🏪 Inventory Restock Predictor

**Function Name:** `daysToRestock(stockLevels, dailySales, maxRestockPerDay)`

### Description

- `stockLevels[i]` = current stock of item `i`
- `dailySales[i]` = projected daily sales of item `i`
- `maxRestockPerDay` = maximum items restocked per day

Return **minimum number of days** needed to restock all items to meet daily sales.

### Input Example

```js
daysToRestock([5, 2, 10], [3, 4, 5], 5);
```

### Rules

- `stockLevels` and `dailySales` must be arrays of positive numbers of same length
- `maxRestockPerDay` must be a positive number
- If input is invalid → return `"Invalid Input"`

### Output

```js
1;
```

---

## 🧩 PROBLEM–05: 📊 User Session Stability Analyzer

**Function Name:** `longestStableSession(sessions, maxActive)`

### Description

Each session is:

```js
[startTime, endTime];
```

A session starts at startTime and ends at endTime

maxActive = maximum allowed concurrent sessions

Return longest contiguous sequence of sessions where active sessions ≤ maxActive.

### Input Example

```js
longestStableSession(
  [
    [1, 4],
    [2, 6],
    [5, 8],
    [3, 5],
  ],
  2,
);
```

### Rules

- sessions must be an array of [start, end] intervals
- Each interval must have start < end
- maxActive must be a positive number
- If input is invalid → return "Invalid Input"

### Output

```js
5;
```

---
