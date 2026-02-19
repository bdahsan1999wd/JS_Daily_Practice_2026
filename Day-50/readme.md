# 🌉 JS DAILY PRACTICE – DAY 50

📅 **Goal:** The Rural-Urban Bridge: Advanced Integrated Systems
🎯 **Focus:** Logic Scaling • Financial Algorithms • Resource Optimization • Data Integrity

---

## ⚠️ General Rules

- Solve every problem using a **function**.
- **Return** the result (❌ do not use `console.log` inside the function).
- Proper **input validation** is mandatory.
- If input is invalid → return `"Invalid Input"`.

---

## 🧩 PROBLEM–01: 🚚 Smart Supply Chain (Village to City)

⚠️ **Function Name Must be `calculateLogisticsCost()`**

Calculating the cost of transporting goods from village farms to urban supermarkets. Special surcharges apply for specific product types.

| Input      | `distanceKm` (number), `weightKg` (number), and `productType` (string). |
| :--------- | :---------------------------------------------------------------------- |
| **Output** | Return the final calculated cost (number).                              |

**Rules:**

- **Base Rate:** $20.00.
- **Distance Fee:** $2 per Km.
- **Weight Fee:** $5 per Kg.
- **Product Surcharges:** - If `"Perishable"`, add a **15% surcharge** to the total cost (Base + Distance + Weight).
  - If `"Electronic"`, add a flat insurance fee of **$50**.
  - For any other type, no extra charge.

| Challenge 📢 | Distance and Weight must be positive. `productType` must be a string. |
| :----------- | :-------------------------------------------------------------------- |

**Sample Input & Output:**

- `calculateLogisticsCost(10, 2, "Perishable")` → `80.5` (20 + 20 + 10 = 50 + 15% is 57.5? Check logic!)
- `calculateLogisticsCost(5, 1, "Electronic")` → `85` (20 + 10 + 5 + 50)

---

## 🧩 PROBLEM–02: 🏥 Emergency Health Referral System

⚠️ **Function Name Must be `getEmergencyAction()`**

Automated decision-making for transferring patients from rural health centers to district hospitals.

| Input      | `oxygenSat` (number), `heartRate` (number), and `hasAmbulance` (boolean). |
| :--------- | :------------------------------------------------------------------------ |
| **Output** | Return `"Critical"`, `"Wait for Transport"`, or `"Stable"`.               |

**Rules:**

- **Critical:** If `oxygenSat < 90` OR `heartRate > 120`.
- **Wait for Transport:** If the patient is `Critical` BUT `hasAmbulance` is `false`.
- **Stable:** If `oxygenSat >= 95` AND `heartRate` is between 60-100 (inclusive).
- **Monitor:** For all other middle-ground cases.

| Challenge 📢 | `oxygenSat` must be 0-100. `heartRate` must be positive. |
| :----------- | :------------------------------------------------------- |

**Sample Input & Output:**

- `getEmergencyAction(88, 130, true)` → `"Critical"`
- `getEmergencyAction(88, 130, false)` → `"Wait for Transport"`
- `getEmergencyAction(98, 75, true)` → `"Stable"`

---

## 🧩 PROBLEM–03: 💰 Rural Micro-Loan Eligibility

⚠️ **Function Name Must be `checkLoanStatus()`**

Verifying eligibility for digital micro-loans for rural entrepreneurs.

| Input      | `monthlyIncome` (number), `existingLoan` (boolean), and `creditScore` (number). |
| :--------- | :------------------------------------------------------------------------------ |
| **Output** | Return `"Approved"`, `"Under Review"`, or `"Rejected"`.                         |

**Rules:**

- **Approved:** If `monthlyIncome > 20000`, `existingLoan` is `false`, AND `creditScore > 700`.
- **Under Review:** If income is valid but `existingLoan` is `true` OR `creditScore` is between 600 and 700 (inclusive).
- **Rejected:** If income is below 15,000 OR `creditScore` is below 600.

| Challenge 📢 | `creditScore` must be between 300-850. `monthlyIncome` must be non-negative. |
| :----------- | :--------------------------------------------------------------------------- |

**Sample Input & Output:**

- `checkLoanStatus(25000, false, 750)` → `"Approved"`
- `checkLoanStatus(10000, false, 800)` → `"Rejected"`
- `checkLoanStatus(30000, true, 650)` → `"Under Review"`

---

## 🧩 PROBLEM–04: 🛰️ Smart Irrigation Controller

⚠️ **Function Name Must be `manageIrrigation()`**

Automating irrigation using satellite data and water reserve sensors.

| Input      | `soilMoisture` (number), `isSunny` (boolean), and `waterReserveLitres` (number). |
| :--------- | :------------------------------------------------------------------------------- |
| **Output** | Return `"Full Irrigation"`, `"Controlled Drip"`, or `"No Action"`.               |

**Rules:**

- If `soilMoisture < 30` AND `waterReserveLitres > 500`:
  - If `isSunny` is `true`, return `"Full Irrigation"`.
  - If `isSunny` is `false`, return `"Controlled Drip"`.
- If `waterReserveLitres < 100`, always return `"Low Water Level"`.
- Otherwise: return `"No Action"`.

| Challenge 📢 | `soilMoisture` must be 0-100. `waterReserveLitres` cannot be negative. |
| :----------- | :--------------------------------------------------------------------- |

**Sample Input & Output:**

- `manageIrrigation(20, true, 1000)` → `"Full Irrigation"`
- `manageIrrigation(20, false, 800)` → `"Controlled Drip"`
- `manageIrrigation(40, true, 50)` → `"Low Water Level"`

---

## 🧩 PROBLEM–05: 🚆 Migrant Worker Journey Planner

⚠️ **Function Name Must be `getTravelRoute()`**

Calculating ticket prices for migrant workers traveling from villages to the city via train.

| Input      | `passengerAge` (number), `hasNID` (boolean), and `travelClass` (string). |
| :--------- | :----------------------------------------------------------------------- |
| **Output** | Return the final ticket price (number).                                  |

**Rules:**

- **Base Fare:** - `"AC"` Class: $500.
  - `"Non-AC"` Class: $200.
- **Validation:** If `hasNID` is `false`, return `"Invalid Input"` (NID is mandatory).
- **Discounts:**
  - If `passengerAge >= 60`, apply **50% discount** on base fare.
  - If `passengerAge < 12`, apply **30% discount** on base fare.
- No discount for ages 12-59.

| Challenge 📢 | Age must be between 1-110. `travelClass` must be "AC" or "Non-AC". |
| :----------- | :----------------------------------------------------------------- |

**Sample Input & Output:**

- `getTravelRoute(65, true, "AC")` → `250`
- `getTravelRoute(25, true, "Non-AC")` → `200`
- `getTravelRoute(10, false, "AC")` → `"Invalid Input"`

---
