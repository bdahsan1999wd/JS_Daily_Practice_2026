# 💥 🧠 JS DAILY PRACTICE – DAY 44

📅 **Goal:** Election Systems & Voting Logic
🎯 **Focus:** Vote Counting • Eligibility • Security • Result Analysis

---

## ⚠️ General Rules

- Solve every problem using a **function**.
- **Return** the result (❌ do not use `console.log` inside the function).
- Proper **input validation** is mandatory.
- If input is invalid → return `"Invalid Input"`.

---

## 🧩 PROBLEM–01: 🗳️ Election Result Tally

⚠️ **Function Name Must be `countVotes()`**

An automated system to count votes for three specific candidates in a local election.

| Input      | `votes` (Array of strings - candidate names: "A", "B", "C").   |
| :--------- | :------------------------------------------------------------- |
| **Output** | Return an object: `{ "A": number, "B": number, "C": number }`. |

**Rules:**

- Count only valid votes for candidates `"A"`, `"B"`, and `"C"`.
- Ignore any other strings in the array (Invalid votes).
- If no valid votes are found, the count for that candidate should be `0`.

| Challenge 📢 | `votes` must be a non-empty array. Each element must be a string. |
| :----------- | :---------------------------------------------------------------- |

**Sample Input & Output:**

- `countVotes(["A", "B", "A", "C", "D"])` → `{ "A": 2, "B": 1, "C": 1 }`
- `countVotes(123)` → `"Invalid Input"`

---

## 🧩 PROBLEM–02: 🛂 Voter Eligibility Checker

⚠️ **Function Name Must be `isEligibleToVote()`**

A logic gate to determine if a citizen is allowed to cast their ballot.

| Input      | `age` (number), `isCitizen` (boolean), and `isRegistered` (boolean). |
| :--------- | :------------------------------------------------------------------- |
| **Output** | Return `"Eligible"`, `"Not Eligible"`, or `"Registration Required"`. |

**Rules:**

- **Age Requirement:** Must be at least 18 years old.
- **Criteria:**
  - If `age < 18` or `isCitizen` is false: return `"Not Eligible"`.
  - If `age >= 18`, `isCitizen` is true, but `isRegistered` is false: return `"Registration Required"`.
  - If all conditions are met: return `"Eligible"`.

| Challenge 📢 | `age` must be (0-120). `isCitizen` and `isRegistered` must be strictly booleans. |
| :----------- | :------------------------------------------------------------------------------- |

**Sample Input & Output:**

- `isEligibleToVote(20, true, false)` → `"Registration Required"`
- `isEligibleToVote(-5, true, true)` → `"Invalid Input"`

---

## 🧩 PROBLEM–03: 🏛️ Parliamentary Seat Allocation

⚠️ **Function Name Must be `allocateSeats()`**

A system to calculate seats in a parliament based on a party's vote percentage.

| Input      | `votePercentage` (number) and `totalSeats` (number). |
| :--------- | :--------------------------------------------------- |
| **Output** | Return the number of seats (number).                 |

**Rules:**

- **Threshold:** A party must have at least **5%** of the total votes to qualify for any seats.
- **Allocation:** If they pass the threshold, seats = `Math.floor((votePercentage / 100) * totalSeats)`.
- **Zero Case:** If they don't pass the 5% threshold, return `0`.

| Challenge 📢 | `votePercentage` (0-100) and `totalSeats` (1-1000) must be valid numbers. |
| :----------- | :------------------------------------------------------------------------ |

**Sample Input & Output:**

- `allocateSeats(12, 300)` → `36`
- `allocateSeats(105, 300)` → `"Invalid Input"`

---

## 🧩 PROBLEM–04: 🛡️ Double-Voting Detector

⚠️ **Function Name Must be `detectFraud()`**

A security check to ensure a voter doesn't vote more than once in a digital booth.

| Input      | `voterId` (string) and `votedList` (Array of strings). |
| :--------- | :----------------------------------------------------- |
| **Output** | Return `true` (if fraud detected) or `false`.          |

**Rules:**

- If the `voterId` already exists inside the `votedList`, return `true` (Fraud).
- If the `voterId` is not in the list, return `false` (Clean).

| Challenge 📢 | `voterId` must be a non-empty string. `votedList` must be an array. |
| :----------- | :------------------------------------------------------------------ |

**Sample Input & Output:**

- `detectFraud("V101", ["V102", "V105", "V101"])` → `true`
- `detectFraud("", ["V101"])` → `"Invalid Input"`

---

## 🧩 PROBLEM–05: 🏆 Election Winner Proclaimer

⚠️ **Function Name Must be `getWinner()`**

A final tally system to announce the winner or a draw.

| Input      | `results` (Object: `{ candidateName: voteCount }`). |
| :--------- | :-------------------------------------------------- |
| **Output** | Return `"Winner: [Name]"` or `"Draw"`.              |

**Rules:**

- Find the candidate with the highest number of votes.
- If there is a tie for the highest vote count, return `"Draw"`.

| Challenge 📢 | `results` must be an object. All `voteCount` values must be non-negative numbers. |
| :----------- | :-------------------------------------------------------------------------------- |

**Sample Input & Output:**

- `getWinner({ "Rahim": 50, "Karim": 80, "Sonia": 80 })` → `"Draw"`
- `getWinner({ "Rahim": 100, "Karim": "80" })` → `"Invalid Input"`

---
