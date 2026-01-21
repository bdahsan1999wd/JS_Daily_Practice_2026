# 💥 🧠 JS DAILY PRACTICE – DAY 21

📅 **Goal:** Think like a real backend engineer
🎯 **Focus:** Workflow Engine + State Machine + Scheduling + Rollback + Priority + Multi-system coordination

---

## ⚠️ General Rules

- Solve every problem using a **function**
- **Return** the result (❌ `console.log` not allowed)
- Proper **input validation** is mandatory
- If input is invalid → return `"Invalid Input"`
- No duplicate names allowed

---

## 🧩 PROBLEM–01: 🏥 Hospital Emergency Triage & Doctor Scheduling System

**Function Name:** `hospitalTriageSystem(patients, doctors)`

**Purpose:** You simulate a hospital triage system to schedule patients to doctors based on severity, arrival time, and doctor availability.

### Input Example

```js
hospitalTriageSystem(
  [
    { name: "Ahsan", severity: 5, arrivalTime: 9 },
    { name: "Karim", severity: 3, arrivalTime: 10 },
    { name: "Rahim", severity: 5, arrivalTime: 10 },
  ],
  [
    { name: "Dr. Ali", availableAt: 9 },
    { name: "Dr. Sara", availableAt: 9 },
  ],
);
```

### Rules

- Higher severity treated first
- If same severity → earlier arrival first
- Doctor can treat only 1 patient at a time
- Each treatment takes 1 hour
- If no doctor free → patient waits

### Return

```js
{
  treated: [{ patient, doctor, startTime, endTime }],
  waiting: string[]
}
```

### Example Output

```js
{
  "treated": [
    {
      "patient": "Ahsan",
      "doctor": "Dr. Ali",
      "startTime": 9,
      "endTime": 10
    },
    {
      "patient": "Rahim",
      "doctor": "Dr. Ali",
      "startTime": 10,
      "endTime": 11
    },
    {
      "patient": "Karim",
      "doctor": "Dr. Sara",
      "startTime": 10,
      "endTime": 11
    }
  ],
  "waiting": []
}

```

---

## 🧩 PROBLEM–02: 💳 Banking Transaction Processing Engine with Partial Rollback Support

**Function Name:** `bankTransactionEngine(accounts, transactions)`

**Purpose:** You process banking transactions with partial rollback to ensure account balances never go negative and failed transactions are handled.

**Input Example:**

```js
bankTransactionEngine({ Ahsan: 500, Karim: 300 }, [
  { from: "Ahsan", to: "Karim", amount: 200 },
  { from: "Karim", to: "Ahsan", amount: 500 },
  { from: "Karim", to: "Ahsan", amount: 300 },
]);
```

**Rules:**

- If any transaction fails → rollback that transaction only
- No negative balance allowed

**Return:**

```js
{
  finalBalances: { [account]: number },
  success: number,
  failed: number,
  failedTransactions: []
}
```

**Example Output:**

```js
{
  finalBalances: { Ahsan: 800, Karim: 0 },
  success: 2,
  failed: 1,
  failedTransactions: [ { from: 'Karim', to: 'Ahsan', amount: 300 } ]
}
```

---

## 🧩 **PROBLEM–03: 🏭 Multi-Stage Order Fulfillment & Status Orchestration Pipeline**

**Function Name:** `orderProcessingPipeline(orders)`

**Purpose:** You manage a multi-stage order system to track orders through created → paid → packed → shipped → delivered, handling failures, delays, and refunds.

**Input Example:**

```js
orderProcessingPipeline([
  {
    id: 1,
    created: true,
    paid: true,
    packed: true,
    shipped: true,
    delivered: true,
  },
  {
    id: 2,
    created: true,
    paid: false,
    packed: false,
    shipped: false,
    delivered: false,
  },
  {
    id: 3,
    created: true,
    paid: true,
    packed: false,
    shipped: false,
    delivered: false,
  },
  {
    id: 4,
    created: true,
    paid: true,
    packed: true,
    shipped: false,
    delivered: false,
  },
  {
    id: 5,
    created: true,
    paid: true,
    packed: true,
    shipped: true,
    delivered: false,
  },
]);
```

**Rules:**

- Each order passes: created → paid → packed → shipped → delivered
- If payment fails → stop
- If packing fails → refund
- If shipping fails → mark as delayed

**Return:**

```js
{
  delivered: [],
  delayed: [],
  cancelled: [],
  inProgress: []
}
```

**Example Output:**

```js
{
  delivered: [ 1 ],
  delayed: [ 4, 5 ],
  cancelled: [ 3 ],
  inProgress: [ 2 ]
}
```

---

## 🧩 **PROBLEM–04: 🚦 Smart City Traffic Signal Scheduler with Emergency Prioritization**

**Function Name:** `trafficSignalScheduler(intersections)`

**Purpose:** You simulate a traffic signal system prioritizing emergency routes and heavy traffic, coordinating multiple intersections over multiple cycles.

**Input Example:**

```js
trafficSignalScheduler([
  { name: "Main St", trafficDensity: 30, emergency: false },
  { name: "1st Ave", trafficDensity: 50, emergency: true },
]);
```

**Rules:**

- Emergency roads get priority
- Higher trafficDensity = longer green
- Only one green at a time
- Simulate 10 cycles

**Return:**

```js
{
  schedule: [],
  greenCount: { [road]: number }
}
```

**Example Output:**

```js
{
  schedule: [
    { cycle: 1, green: '1st Ave' },
    { cycle: 2, green: '1st Ave' },
    { cycle: 3, green: '1st Ave' },
    { cycle: 4, green: '1st Ave' },
    { cycle: 5, green: '1st Ave' },
    { cycle: 6, green: '1st Ave' },
    { cycle: 7, green: '1st Ave' },
    { cycle: 8, green: '1st Ave' },
    { cycle: 9, green: '1st Ave' },
    { cycle: 10, green: '1st Ave' }
  ],
  greenCount: { 'Main St': 0, '1st Ave': 10 }
}
```

---

## 🧩 PROBLEM–05: 🧠 Exam Result Publishing System with Conditional Dependencies

**Function Name:** `examResultEngine(students)`

**Purpose:** You evaluate students’ exam components (written, viva, practical) to determine pass, fail, or hold status based on conditional dependencies.

**Input Example:**

```js
examResultEngine([
  { name: "Ahsan", written: 50, viva: 60, practical: 55 },
  { name: "Karim", written: 30, viva: 70, practical: 80 },
]);
```

**Rules:**

- Must pass all 3 components
- If written fail → skip others
- If practical fail → result = "Hold"

**Return:**

```js
{
  pass: [],
  fail: [],
  hold: []
}
```

**Example Output:**

```js
{
  pass: ["Ahsan"],
  fail: ["Karim"],
  hold: []
}
```

---
