# 🧠 JS Daily Practice – Day 11

📅 Date: 11 January 2026
🎯 Goal: Real-life system simulation & backend-style logic
📌 Focus: Validation + State Management + Sequential Processing + Decision Rules

---

## ⚠️ General Rules (Must Follow)

- Solve every problem using a **function**.
- **Return** the result (❌ `console.log` is not allowed).
- Proper **input validation** is mandatory.
- If input is invalid, return the **specified error message**.

---

## 🧩 Problem–01: Train Ticket Counter System

**Function Name:** `processTrainTickets()`

You are given total tickets and purchase requests.

### Input

```js
processTrainTickets(5, [
  { name: "Ahsan", tickets: 2 },
  { name: "Karim", tickets: 3 },
  { name: "Rahim", tickets: 1 },
]);
```

### Rules

- If `totalTickets` is not a number or `requests` is not an array → return **"Invalid Input"**.
- A request is valid if:
  - `name` is string
  - `tickets` is a positive number
- Process requests one by one in order.
- If not enough tickets → reject that request.
- Return an object:

```js
{
  sold: string[],
  rejected: string[],
  remainingTickets: number
}
```

### Output

- Return an **object**.

### Example

```js
// Result:
{
  sold: ["Ahsan", "Karim"],
  rejected: ["Rahim"],
  remainingTickets: 0
}
```

---

## 🧩 Problem–02: Hotel Room Booking System

**Function Name:** `bookHotelRooms()`

You are given total rooms and booking requests.

### Input

```js
bookHotelRooms(3, [
  { name: "Ahsan", rooms: 1 },
  { name: "Karim", rooms: 2 },
  { name: "Rahim", rooms: 1 },
]);
```

### Rules

- If `totalRooms` is not a number or `requests` is not an array → return **"Invalid Input"**.
- A request is valid if:
  - `name` is string
  - `rooms` is a positive number
- Process requests in order.
- If not enough rooms → reject that booking.
- Return an object:

```js
{
  booked: string[],
  rejected: string[],
  remainingRooms: number
}
```

### Output

- Return an **object**.

### Example

```js
// Result:
{
  booked: ["Ahsan", "Karim"],
  rejected: ["Rahim"],
  remainingRooms: 0
}
```

---

## 🧩 Problem–03: Super Shop Billing System

**Function Name:** `generateBill()`

You are given a cart and cash given by customer.

### Input

```js
generateBill(
  [
    { name: "Rice", price: 60, qty: 5 },
    { name: "Oil", price: 180, qty: 2 },
  ],
  1000
);
```

### Rules

- If `cart` is not an array or `cash` is not a number → return **"Invalid Input"**.
- A cart item is valid if:
  - `name` is string
  - `price` is number
  - `qty` is a positive number
- Calculate total bill.
- If `cash < total` → return **"Insufficient Money"**.
- Return an object:

```js
{
  total: number,
  paid: number,
  change: number
}
```

### Output

- Return an **object** or **string**.

### Example

```js
// Result:
{
  total: 660,
  paid: 1000,
  change: 340
}
```

---

## 🧩 Problem–04: Hospital Appointment System

**Function Name:** `bookAppointments()`

You are given total slots and appointment requests.

### Input

```js
bookAppointments(2, [{ name: "Ahsan" }, { name: "Karim" }, { name: "Rahim" }]);
```

### Rules

- If `slots` is not a number or `requests` is not an array → return **"Invalid Input"**.
- A request is valid if:
  - `name` is string
- Each appointment takes 1 slot.
- Process requests in order.
- Return an object:

```js
{
  confirmed: string[],
  waiting: string[]
}
```

### Output

- Return an **object**.

### Example

```js
// Result:
{
  confirmed: ["Ahsan", "Karim"],
  waiting: ["Rahim"]
}
```

---

## 🧩 Problem–05: Food Delivery Order System

**Function Name:** `processFoodOrders()`

You are given available stock and orders.

### Input

```js
processFoodOrders({ burger: 5, pizza: 3 }, [
  { user: "Ahsan", item: "burger", qty: 2 },
  { user: "Karim", item: "pizza", qty: 4 },
  { user: "Rahim", item: "pizza", qty: 2 },
]);
```

### Rules

- If `stock` is not an object or `orders` is not an array → return **"Invalid Input"**.
- An order is valid if:
  - `user` is string
  - `item` is string
  - `qty` is a positive number
- If not enough stock → reject that order.
- Process orders sequentially.
- Return an object:

```js
{
  served: string[],
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
  served: ["Ahsan", "Rahim"],
  rejected: ["Karim"],
  remainingStock: { burger: 3, pizza: 1 }
}
```

---
