# 💥 🧠 JS DAILY PRACTICE – DAY 28

📅 **Goal:** Practice real-life backend & business logic systems
🎯 **Focus:** Data Processing + Business Rules + Simulation + Decision Engine + Scheduling

---

## ⚠️ General Rules

- Solve every problem using a **function**
- **Return** the result (❌ do not use `console.log`)
- Proper **input validation** is mandatory
- If input is invalid → return `"Invalid Input"`

---

## 🧩 PROBLEM–01: 🏦 Loan Eligibility Rule Engine

**Function Name:** `evaluateLoan(applicant, rules)`

### Description

Each applicant:

```js
{
  age: number,
  salary: number,
  creditScore: number,
  hasCriminalRecord: boolean,
  jobType: string
}
```

Each rule:

```js
{
  field: string,
  operator: string, // ">", "<", ">=", "<=", "==", "!="
  value: any,
  rejectReason: string
}
```

- Check all rules
- If **any rule fails** → loan rejected
- Return **all failed reasons**

### Input Example

```js
evaluateLoan(
  {
    age: 22,
    salary: 20000,
    creditScore: 620,
    hasCriminalRecord: false,
    jobType: "private",
  },
  [
    { field: "age", operator: ">=", value: 25, rejectReason: "Under age" },
    {
      field: "creditScore",
      operator: ">=",
      value: 650,
      rejectReason: "Low credit score",
    },
  ],
);
```

### Validation Rules

- `applicant` must be an object
- `rules` must be an array of rule objects
- Each rule must have valid fields
- If input is invalid → return `"Invalid Input"`

### Output

```js
{
  approved: false,
  failedReasons: ["Under age", "Low credit score"]
}
```

---

## 🧩 PROBLEM–02: 🧾 Smart Invoice Payment Allocator

**Function Name:** `allocatePayment(invoices, paymentAmount)`

### Description

Each invoice:

```js
{
  id: string,
  dueAmount: number,
  dueDate: string, // ISO date
  priority: number
}
```

### Rules for Allocation

- Sort by `priority` (desc)
- If same priority → older `dueDate` first
- Payment can be partial or full

### Input Example

```js
allocatePayment(
  [
    { id: "A", dueAmount: 500, dueDate: "2024-01-01", priority: 2 },
    { id: "B", dueAmount: 300, dueDate: "2023-12-01", priority: 3 },
  ],
  600,
);
```

### Validation Rules

- `invoices` must be an array of objects
- `paymentAmount` must be a positive number
- If input is invalid → return `"Invalid Input"`

### Output

```js
{
  paid: [
    { id: "B", amount: 300 }, // Paid first because higher priority
    { id: "A", amount: 300 }  // Partial payment, remaining 200 not enough
  ],
  remainingPayment: 0
}
```

---

## 🧩 PROBLEM–03: 🏢 Employee Leave Conflict Resolver

**Function Name:** `resolveLeaves(leaves)`

### Description

Each leave request:

```js
{
  employeeId: string,
  from: number,
  to: number,
  priority: number
}
```

### Rules

- At most **2 employees** can be on leave at the same time
- If conflict → higher priority wins

### Input Example

```js
resolveLeaves([
  { employeeId: "E1", from: 1, to: 5, priority: 1 },
  { employeeId: "E2", from: 2, to: 6, priority: 3 },
  { employeeId: "E3", from: 3, to: 4, priority: 2 },
]);
```

### Validation Rules

- `leaves` must be an array
- `from < to`
- If input is invalid → return `"Invalid Input"`

### Output

```js
{
  approved: ["E2", "E3"],  // Highest priority leaves first
  rejected: ["E1"]         // Conflicted with max 2 leaves rule
}
```

---

## 🧩 PROBLEM–04: 💳 Subscription Billing Engine

**Function Name:** `generateBills(users, today)`

### Description

Each user:

```js
{
  id: string,
  plan: "basic" | "pro" | "enterprise",
  lastPaidDate: string,
  isActive: boolean
}
```

### Rules

- basic = 500, pro = 1000, enterprise = 3000
- If overdue (>30 days) → add 10% late fee
- If inactive → skip

### Input Example

```js
generateBills(
  [
    { id: "U1", plan: "basic", lastPaidDate: "2024-12-01", isActive: true },
    { id: "U2", plan: "pro", lastPaidDate: "2025-01-10", isActive: false },
  ],
  "2025-02-01",
);
```

### Validation Rules

- `users` must be an array
- `today` must be a valid date string
- If input is invalid → return `"Invalid Input"`

### Output

```js
{
  totalRevenue: 550,              // Base 500 + 10% late fee
  bills: [{ userId: "U1", amount: 550 }] // Only active user billed
}
```

---

## 🧩 PROBLEM–05: 🛡️ Fraud Transaction Detector

**Function Name:** `detectFraud(transactions)`

### Description

Each transaction:

```js
{
  userId: string,
  amount: number,
  time: number // timestamp in minutes
}
```

### Rules

- If same user:
  - More than 3 transactions in 10 minutes OR
  - Total amount > 100000 in 60 minutes
    → mark as fraud

### Input Example

```js
detectFraud([
  { userId: "U1", amount: 30000, time: 1 },
  { userId: "U1", amount: 30000, time: 5 },
  { userId: "U1", amount: 30000, time: 9 },
  { userId: "U1", amount: 30000, time: 15 },
]);
```

### Validation Rules

- `transactions` must be an array
- `amount` & `time` must be positive numbers
- If input is invalid → return `"Invalid Input"`

### Output

```js
{
  flaggedUsers: ["U1"],                // User U1 is flagged
  flaggedTransactions: [0, 1, 2, 3]   // All their transactions flagged
}
```

---
