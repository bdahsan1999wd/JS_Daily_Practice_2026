# 💥 🧠 JS DAILY PRACTICE – DAY 22

📅 **Goal:** Real-time monitoring, analytics & automation systems
🎯 **Focus:** Warehouse + Subscription + E-commerce + HR + Server Load

---

## ⚠️ General Rules

- Solve every problem using a **function**
- **Return** the result (❌ `console.log` not allowed)
- Proper **input validation** is mandatory
- If input is invalid → return `"Invalid Input"`
- No duplicate names allowed

---

## 🧩 PROBLEM–01: 📦 Smart Warehouse Allocation & Priority Package System

**Function Name:** `warehouseAllocator(warehouses, packages)`

### Input Example

```js
warehouseAllocator(
  [
    { name: "Warehouse A", capacity: 100 },
    { name: "Warehouse B", capacity: 50 },
  ],
  [
    { id: 1, size: 40, priority: 2 },
    { id: 2, size: 60, priority: 1 },
    { id: 3, size: 30, priority: 3 },
  ],
);
```

**Rules:**

- Each warehouse has a capacity
- Packages have size + priority
- High priority allocated first
- If no space → rejected

**Return:**

```js
{
  allocated: [{ packageId, warehouse }],
  rejected: []
}
```

**Example Output:**

```js
{
  allocated: [
    { packageId: 3, warehouse: 'Warehouse A' },
    { packageId: 1, warehouse: 'Warehouse A' }
  ],
  rejected: [ 2 ]
}
```

---

## 🧩 PROBLEM–02: 🧾 Subscription Billing Engine with Automatic Deactivation

**Function Name:** `subscriptionBillingEngine(users)`

### Input Example

```js
subscriptionBillingEngine([
  { name: "Ahsan", plan: "Gold", active: true, balance: 100 },
  { name: "Karim", plan: "Silver", active: true, balance: 20 },
]);
```

**Rules:**

- If balance insufficient → deactivate
- If deactivated → skip billing

**Return:**

```js
{
  billed: [],
  deactivated: []
}
```

**Example Output:**

```js
{
  billed: ['Ahsan'],        // has enough balance
  deactivated: ['Karim']    // not enough balance
}
```

---

## 🧩 PROBLEM–03: 🛒 E-commerce Cart Pricing Engine with Rules & Validation

**Function Name:** `cartPricingEngine(cart, stock, coupon)`

### Input Example

```js
cartPricingEngine(
  [
    { id: 1, price: 100, qty: 2 },
    { id: 2, price: 50, qty: 1 },
  ],
  { 1: 5, 2: 0 },
  10,
);
```

**Rules:**

- Apply coupon
- Apply VAT (10%)
- Shipping cost: 20
- Stock validation: if stock fail → remove item

**Return:**

```js
{
  finalItems: [],
  removedItems: [],
  total: number
}
```

**Example Output:**

```js
{
  finalItems: [ { id: 1, price: 100, qty: 2 } ],
  removedItems: [2],
  total: 229
}
```

---

## 🧩 PROBLEM–04: 🧑‍💼 Employee Promotion Decision Engine (with Seniority)

**Function Name:** `promotionEngine(employees)`

**Input Example:**

```js
promotionEngine([
  { name: "Ahsan", performance: 90, attendance: 95, warnings: 0, seniority: 5 },
  { name: "Karim", performance: 70, attendance: 80, warnings: 2, seniority: 3 },
  { name: "Salma", performance: 72, attendance: 85, warnings: 1, seniority: 3 },
]);
```

**Rules**

Evaluate promotion using:

- **Performance** (0–100)
- **Attendance** (%)
- **Warnings** (number of warnings)
- **Seniority** (years)

**Decision Logic:**

1. **Promoted:** performance ≥ 85, attendance ≥ 90, warnings = 0
2. **Review:** performance ≥ 70, attendance ≥ 80, warnings ≤ 1, seniority ≥ 2
3. **Rejected:** all others

**Input Validation:**

- Must be an array of objects with correct properties
- No duplicate names
- Return `"Invalid Input"` if invalid

**Return Format**

```js
{
  promoted: [],  // array of names
  review: [],    // array of names
  rejected: []   // array of names
}
```

**Example Output:**

```js
{
  promoted: ['Ahsan'],
  review: ['Salma'],
  rejected: ['Karim']
}
```

---

## 🧩 PROBLEM–05: 🌐 Server Load Balancer & Request Distribution Simulator

**Function Name:** `loadBalancer(servers, requests)`

**Input Example:**

```js
loadBalancer(
  [
    { name: "Server A", load: 50 },
    { name: "Server B", load: 80 },
  ],
  5,
);
```

**Rules:**

- Always assign to the lowest load server
- If overload → skip server

**Return:**

```js
{
  distribution: { [server]: number },
  rejectedRequests: number
}
```

**Example Output:**

```js
{ distribution: { 'Server A': 5, 'Server B': 0 }, rejectedRequests: 0 }
```

---
