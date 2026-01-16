# 🧠 JS Daily Practice – Day 16

📅 **Date:** 16 January 2026
🎯 **Goal:** Real-world analytics & resource optimization
📌 **Focus:** Scheduling + Energy management + Inventory monitoring + Vehicle efficiency + Order tracking

---

## ⚠️ General Rules (Must Follow)

- Solve every problem using a **function**.
- **Return** the result (❌ `console.log` is not allowed).
- Proper **input validation** is mandatory.
- If input is invalid → return **"Invalid Input"**.

---

## 🧩 Problem–01: Meeting Room Scheduler

**Function Name:** `meetingRoomScheduler()`

You are given office rooms and their scheduled meetings.

### Input Example

```js
meetingRoomScheduler([
  {
    room: "Ocean View",
    meetings: [
      { start: 9, end: 11 },
      { start: 14, end: 16 },
    ],
  },
  {
    room: "Skyline",
    meetings: [
      { start: 10, end: 12 },
      { start: 13, end: 15 },
    ],
  },
]);
```

### Rules

- Validate input: rooms as strings, meetings as arrays of `{ start: number, end: number }`.
- Meeting times: `0 ≤ start < end ≤ 24`.
- Ensure no overlapping meetings within the same room.
- Calculate **total hours booked per room**.
- Identify **rooms fully booked with no free slots**.
- Identify **the room with the most free hours**.

### Return

```js
{
  totalBookedHours: { [room]: number },
  fullyBooked: string[],
  mostFreeRoom: string
}
```

### Example

```js
// Result:
{
  totalBookedHours: { "Ocean View": 4, "Skyline": 4 },
  fullyBooked: [],
  mostFreeRoom: "Ocean View"
}
```

---

## 🧩 Problem–02: Smart Energy Consumption Tracker

**Function Name:** `energyTracker()`

You monitor energy usage of devices in a smart building.

### Input

```js
energyTracker([
  { device: "AC", dailyUsage: [5, 6, 4] },
  { device: "Heater", dailyUsage: [2, 3, 1] },
]);
```

### Rules

- Validate input: device as string, dailyUsage as array of non-negative numbers.
- No duplicate device names.
- Calculate **total energy consumption per device**.
- Identify **device with highest consumption**.
- Identify **devices with average daily usage < 3 units**.

### Return

```js
{
  totalConsumption: { [device]: number },
  highestConsumptionDevice: string,
  lowUsageDevices: string[]
}
```

### Example

```js
// Result:
{
  totalConsumption: { AC: 15, Heater: 6 },
  highestConsumptionDevice: "AC",
  lowUsageDevices: ["Heater"]
}
```

---

## 🧩 Problem–03: Warehouse Package Expiry Monitor

**Function Name:** `packageExpiryMonitor()`

You manage a warehouse with products and their expiry dates.

> 📅 **Assume today's date is the current system date (`new Date()`) and time is set to 00:00.**

---

### Input

```js
packageExpiryMonitor([
  { product: "Milk", expiry: "2026-01-20" },
  { product: "Cheese", expiry: "2026-01-10" },
]);
```

### Rules

- Input must be an array of objects.
- Each object must have:
  - `product` → string
  - `expiry` → valid ISO date string (`YYYY-MM-DD`)
- If input is invalid, return **"Invalid Input"**.
- Treat **today = current system date**.
- Identify **expired products**:
  - `expiry date < today`
- Identify **products expiring within the next 7 days (including today)**:
  - `0 ≤ (expiry date - today) ≤ 7 days`
- Count **total number of products** in the warehouse.

---

### Return

```js
{
  expired: string[],
  expiringSoon: string[],
  totalProducts: number
}
```

### Example

```js
packageExpiryMonitor([
  { product: "Milk", expiry: "2026-01-20" },
  { product: "Cheese", expiry: "2026-01-10" },
]);

// Result:
{
  expired: ["Cheese"],
  expiringSoon: ["Milk"],
  totalProducts: 2
}
```

---

## 🧩 Problem–04: Public Transport Vehicle Efficiency Monitor

**Function Name:** `vehicleEfficiencyMonitor()`

You manage buses and track their fuel consumption and distances.

### Input

```js
vehicleEfficiencyMonitor([
  { vehicle: "Bus 101", distanceKm: 120, fuelLiters: 15 },
  { vehicle: "Bus 102", distanceKm: 80, fuelLiters: 12 },
]);
```

### Rules

- Validate input: vehicle as string, distanceKm and fuelLiters as positive numbers.
- No duplicate vehicle names.
- Calculate **fuel efficiency per vehicle** (km per liter).
- Identify **most efficient vehicle**.
- Identify **vehicles with efficiency < 5 km/l**.

### Return

```js
{
  efficiency: { [vehicle]: number },
  mostEfficient: string,
  inefficientVehicles: string[]
}
```

### Example

```js
// Result:
{
  efficiency: { "Bus 101": 8, "Bus 102": 6.67 },
  mostEfficient: "Bus 101",
  inefficientVehicles: []
}
```

---

## 🧩 Problem–05: Online Order Fulfillment Tracker

**Function Name:** `orderFulfillmentTracker()`

You manage online orders and their fulfillment status.

### Input

```js
orderFulfillmentTracker([
  { orderId: 101, status: "shipped" },
  { orderId: 102, status: "pending" },
  { orderId: 103, status: "delivered" },
]);
```

### Rules

- Validate input: `orderId` as positive number, `status` as `"pending" | "shipped" | "delivered"`.
- No duplicate `orderId`s.
- Count **number of orders per status**.
- Identify **pending orders exceeding 3 days** (simulate with optional `daysPending` property).
- Calculate **total orders**.

### Return

```js
{
  statusCounts: { [status]: number },
  overduePending: number[],
  totalOrders: number
}
```

### Example

```js
// Result:
{
  statusCounts: { pending: 1, shipped: 1, delivered: 1 },
  overduePending: [102],
  totalOrders: 3
}
```

---
