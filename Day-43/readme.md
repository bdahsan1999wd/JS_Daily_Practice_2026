# 🇧🇩 🧠 JS DAILY PRACTICE – DAY 43

📅 **Goal:** Real-world Crisis & Management Logic
🎯 **Focus:** Election Security • Disaster Relief • Power Grid • Traffic AI • NBR Tax

---

## ⚠️ General Rules

- Solve every problem using a **function**.
- **Return** the result (❌ do not use `console.log` inside the function).
- Proper **input validation** is mandatory.
- If input is invalid → return `"Invalid Input"`.

---

## 🧩 PROBLEM–01: 🗳️ Election Booth Security

⚠️ **Function Name Must be `getBoothStatus()`**

The Election Commission needs logic to determine the security level of a polling center in real-time based on voter activity and risk factors.

| Input      | `voterTurnout` (number), `isRemoteArea` (boolean), `reportedClashes` (number) |
| :--------- | :---------------------------------------------------------------------------- |
| **Output** | Return `"Normal"`, `"High Alert"`, or `"Emergency Lockdown"`.                 |

**Rules:**

- **Emergency Lockdown:** If `reportedClashes` > 3, return `"Emergency Lockdown"` regardless of other factors.
- **High Alert:** - If `reportedClashes` is between 1 and 3 (inclusive).
  - OR if `isRemoteArea` is true AND `voterTurnout` > 500.
- **Normal:** If `reportedClashes` is 0 AND conditions for High Alert are not met.

| Challenge 📢 | `voterTurnout` and `reportedClashes` must be non-negative integers. |
| :----------- | :------------------------------------------------------------------ |

**Sample Input & Output:**

- `getBoothStatus(600, true, 0)` → `"High Alert"`
- `getBoothStatus(200, false, 4)` → `"Emergency Lockdown"`
- `getBoothStatus(300, false, 0)` → `"Normal"`

---

## 🧩 PROBLEM–02: 🍚 Digital Relief Distribution

⚠️ **Function Name Must be `calculateRelief()`**

A smart distribution system for flood-affected families to ensure fair food and water supply in regions like Sylhet or Feni.

| Input      | `familyMembers` (number), `floodLevel` (cm), `hasGovtCard` (boolean) |
| :--------- | :------------------------------------------------------------------- |
| **Output** | Return an object: `{ riceKg: number, waterLiters: number }`.         |

**Rules:**

- **Base Relief:** 10kg Rice and 5L Water per family.
- **Flood Surge:** If `floodLevel` > 200cm, add **5kg extra rice**.
- **Large Family Bonus:** If `familyMembers` > 5, add **2kg rice** for every member above 5 (e.g., 7 members = 4kg extra rice).
- **Govt Card:** If `hasGovtCard` is true, **double** the final `waterLiters`.

| Challenge 📢 | `familyMembers` must be a positive integer. `floodLevel` must be >= 0. |
| :----------- | :--------------------------------------------------------------------- |

**Sample Input & Output:**

- `calculateRelief(7, 150, false)` → `{ riceKg: 14, waterLiters: 5 }`
- `calculateRelief(4, 250, true)` → `{ riceKg: 15, waterLiters: 10 }`

---

## 🧩 PROBLEM–03: ⚡ Desko Load Shedding AI

⚠️ **Function Name Must be `shouldCutPower()`**

Smart grid logic for Dhaka city to balance electricity during extreme summer heat and prevent grid failure.

| Input      | `demandMW` (number), `supplyMW` (number), `isHospitalArea` (boolean) |
| :--------- | :------------------------------------------------------------------- |
| **Output** | Return `true` (cut power) or `false` (keep power).                   |

**Rules:**

- **Hospital Protection:** If `isHospitalArea` is true, return `false` UNLESS `demandMW` is more than **double** the `supplyMW`.
- **Deficit Logic:** If `demandMW` is more than **100MW** over the `supplyMW`, return `true`.
- **Percentage Peak:** If `demandMW` is **20% higher** than `supplyMW`, return `true`.
- **Otherwise:** Return `false`.

| Challenge 📢 | `demandMW` and `supplyMW` must be positive numbers. |
| :----------- | :-------------------------------------------------- |

**Sample Input & Output:**

- `shouldCutPower(1200, 1000, false)` → `true`
- `shouldCutPower(1200, 1000, true)` → `false`
- `shouldCutPower(2500, 1000, true)` → `true`

---

## 🧩 PROBLEM–04: 🚦 Dhaka Traffic AI Signal

⚠️ **Function Name Must be `getSignalTiming()`**

Adaptive signal timing for busy intersections like Farmgate or Shahbagh to manage election-time traffic.

| Input      | `carCount` (number), `busCount` (number), `isAmbulancePresent` (boolean) |
| :--------- | :----------------------------------------------------------------------- |
| **Output** | Return signal duration in seconds (number).                              |

**Rules:**

- **Emergency Priority:** If `isAmbulancePresent` is true, return **0** (Immediate Green).
- **Base Time:** Starts at **30 seconds**.
- **Traffic Weight:** Each car adds **2 seconds**, and each bus adds **5 seconds**.
- **Maximum Cap:** The final time cannot exceed **120 seconds**.

| Challenge 📢 | `carCount` and `busCount` must be non-negative integers. |
| :----------- | :------------------------------------------------------- |

**Sample Input & Output:**

- `getSignalTiming(10, 5, false)` → `75`
- `getSignalTiming(50, 20, false)` → `120`
- `getSignalTiming(10, 10, true)` → `0`

---

## 🧩 PROBLEM–05: 📈 NBR Income Tax Calculator

⚠️ **Function Name Must be `calculateTax()`**

Calculate annual tax based on simplified Bangladesh fiscal policy for the upcoming year.

| Input      | `monthlySalary` (number), `isFemale` (boolean), `hasInvestment` (boolean) |
| :--------- | :------------------------------------------------------------------------ |
| **Output** | Return the annual tax amount (number).                                    |

**Rules:**

- **Annual Income:** `monthlySalary * 12`.
- **Tax-Free Threshold:** Up to **350,000 TK** (but **400,000 TK** if `isFemale` is true).
- **Tax Rate:** Apply **10% tax** only on the amount _above_ the threshold.
- **Investment Rebate:** If `hasInvestment` is true, reduce the total calculated tax by **15%**.
- **Minimum Tax:** If the final calculated tax is greater than 0 but less than **5,000 TK**, the user must pay exactly **5,000 TK**.

| Challenge 📢 | `monthlySalary` must be a non-negative number. |
| :----------- | :--------------------------------------------- |

**Sample Input & Output:**

- `calculateTax(40000, false, false)` → `13000`
- `calculateTax(30000, true, false)` → `0`
- `calculateTax(32000, false, true)` → `5000`

---
