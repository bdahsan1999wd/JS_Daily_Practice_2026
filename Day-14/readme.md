# 🧠 JS Daily Practice – Day 14

📅 **Date:** 14 January 2026
🎯 **Goal:** Analytics & Dashboard backend simulations
📌 **Focus:** Reporting Systems + Summary Calculation + Resource Analysis + Sequential Processing

---

## ⚠️ General Rules (Must Follow)

- Solve every problem using a **function**.
- **Return** the result (❌ `console.log` is not allowed).
- Proper **input validation** is mandatory.
- If input is invalid → return **"Invalid Input"**.

---

## 🧩 Problem–01: Smart Home Energy Report

**Function Name:** `smartHomeEnergy()`

You are given devices in each room with their wattage.

### Input

```js
smartHomeEnergy([
  {
    room: "Living Room",
    devices: [
      { name: "TV", watts: 150 },
      { name: "AC", watts: 2000 },
    ],
  },
  { room: "Bedroom", devices: [{ name: "Lamp", watts: 40 }] },
]);
```

### Rules

- If input is not an array → return **"Invalid Input"**.
- A room is valid if:
  - `room` is string
  - `devices` is array of objects with `name` string & `watts` number
- Calculate **total watts per room**.
- Find the **device consuming the most watts**.

### Return

```js
{
    rooms: { [room]: number },
  topDevice: { name: string, watts: number }
}
```

### Example

```js
// Result:
{
  rooms: { "Living Room": 2150, "Bedroom": 40 },
  topDevice: { name: "AC", watts: 2000 }
}
```

---

## 🧩 Problem–02: Social Media Post Analytics

**Function Name:** `socialMediaAnalytics()`

You are given posts with likes and comments.

### Input

```js
socialMediaAnalytics([
  { postId: 101, likes: 120, comments: ["Good", "Nice"] },
  { postId: 102, likes: 50, comments: [] },
  { postId: 103, likes: 200, comments: ["Awesome"] },
]);
```

### Rules

- If input is not an array → return **"Invalid Input"**.
- A post is valid if:
  - `postId` is number
  - `likes` is number
  - `comments` is array of strings
- Find the **post with most likes**.
- Count **number of comments per post**.
- Calculate **total engagement** = likes + total comments.

### Return

```js
{
  mostLiked: number,
  commentCounts: { [postId]: number },
  totalEngagement: number
}
```

### Example

```js
// Result:
{
  mostLiked: 103,
  commentCounts: { 101: 2, 102: 0, 103: 1 },
  totalEngagement: 373
}
```

---

## 🧩 Problem–03: Movie Ratings Dashboard

**Function Name:** `movieRatingsDashboard()`

You are given movies with ratings.

### Input

```js
movieRatingsDashboard([
  { movie: "Inception", ratings: [9, 8, 10] },
  { movie: "Matrix", ratings: [10, 9] },
]);
```

### Rules

- If input is not an array → return **"Invalid Input"**.
- A movie is valid if:
  - `movie` is string
  - `ratings` is array of numbers
- Calculate **average rating per movie**.
- Identify the **top-rated movie**.

### Return

```js
{
  topMovie: string,
  avgRatings: { [movie]: number },
  totalRatings: number
}
```

### Example

```js
// Result:
{
  topMovie: "Matrix",
  avgRatings: { Inception: 9, Matrix: 9.5 },
  totalRatings: 5
}
```

---

## 🧩 Problem–04: Online Store Revenue Summary

**Function Name:** `onlineStoreRevenue()`

You are given products with category and price.

### Input

```js
onlineStoreRevenue([
  { product: "Laptop", category: "Electronics", price: 1000 },
  { product: "Mouse", category: "Electronics", price: 50 },
  { product: "Shirt", category: "Clothing", price: 30 },
]);
```

### Rules

- If input is not an array → return **"Invalid Input"**.
- A product is valid if:
  - `product` is string
  - `category` is string
  - `price` is number
- Calculate **total revenue per category** and **total revenue**.

### Return

```js
{
  totalRevenue: number,
  revenueByCategory: { [category]: number }
}
```

### Example

```js
// Result:
{
  totalRevenue: 1080,
  revenueByCategory: { Electronics: 1050, Clothing: 30 }
}
```

---

## 🧩 Problem–05: Scholarship Allocation System

**Function Name:** `scholarshipAllocation()`

You are given scholarship slots and student applications.

### Input

```js
scholarshipAllocation(2, [
  { name: "Ahsan", gpa: 4.8 },
  { name: "Karim", gpa: 3.6 },
  { name: "Rahim", gpa: 4.2 },
]);
```

### Rules

- If `slots` is not a number or `applications` is not an array → return **"Invalid Input"**.
- An application is valid if:
  - `name` is string
  - `gpa` is number
- Approve only if **GPA ≥ 4.0**.
- Each approval consumes **1 slot**.
- Process applications sequentially.

### Return

```js
{
  approved: string[],
  rejected: string[],
  remainingSlots: number
}
```

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
