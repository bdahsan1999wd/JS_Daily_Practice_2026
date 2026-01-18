# 🧠 JS Daily Practice – Day 18

📅 **Date:** 18 January 2026
🎯 **Goal:** Advanced real-life data analytics & decision systems
📌 **Focus:** Finance + Traffic + Hospital + E-commerce + Power Consumption

---

## ⚠️ General Rules (Must Follow)

- Solve every problem using a **function**.
- **Return** the result (❌ `console.log` is not allowed).
- Proper **input validation** is mandatory.
- If input is invalid → return **"Invalid Input"**.
- No duplicate names allowed.

---

## 🧩 Problem–01: Personal Finance Expense Intelligence

**Function Name:** `expenseAnalyzer()`

You are given monthly expense data of different persons.

### Input Example

```js
expenseAnalyzer([
  { name: "Ahsan", expenses: [1200, 1500, 1100, 1800] },
  { name: "Karim", expenses: [3000, 3200, 2800, 3500] },
]);
```

### Rules

- Validate input: name as **string**, expenses as **array of positive numbers**
- No duplicate names
- Calculate:
  - **total expense per person**
  - **highest spender**
  - **risky spenders** → average expense > 2000
  - **stable spenders** → (max expense - min expense) < 500

### Return

```js
{
  totalExpense: { [name]: number },
  highestSpender: string,
  riskySpenders: string[],
  stableSpenders: string[]
}
```

### Example Usage

```js
const result = expenseAnalyzer([
  { name: "Ahsan", expenses: [1200, 1500, 1100, 1800] },
  { name: "Karim", expenses: [3000, 3200, 2800, 3500] },
]);

/*
Expected Output:
{
  totalExpense: { Ahsan: 5600, Karim: 12500 },
  highestSpender: "Karim",
  riskySpenders: ["Karim"],
  stableSpenders: []
}

*/
```

---

## 🧩 Problem–02: City Traffic Flow Analyzer

**Function Name:** `trafficFlowAnalyzer()`

You analyze traffic count per hour of different roads.

### Input Example

```js
trafficFlowAnalyzer([
  { road: "Road A", traffic: [120, 200, 180, 220, 300] },
  { road: "Road B", traffic: [80, 70, 90, 100, 110] },
]);
```

### Rules

- Validate input
- No duplicate road names
- Calculate:
  - **total traffic per road**
  - **busiest road** → highest total traffic
  - **overloaded roads** → any hour traffic > 250
  - **stable roads** → (max - min) < 100

### Return

```js
{
  totalTraffic: { [road]: number },
  busiestRoad: string,
  overloadedRoads: string[],
  stableRoads: string[]
}
```

### Example Usage

```js
const result = trafficFlowAnalyzer([
  { road: "Road A", traffic: [120, 200, 180, 220, 300] },
  { road: "Road B", traffic: [80, 70, 90, 100, 110] },
]);

/*
Expected Output:
{
  totalTraffic: { "Road A": 1020, "Road B": 450 },
  busiestRoad: "Road A",
  overloadedRoads: ["Road A"],
  stableRoads: ["Road B"]
}
*/
```

---

## 🧩 Problem–03: Hospital Patient Load Monitor

**Function Name:** `hospitalLoadAnalyzer()`

You track daily patient count of hospitals.

### Input Example

```js
hospitalLoadAnalyzer([
  { hospital: "City Care", patients: [120, 130, 140, 160, 170] },
  { hospital: "Green Life", patients: [60, 70, 65, 80, 75] },
]);
```

### Rules

- Validate input
- No duplicate hospital names
- Calculate:
  - **total patients per hospital**
  - **most busy hospital**
  - **critical hospitals** → average patients > 150
  - **growing hospitals** → last day > first day

### Return

```js
{
  totalPatients: { [hospital]: number },
  mostBusy: string,
  criticalHospitals: string[],
  growingHospitals: string[]
}
```

### Example Usage

```js
const result = hospitalLoadAnalyzer([
  { hospital: "City Care", patients: [120, 130, 140, 160, 170] },
  { hospital: "Green Life", patients: [60, 70, 65, 80, 75] },
]);

/*
Expected Output:
{
  totalPatients: { "City Care": 720, "Green Life": 350 },
  mostBusy: "City Care",
  criticalHospitals: [],
  growingHospitals: ["City Care", "Green Life"]
}
*/
```

---

## 🧩 Problem–04: E-commerce Order Performance Analyzer

**Function Name:** `orderPerformanceAnalyzer()`

You analyze daily order counts of sellers.

### Input Example

```js
orderPerformanceAnalyzer([
  { seller: "Seller A", orders: [10, 15, 20, 25, 30] },
  { seller: "Seller B", orders: [50, 45, 40, 42, 41] },
]);
```

### Rules

- Validate input
- No duplicate seller names
- Calculate:
  - **total orders per seller**
  - **top seller** → highest total orders
  - **declining sellers** → last day < first day
  - **consistent sellers** → (max - min) < 10

### Return

```js
{
  totalOrders: { [seller]: number },
  topSeller: string,
  decliningSellers: string[],
  consistentSellers: string[]
}
```

### Example Usage

```js
const result = orderPerformanceAnalyzer([
  { seller: "Seller A", orders: [10, 15, 20, 25, 30] },
  { seller: "Seller B", orders: [50, 45, 40, 42, 41] },
]);

/*
Expected Output:
{
  totalOrders: { "Seller A": 100, "Seller B": 218 },
  topSeller: "Seller B",
  decliningSellers: ["Seller B"],
  consistentSellers: []
}
*/
```

---

## 🧩 Problem–05: Factory Power Consumption Intelligence

**Function Name:** `powerConsumptionAnalyzer()`

You track daily power usage (kWh) of factories.

### Input Example

```js
powerConsumptionAnalyzer([
  { factory: "Factory A", usage: [400, 420, 450, 470, 500] },
  { factory: "Factory B", usage: [200, 210, 190, 205, 195] },
]);
```

### Rules

- Validate input
- No duplicate factory names
- Calculate:
  - **total usage per factory**
  - **highest consuming factory**
  - **inefficient factories** → average usage > 450
  - **unstable factories** → any day change > 50 from previous day

### Return

```js
{
  totalUsage: { [factory]: number },
  highestConsumer: string,
  inefficientFactories: string[],
  unstableFactories: string[]
}
```

### Example Usage

```js
const result = powerConsumptionAnalyzer([
  { factory: "Factory A", usage: [400, 420, 450, 470, 500] },
  { factory: "Factory B", usage: [200, 210, 190, 205, 195] },
]);

/*
Expected Output:
{
  totalUsage: { "Factory A": 2240, "Factory B": 1000 },
  highestConsumer: "Factory A",
  inefficientFactories: [],
  unstableFactories: []
}
*/
```

---
