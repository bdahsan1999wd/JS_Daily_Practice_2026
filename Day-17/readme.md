# 🧠 JS Daily Practice – Day 17

📅 **Date:** 17 January 2026
🎯 **Goal:** Data analytics & performance monitoring
📌 **Focus:** Voting + Occupancy + Internet Usage + Screen Time + Resource Consumption

---

## ⚠️ General Rules (Must Follow)

- Solve every problem using a **function**.
- **Return** the result (❌ `console.log` is not allowed).
- Proper **input validation** is mandatory.
- If input is invalid → return **"Invalid Input"**.

---

## 🧩 Problem–01: Election Vote Analyzer

**Function Name:** `electionVoteAnalyzer()`

You are given candidates and their vote counts from different centers.

### Input Example

```js
electionVoteAnalyzer([
  { candidate: "Ahsan", votes: [120, 130, 140] },
  { candidate: "Babu", votes: [100, 90, 110] },
]);
```

### Rules

- Validate input: candidate as **string**, votes as **array of non-negative integers**.
- No duplicate candidate names.
- Calculate:
  - **total votes per candidate**
  - **winner** → candidate with highest total votes
  - **low performers** → candidates whose average votes < 100

### Return

```js
{
  totalVotes: { [candidate]: number },
  winner: string,
  lowPerformers: string[]
}
```

### Example

```js
// Result:
{
  totalVotes: { Ahsan: 390, Babu: 300 },
  winner: "Ahsan",
  lowPerformers: []
}
```

---

## 🧩 Problem–02: Cinema Hall Seat Occupancy Tracker

**Function Name:** `cinemaOccupancyTracker()`

You track seat occupancy of different cinema halls.

### Input Example

```js
cinemaOccupancyTracker([
  { hall: "Hall 1", shows: [120, 150, 100], capacity: 200 },
  { hall: "Hall 2", shows: [80, 90, 70], capacity: 150 },
]);
```

### Rules

- Validate input: hall as **string**, shows as **array of non-negative integers**, capacity as **positive number**.
- No duplicate hall names.
- For each hall, calculate **average occupancy percentage**.
- Identify:
  - **most crowded hall** → highest average occupancy %
  - **low occupancy halls** → average occupancy < 50%

### Return

```js
{
  averageOccupancy: { [hall]: number },
  mostCrowded: string,
  lowOccupancyHalls: string[]
}
```

### Example

```js
// Result:
{
  averageOccupancy: { "Hall 1": 61.67, "Hall 2": 53.33 },
  mostCrowded: "Hall 1",
  lowOccupancyHalls: []
}
```

---

## 🧩 Problem–03: Internet Data Usage Auditor

**Function Name:** `internetUsageAuditor()`

You monitor daily internet usage of different users.

### Input Example

```js
internetUsageAuditor([
  { user: "Rahim", usageGB: [2.5, 3, 4] },
  { user: "Karim", usageGB: [10, 12, 9] },
]);
```

### Rules

- Validate input: user as **string**, usageGB as **array of non-negative numbers**.
- No duplicate user names.
- Calculate:
  - **total usage per user**
  - **highest usage user**
  - **heavy users** → users whose average daily usage > 8 GB

### Return

```js
{
  totalUsage: { [user]: number },
  highestUser: string,
  heavyUsers: string[]
}
```

### Example

```js
// Result:
{
  totalUsage: { Rahim: 9.5, Karim: 31 },
  highestUser: "Karim",
  heavyUsers: ["Karim"]
}
```

---

## 🧩 Problem–04: Mobile App Screen Time Analyzer

**Function Name:** `screenTimeAnalyzer()`

You analyze daily screen time of different users.

### Input Example

```js
screenTimeAnalyzer([
  { user: "Ahsan", usageHours: [2, 3, 4, 1] },
  { user: "Karim", usageHours: [5, 6, 4, 5] },
]);
```

### Rules

- Validate input: user as **string**, usageHours as **array of non-negative numbers**.
- No duplicate user names.
- Calculate:
  - **total screen time per user**
  - **most addicted user** → highest total usage
  - **heavy users** → users whose average daily usage > 4 hours

### Return

```js
{
  totalUsage: { [user]: number },
  mostAddicted: string,
  heavyUsers: string[]
}
```

### Example

```js
// Result:
{
  totalUsage: { Ahsan: 10, Karim: 20 },
  mostAddicted: "Karim",
  heavyUsers: ["Karim"]
}
```

---

## 🧩 Problem–05: Water Tank Consumption Monitor

**Function Name:** `waterConsumptionMonitor()`

You monitor daily water consumption of different buildings.

### Input Example

```js
waterConsumptionMonitor([
  { building: "Building A", dailyUsage: [500, 600, 550] },
  { building: "Building B", dailyUsage: [300, 320, 310] },
]);
```

### Rules

- Validate input: building as **string**, dailyUsage as **array of non-negative numbers**.
- No duplicate building names.
- Calculate:
  - **total water usage per building**
  - **highest consuming building**
  - **low usage buildings** → average daily usage < 400 liters

### Return

```js
{
  totalUsage: { [building]: number },
  highestConsumer: string,
  lowUsageBuildings: string[]
}
```

### Example

```js
// Result:
{
  totalUsage: { "Building A": 1650, "Building B": 930 },
  highestConsumer: "Building A",
  lowUsageBuildings: ["Building B"]
}
```

---
