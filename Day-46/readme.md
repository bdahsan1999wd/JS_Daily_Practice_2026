# 🏙️ JS DAILY PRACTICE – DAY 46

📅 **Goal:** Digital City Infrastructure & Resident Services
🎯 **Focus:** Data Filtering • Status Tracking • Subscription Logic • Security Clearance

---

## ⚠️ General Rules

- Solve every problem using a **function**.
- **Return** the result (❌ do not use `console.log` inside the function).
- Proper **input validation** is mandatory.
- If input is invalid → return `"Invalid Input"`.

---

## 🧩 PROBLEM–01: 🅿️ Smart Parking Availability

⚠️ **Function Name Must be `checkParking()`**

A digital sensor system for a city parking garage to guide drivers to available spots.

| Input      | `parkingSlots` (Array of booleans: `true` for occupied, `false` for empty). |
| :--------- | :-------------------------------------------------------------------------- |
| **Output** | Return the index (number) of the FIRST available spot.                      |

**Rules:**

- Find the first index where the value is `false`.
- If all spots are occupied (`true`), return `"Full"`.

| Challenge 📢 | `parkingSlots` must be a non-empty array. Each element must be a boolean. |
| :----------- | :------------------------------------------------------------------------ |

**Sample Input & Output:**

- `checkParking([true, true, false, true])` → `2`
- `checkParking([true, true])` → `"Full"`
- `checkParking("none")` → `"Invalid Input"`

---

## 🧩 PROBLEM–02: 🌐 Public Wi-Fi Access

⚠️ **Function Name Must be `getWifiAccess()`**

The city provides free Wi-Fi, but access speed depends on the user's "Resident Status."

| Input      | `isResident` (boolean) and `dataUsedGB` (number).     |
| :--------- | :---------------------------------------------------- |
| **Output** | Return `"High Speed"`, `"Throttled"`, or `"Blocked"`. |

**Rules:**

- **Residents:** If `dataUsedGB <= 50` return `"High Speed"`, otherwise `"Throttled"`.
- **Non-Residents:** If `dataUsedGB <= 10` return `"High Speed"`, otherwise `"Blocked"`.

| Challenge 📢 | `isResident` must be a boolean. `dataUsedGB` must be a non-negative number. |
| :----------- | :-------------------------------------------------------------------------- |

**Sample Input & Output:**

- `getWifiAccess(true, 55)` → `"Throttled"`
- `getWifiAccess(false, 15)` → `"Blocked"`
- `getWifiAccess("yes", 5)` → `"Invalid Input"`

---

## 🧩 PROBLEM–03: 🚇 Metro Card Balance Alert

⚠️ **Function Name Must be `checkMetroBalance()`**

An automated gate system that checks if a commuter has enough balance for a trip.

| Input      | `balance` (number) and `zoneDistance` (number).           |
| :--------- | :-------------------------------------------------------- |
| **Output** | Return `"Proceed"`, `"Low Balance"`, or `"Insufficient"`. |

**Rules:**

- **Trip Cost:** Calculated as `$2.50` base + `$0.50` per `zoneDistance`.
- If `balance` is >= `Trip Cost`, return `"Proceed"`.
- If `balance` is < `Trip Cost` but > `$5.00`, return `"Low Balance"`.
- Otherwise, return `"Insufficient"`.

| Challenge 📢 | Both inputs must be non-negative numbers. |
| :----------- | :---------------------------------------- |

**Sample Input & Output:**

- `checkMetroBalance(10, 5)` → `"Proceed"` (Cost is 2.5 + 2.5 = 5)
- `checkMetroBalance(4, 10)` → `"Insufficient"`

---

## 🧩 PROBLEM–04: 🏢 Building Security Clearance

⚠️ **Function Name Must be `verifyClearance()`**

A digital ID scanner for smart government buildings.

| Input      | `userRole` (string) and `accessLevel` (number 1-5). |
| :--------- | :-------------------------------------------------- |
| **Output** | Return `true` (Access Granted) or `false` (Denied). |

**Rules:**

- **"Admin"** role: Access granted if `accessLevel >= 1`.
- **"Staff"** role: Access granted if `accessLevel >= 3`.
- **"Visitor"** role: Access granted ONLY if `accessLevel` is exactly `5`.

| Challenge 📢 | `userRole` must be one of the three strings above. `accessLevel` must be an integer 1-5. |
| :----------- | :--------------------------------------------------------------------------------------- |

**Sample Input & Output:**

- `verifyClearance("Staff", 2)` → `false`
- `verifyClearance("Visitor", 5)` → `true`
- `verifyClearance("Manager", 5)` → `"Invalid Input"`

---

## 🧩 PROBLEM–05: 🏥 Vaccine Appointment Eligibility

⚠️ **Function Name Must be `isEligibleForVaccine()`**

The city Health Dept. is prioritizing specific age groups for a new health drive.

| Input      | `age` (number) and `hasMedicalCondition` (boolean). |
| :--------- | :-------------------------------------------------- |
| **Output** | Return `"Priority"`, `"Eligible"`, or `"Waitlist"`. |

**Rules:**

- If `age >= 65` or `hasMedicalCondition` is `true`, return `"Priority"`.
- If `age` is between `18` and `64` (inclusive), return `"Eligible"`.
- If `age < 18`, return `"Waitlist"`.

| Challenge 📢 | `age` must be (0-120). `hasMedicalCondition` must be a boolean. |
| :----------- | :-------------------------------------------------------------- |

**Sample Input & Output:**

- `isEligibleForVaccine(25, true)` → `"Priority"`
- `isEligibleForVaccine(15, false)` → `"Waitlist"`
- `isEligibleForVaccine(300, false)` → `"Invalid Input"`

---
