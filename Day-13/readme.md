# 🧠 JS Daily Practice – Day 13

📅 **Date:** 13 January 2026
🎯 **Goal:** Real backend workflow simulation
📌 **Focus:** Workflow Engine + Approval System + Resource Allocation + Rule Processing

---

## ⚠️ General Rules (Must Follow)

- Solve every problem using a **function**.
- **Return** the result (❌ `console.log` is not allowed).
- Proper **input validation** is mandatory.
- If input is invalid → return **"Invalid Input"**.

---

## 🧩 Problem–01: Ride Sharing Trip Assignment System

**Function Name:** `assignTrips()`

You are given available cars and ride requests.

### Input

```js
assignTrips(2, [{ rider: "Ahsan" }, { rider: "Karim" }, { rider: "Rahim" }]);
```

### Rules

- If `cars` is not a number or `requests` is not an array → return **"Invalid Input"**.
- A request is valid if:
  - `rider` is string
- Each trip consumes **1 car**.
- Process requests **sequentially**.

### Return

```js
{
  assigned: string[],
  pending: string[],
  availableCars: number
}
```

### Output

- Return an **object**.

### Example

```js
// Result:
{
  assigned: ["Ahsan", "Karim"],
  pending: ["Rahim"],
  availableCars: 0
}
```

---

## 🧩 Problem–02: Hospital Appointment Scheduling System

**Function Name:** `scheduleAppointments()`

You are given total appointment slots and patient list.

### Input

```js
scheduleAppointments(2, [
  { name: "Ahsan" },
  { name: "Karim" },
  { name: "Rahim" },
]);
```

### Rules

- If `slots` is not a number or `patients` is not an array → return **"Invalid Input"**.
- A patient is valid if:
  - `name` is string
- Each appointment consumes **1 slot**.
- Process patients **in order**.

### Return

```js
{
  confirmed: string[],
  waiting: string[],
  remainingSlots: number
}
```

### Output

- Return an **object**.

### Example

```js
// Result:
{
  confirmed: ["Ahsan", "Karim"],
  waiting: ["Rahim"],
  remainingSlots: 0
}
```

---

## 🧩 Problem–03: Library Book Lending System

**Function Name:** `lendBooks()`

You are given books stock and borrow requests.

### Input

```js
lendBooks({ js: 2, python: 1 }, [
  { user: "Ahsan", book: "js" },
  { user: "Karim", book: "python" },
  { user: "Rahim", book: "python" },
]);
```

### Rules

- If `stock` is not an object or `requests` is not an array → return **"Invalid Input"**.
- A request is valid if:
  - `user` is string
  - `book` is string
- If book does not exist in stock → reject.
- If book stock is **0** → reject.
- Process requests **sequentially**.

### Return

```js
{
  lent: string[],
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
  lent: ["Ahsan", "Karim"],
  rejected: ["Rahim"],
  remainingStock: { js: 1, python: 0 }
}
```

---

## 🧩 Problem–04: Scholarship Application Approval System

**Function Name:** `processScholarships()`

You are given total scholarship slots and applications.

### Input

```js
processScholarships(2, [
  { name: "Ahsan", gpa: 4.9 },
  { name: "Karim", gpa: 3.2 },
  { name: "Rahim", gpa: 4.5 },
]);
```

### Rules

- If `slots` is not a number or `applications` is not an array → return **"Invalid Input"**.
- An application is valid if:
  - `name` is string
  - `gpa` is number
- Only approve if `gpa >= 4.0`.
- Each approval consumes **1 slot**.
- Process applications **sequentially**.

### Return

```js
{
  approved: string[],
  rejected: string[],
  remainingSlots: number
}
```

### Output

- Return an **object**.

### Example

```js
// Result:
{
  approved: ["Ahsan", "Rahim"],
  rejected: ["Karim"],
  remainingSlots: 0
}
```

---

## 🧩 Problem–05: Factory Machine Job Allocation System

**Function Name:** `assignJobs()`

You are given total machines and job queue.

### Input

```js
assignJobs(2, [{ job: "Cutting" }, { job: "Welding" }, { job: "Painting" }]);
```

### Rules

- If `machines` is not a number or `jobs` is not an array → return **"Invalid Input"**.
- A job is valid if:
  - `job` is string
- Each job consumes **1 machine**.
- Process jobs **sequentially**.

### Return

```js
{
  running: string[],
  queued: string[],
  availableMachines: number
}
```

### Output

- Return an **object**.

### Example

```js
// Result:
{
  running: ["Cutting", "Welding"],
  queued: ["Painting"],
  availableMachines: 0
}
```

---
