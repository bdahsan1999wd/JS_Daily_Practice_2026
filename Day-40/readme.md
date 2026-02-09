# 💥 🧠 JS DAILY PRACTICE – DAY 40

📅 **Goal:** National Digitalization & Automation Logic
🎯 **Focus:** Governance • Social Safety • Law • Health • Utility

---

## ⚠️ General Rules

- Solve every problem using a **function**.
- **Return** the result (❌ do not use `console.log` inside the function).
- Proper **input validation** is mandatory.
- If input is invalid → return `"Invalid Input"`.

---

## 🧩 PROBLEM–01: 🏛️ National Pension Eligibility

⚠️ **Function Name Must be `checkPensionEligibility()`**

Automatic system to check if a citizen is eligible for the national pension scheme.

| Input      | `age` (number), `yearsOfWork` (number), and `isDisabled` (boolean).          |
| :--------- | :--------------------------------------------------------------------------- |
| **Output** | Return a string: `"Full Pension"`, `"Partial Pension"`, or `"Not Eligible"`. |

**Rules:**

- **Full Pension:** If `age` >= 65 OR (`age` >= 50 AND `isDisabled` is true).
- **Partial Pension:** If `age` is between 60-64 AND `yearsOfWork` >= 20.
- **Not Eligible:** Anything else.

| Challenge 📢 | `age` and `yearsOfWork` must be non-negative numbers. |
| :----------- | :---------------------------------------------------- |

**Sample Input & Output:**

- `checkPensionEligibility(65, 10, false)` → `"Full Pension"`
- `checkPensionEligibility(61, 25, false)` → `"Partial Pension"`

---

## 🧩 PROBLEM–02: 🚔 Smart Traffic Violation System

⚠️ **Function Name Must be `generateTrafficFine()`**

An automated system for traffic cameras to calculate fines based on violation types.

| Input      | `violationType` (string) and `isRepeatOffense` (boolean). |
| :--------- | :-------------------------------------------------------- |
| **Output** | Return the total fine amount (number).                    |

**Rules:**

- **Base Fines:** - `"Speeding"` = 2000 TK
  - `"Signal Jump"` = 1500 TK
  - `"Wrong Side"` = 3000 TK
- **Repeat Penalty:** If `isRepeatOffense` is true, add a **50% surcharge** to the base fine.
- **Processing Fee:** Add a flat **100 TK** digital processing fee to every fine.

| Challenge 📢 | `violationType` must be one of the three listed above. |
| :----------- | :----------------------------------------------------- |

**Sample Input & Output:**

- `generateTrafficFine("Speeding", false)` → `2100` (2000 + 100)
- `generateTrafficFine("Signal Jump", true)` → `2350` (1500 + 750 + 100)

---

## 🧩 PROBLEM–03: 💧 Smart Water Billing (Subsidy Logic)

⚠️ **Function Name Must be `calculateWaterBill()`**

A national utility system that gives subsidies to low-income households.

| Input      | `unitsUsed` (number) and `isLowIncome` (boolean). |
| :--------- | :------------------------------------------------ |
| **Output** | Return the total bill (number).                   |

**Rules:**

- **Tiered Rates:**
  - First 50 units: 10 TK/unit.
  - Above 50 units: 20 TK/unit for the extra units.
- **Subsidy:** If `isLowIncome` is true, the total bill is reduced by **30%**.
- **Minimum Bill:** Every household must pay at least **100 TK**.

| Challenge 📢 | `unitsUsed` must be a non-negative number. |
| :----------- | :----------------------------------------- |

**Sample Input & Output:**

- `calculateWaterBill(40, false)` → `400`
- `calculateWaterBill(60, true)` → `490` (50*10 + 10*20 = 700; 700 - 30% = 490)

---

## 🧩 PROBLEM–04: 🏥 Emergency Bed Allocation

⚠️ **Function Name Must be `allocateEmergencyBed()`**

Automated hospital system to prioritize patients for limited ICU/Emergency beds.

| Input      | `oxygenLevel` (number), `age` (number), and `hasEmergencyCode` (boolean). |
| :--------- | :------------------------------------------------------------------------ |
| **Output** | Return the priority level: `"Critical"`, `"High"`, or `"Stable"`.         |

**Rules:**

- **Critical:** If `oxygenLevel` < 90 OR `hasEmergencyCode` is true.
- **High:** If `oxygenLevel` is between 90-94 AND `age` > 70.
- **Stable:** Anything else.

| Challenge 📢 | `oxygenLevel` (0-100) and `age` must be valid numbers. |
| :----------- | :----------------------------------------------------- |

**Sample Input & Output:**

- `allocateEmergencyBed(88, 45, false)` → `"Critical"`
- `allocateEmergencyBed(92, 75, false)` → `"High"`

---

## 🧩 PROBLEM–05: 🛂 Digital Passport Verification

⚠️ **Function Name Must be `verifyPassportStatus()`**

A system for immigration to check if a citizen's passport application is ready.

| Input      | `isPoliceVerified` (boolean), `hasPaidFee` (boolean), and `daysSinceApplied` (number). |
| :--------- | :------------------------------------------------------------------------------------- |
| **Output** | Return an object with `status` (string) and `canCollect` (boolean).                    |

**Rules:**

- **Conditions:** To collect a passport, `isPoliceVerified` AND `hasPaidFee` must both be true, AND `daysSinceApplied` must be at least 15.
- **Status Logic:**
  - If all conditions met: `{ status: "Ready for Collection", canCollect: true }`
  - If days < 15 but other conditions met: `{ status: "In Printing", canCollect: false }`
  - Otherwise: `{ status: "Pending Verification", canCollect: false }`

| Challenge 📢 | `daysSinceApplied` must be a non-negative number. |
| :----------- | :------------------------------------------------ |

**Sample Input & Output:**

- `verifyPassportStatus(true, true, 20)` → `{ status: "Ready for Collection", canCollect: true }`
- `verifyPassportStatus(true, true, 5)` → `{ status: "In Printing", canCollect: false }`

---
