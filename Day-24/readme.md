# 💥 🧠 JS DAILY PRACTICE – DAY 24

📅 **Goal:** Build strong algorithmic thinking for interviews
🎯 **Focus:** Greedy + Heap + HashMap + Sliding Window + Binary Search on Answer

---

## ⚠️ General Rules

- Solve every problem using a **function**
- **Return** the result (❌ do not use `console.log`)
- Proper **input validation** is mandatory
- If input is invalid → return `"Invalid Input"`

---

## 🧩 PROBLEM–01: 🕒 Minimum Meeting Rooms Required

**Function Name:** `minMeetingRooms(intervals)`

### Description

You are given a list of meeting time intervals. Each interval is `[start, end]`.

Find the **minimum number of meeting rooms** required so that all meetings can take place without conflicts.

### Input Example

```js
minMeetingRooms([
  [1, 4],
  [2, 5],
  [7, 9],
  [3, 6],
]);
```

### Rules

- Input must be an array of valid intervals `[start, end]`
- `start < end` for every interval
- If input is not an array of valid intervals → return `"Invalid Input"`
- If the array is empty → return `0`

### Output

```js
3;
```

---

## 🧩 PROBLEM–02: 🔥 Top K Frequent Elements

**Function Name:** `topKFrequent(nums, k)`

### Description

Given an array of numbers, return the **top K most frequent elements**.

### Input Example

```js
topKFrequent([1, 1, 1, 2, 2, 3, 3, 3, 3, 4], 2);
```

### Rules

- Input must be an array of numbers
- `k` must be a positive number
- If input is invalid → return `"Invalid Input"`
- If `k` is greater than the number of unique elements → return `"Invalid Input"`
- Solution should be **O(N log K)** or better

### Output

```js
[3, 1];
```

---

## 🧩 PROBLEM–03: 🪟 Longest Subarray With At Most K Distinct Numbers

**Function Name:** `longestKDistinct(nums, k)`

### Description

Given an array of numbers, find the **length of the longest subarray** that contains **at most K distinct numbers**.

### Input Example

```js
longestKDistinct([1, 2, 1, 2, 3, 3, 4, 5], 2);
```

### Rules

- Input must be an array of numbers
- `k` must be a non-negative integer
- If input is invalid → return `"Invalid Input"`
- If `k === 0` → return `0`

### Output

```js
4;
```

---

## 🧩 PROBLEM–04: 📦 Minimum Capacity to Ship Packages Within D Days

**Function Name:** `minShipCapacity(weights, days)`

### Description

You are given an array `weights` where `weights[i]` is the weight of the i-th package.

Packages must be shipped **in order** within `days` days.

Return the **minimum ship capacity** required to ship all packages within the given days.

### Input Example

```js
minShipCapacity([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 5);
```

### Rules

- Input must be an array of positive numbers
- `days` must be a positive integer
- Each day, you can load packages up to the ship’s capacity
- Packages cannot be split
- Use **Binary Search on Answer**
- If input is invalid → return `"Invalid Input"`

### Output

```js
15;
```

---

## 🧩 PROBLEM–05: ⚡ Task Scheduler With Cooldown

**Function Name:** `taskScheduler(tasks, n)`

### Description

You are given a list of tasks represented by capital letters. The same task cannot be executed again until **at least `n` time units** have passed.

Each task takes **1 unit of time**.

Return the **minimum number of time units** required to finish all tasks.

### Input Example

```js
taskScheduler(["A", "A", "A", "B", "B", "B"], 2);
```

### Rules

- Input must be an array of strings representing tasks
- `n` must be a non-negative integer
- Each task takes 1 unit of time
- The same task cannot be executed again until at least `n` time units have passed
- Tasks can be arranged in any order to minimize total time
- If input is invalid → return `"Invalid Input"`

### Output

```js
8;
```

---
