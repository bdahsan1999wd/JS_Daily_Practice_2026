# 🗳️ JS DAILY PRACTICE – DAY 47

📅 **Goal:** Post-Election Governance & Civic Management
🎯 **Focus:** Logic Gates • Array Search • String Manipulation • Conditional Branching

---

## ⚠️ General Rules

- Solve every problem using a **function**.
- **Return** the result (❌ do not use `console.log` inside the function).
- Proper **input validation** is mandatory.
- If input is invalid → return `"Invalid Input"`.

---

## 🧩 PROBLEM–01: 🗳️ Election Result Auditor

⚠️ **Function Name Must be `auditVotes()`**

Verify the turnout statistics for a specific constituency to ensure data integrity.

| Input      | `totalVotes` (number) and `castedVotes` (number).                  |
| :--------- | :----------------------------------------------------------------- |
| **Output** | Return `"High Turnout"`, `"Moderate Turnout"`, or `"Low Turnout"`. |

**Rules:**

- **High Turnout:** If `castedVotes` is > 80% of `totalVotes`.
- **Moderate Turnout:** If `castedVotes` is between 50% and 80% (inclusive).
- **Low Turnout:** If `castedVotes` is < 50% of `totalVotes`.
- If `castedVotes` is greater than `totalVotes`, return `"Invalid Input"`.

| Challenge 📢 | Both inputs must be non-negative numbers. `totalVotes` cannot be 0. |
| :----------- | :------------------------------------------------------------------ |

**Sample Input & Output:**

- `auditVotes(1000, 900)` → `"High Turnout"`
- `auditVotes(1000, 400)` → `"Low Turnout"`
- `auditVotes(100, 150)` → `"Invalid Input"`

---

## 🧩 PROBLEM–02: 📜 Cabinet Member Verification

⚠️ **Function Name Must be `isCabinetMember()`**

Check if a specific individual is listed in the newly formed government cabinet.

| Input      | `memberList` (Array of strings) and `name` (string). |
| :--------- | :--------------------------------------------------- |
| **Output** | Return `true` or `false`.                            |

**Rules:**

- The search must be **case-insensitive** (e.g., "Hasan" should match "hasan").
- Return `true` if the name exists in the array, otherwise `false`.

| Challenge 📢 | `memberList` must be a non-empty array. `name` must be a string. |
| :----------- | :--------------------------------------------------------------- |

**Sample Input & Output:**

- `isCabinetMember(["Karim", "Rahim", "Selina"], "karim")` → `true`
- `isCabinetMember(["Karim", "Rahim"], "John")` → `false`
- `isCabinetMember("None", "Karim")` → `"Invalid Input"`

---

## 🧩 PROBLEM–03: 🏗️ Project Fund Allocation

⚠️ **Function Name Must be `calculateFund()`**

The government is allocating funds for development, but different sectors have different "Admin Fees."

| Input      | `projectType` (string) and `budget` (number). |
| :--------- | :-------------------------------------------- |
| **Output** | Return the final remaining budget (number).   |

**Rules:**

- **Education:** Deduct 5% fee.
- **Health:** Deduct 10% fee.
- **Infrastructure:** Deduct 15% fee.
- Return the amount left after the deduction.

| Challenge 📢 | `projectType` must be one of the three above. `budget` must be a positive number. |
| :----------- | :-------------------------------------------------------------------------------- |

**Sample Input & Output:**

- `calculateFund("Education", 1000)` → `950`
- `calculateFund("Infrastructure", 2000)` → `1700`
- `calculateFund("Agriculture", 1000)` → `"Invalid Input"`

---

## 🧩 PROBLEM–04: 🚔 Curfew Pass Generator

⚠️ **Function Name Must be `issuePass()`**

Issuing digital movement passes for post-election stability.

| Input      | `jobRole` (string) and `age` (number).                        |
| :--------- | :------------------------------------------------------------ |
| **Output** | Return `"Permanent Pass"`, `"Temporary Pass"`, or `"Denied"`. |

**Rules:**

- If `jobRole` is `"Doctor"` or `"Journalist"`, return `"Permanent Pass"`.
- Otherwise, if `age >= 18`, return `"Temporary Pass"`.
- If `age < 18`, return `"Denied"`.

| Challenge 📢 | `jobRole` must be a string. `age` must be a positive integer. |
| :----------- | :------------------------------------------------------------ |

**Sample Input & Output:**

- `issuePass("Doctor", 15)` → `"Permanent Pass"`
- `issuePass("Student", 20)` → `"Temporary Pass"`
- `issuePass("Student", 16)` → `"Denied"`

---

## 🧩 PROBLEM–05: 📢 Complaint Priority Sorter

⚠️ **Function Name Must be `getComplaintPriority()`**

Citizens are filing digital complaints. Sort them based on urgency and category.

| Input      | `category` (string) and `isUrgent` (boolean).    |
| :--------- | :----------------------------------------------- |
| **Output** | Return `"Emergency"`, `"High"`, or `"Standard"`. |

**Rules:**

- If `category` is `"Electricity"` AND `isUrgent` is `true`, return `"Emergency"`.
- If `category` is `"Electricity"` (not urgent) OR any other valid category (`"Water"`, `"Internet"`) is `isUrgent`, return `"High"`.
- Otherwise, return `"Standard"`.

| Challenge 📢 | `category` must be one of the three valid strings. `isUrgent` must be a boolean. |
| :----------- | :------------------------------------------------------------------------------- |

**Sample Input & Output:**

- `getComplaintPriority("Electricity", true)` → `"Emergency"`
- `getComplaintPriority("Water", true)` → `"High"`
- `getComplaintPriority("Internet", false)` → `"Standard"`

---
