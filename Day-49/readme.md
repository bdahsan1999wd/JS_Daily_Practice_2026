# 🌾 JS DAILY PRACTICE – DAY 49

📅 **Goal:** Smart Digital Village: Rural Innovation & Empowerment
🎯 **Focus:** Logic Thresholds • Tiered Validation • Boolean Logic • Conditional Priority

---

## ⚠️ General Rules

- Solve every problem using a **function**.
- **Return** the result (❌ do not use `console.log` inside the function).
- Proper **input validation** is mandatory.
- If input is invalid → return `"Invalid Input"`.

---

## 🧩 PROBLEM–01: 🚜 Crop Health Monitor

⚠️ **Function Name Must be `getCropStatus()`**

An IoT sensor in a village paddy field checks soil nitrogen levels and moisture to give farmers advice.

| Input      | `nitrogen` (number 0-100) and `moisture` (number 0-100). |
| :--------- | :------------------------------------------------------- |
| **Output** | Return `"Healthy"`, `"Add Fertilizer"`, or `"Irrigate"`. |

**Rules:**

- If `moisture < 30`, return `"Irrigate"`.
- If `moisture >= 30` **AND** `nitrogen < 40`, return `"Add Fertilizer"`.
- If `moisture >= 30` **AND** `nitrogen >= 40`, return `"Healthy"`.

| Challenge 📢 | Both inputs must be numbers between 0 and 100. |
| :----------- | :--------------------------------------------- |

**Sample Input & Output:**

- `getCropStatus(50, 20)` → `"Irrigate"`
- `getCropStatus(20, 45)` → `"Add Fertilizer"`
- `getCropStatus(110, 50)` → `"Invalid Input"`

---

## 🧩 PROBLEM–02: 🥛 Milk Collection Quality Check

⚠️ **Function Name Must be `getMilkGrade()`**

A digital dairy collection point grades milk based on fat percentage and temperature.

| Input      | `fatContent` (number) and `tempCelsius` (number). |
| :--------- | :------------------------------------------------ |
| **Output** | Return `"Grade A"`, `"Grade B"`, or `"Rejected"`. |

**Rules:**

- **Grade A:** `fatContent > 4.5` **AND** `tempCelsius <= 4`.
- **Grade B:** `fatContent` is between `3.0` and `4.5` (inclusive) **AND** `tempCelsius <= 10`.
- **Rejected:** Any other combination (too warm or too low fat).

| Challenge 📢 | `fatContent` must be 0-10. `tempCelsius` must be -5 to 40. |
| :----------- | :--------------------------------------------------------- |

**Sample Input & Output:**

- `getMilkGrade(5.0, 3)` → `"Grade A"`
- `getMilkGrade(3.5, 12)` → `"Rejected"`
- `getMilkGrade(2.0, 4)` → `"Rejected"`

---

## 🧩 PROBLEM–03: 🏥 Telemedicine Priority

⚠️ **Function Name Must be `getClinicPriority()`**

A rural health center uses a digital queue system to prioritize patients for remote doctor calls.

| Input      | `age` (number) and `hasFever` (boolean). |
| :--------- | :--------------------------------------- |
| **Output** | Return `"High"`, `"Medium"`, or `"Low"`. |

**Rules:**

- If `age >= 60` **OR** `age <= 5`, return `"High"`.
- If `age` is between `6` and `59` (inclusive):
  - If `hasFever` is `true`, return `"Medium"`.
  - If `hasFever` is `false`, return `"Low"`.

| Challenge 📢 | `age` must be a positive integer (1-110). `hasFever` must be boolean. |
| :----------- | :-------------------------------------------------------------------- |

**Sample Input & Output:**

- `getClinicPriority(70, false)` → `"High"`
- `getClinicPriority(25, true)` → `"Medium"`
- `getClinicPriority(-5, true)` → `"Invalid Input"`

---

## 🧩 PROBLEM–04: ☀️ Solar Microgrid Billing

⚠️ **Function Name Must be `calculateSolarBill()`**

A smart village microgrid charges houses for electricity used from communal solar panels.

| Input      | `unitsUsed` (number) and `isOffPeak` (boolean). |
| :--------- | :---------------------------------------------- |
| **Output** | Return the total cost (number).                 |

**Rules:**

- **Standard Rate:** $5 per unit.
- **Off-Peak Discount:** If `isOffPeak` is `true`, the user gets a **20% discount** on the total bill.
- **Minimum Bill:** Every active connection must pay at least **$50**, even if usage is low.

| Challenge 📢 | `unitsUsed` must be 0 or higher. `isOffPeak` must be boolean. |
| :----------- | :------------------------------------------------------------ |

**Sample Input & Output:**

- `calculateSolarBill(20, false)` → `100`
- `calculateSolarBill(5, true)` → `50` (Calculation is 25 - discount, but minimum 50 applies)
- `calculateSolarBill(30, true)` → `120`

---

## 🧩 PROBLEM–05: 🐟 Smart Pond Aerator

⚠️ **Function Name Must be `toggleAerator()`**

Automated oxygen management for fish farming ponds to prevent fish mortality.

| Input      | `oxygenLevel` (number mg/L) and `fishDensity` (number). |
| :--------- | :------------------------------------------------------ |
| **Output** | Return `true` (Turn On) or `false` (Turn Off).          |

**Rules:**

- If `oxygenLevel < 4.0`, return `true` (Always turn on if oxygen is dangerously low).
- If `oxygenLevel` is between `4.0` and `6.0`:
  - If `fishDensity > 50` (high density), return `true`.
  - Otherwise, return `false`.
- If `oxygenLevel > 6.0`, return `false` (Energy saving mode).

| Challenge 📢 | `oxygenLevel` (0-15) and `fishDensity` (0-500) must be positive numbers. |
| :----------- | :----------------------------------------------------------------------- |

**Sample Input & Output:**

- `toggleAerator(5.2, 60)` → `true`
- `toggleAerator(5.2, 30)` → `false`
- `toggleAerator(8.0, 100)` → `false`

---
