# 💥 🧠 JS DAILY PRACTICE – DAY 33

📅 **Goal:** Smart System Automation & Validation
🎯 **Focus:** System states • Access control • Financial validation • Surge logic

---

## ⚠️ General Rules

- Solve every problem using a **function**.
- **Return** the result (❌ do not use `console.log` inside the function).
- Proper **input validation** is mandatory.
- If input is invalid → return `"Invalid Input"`.

---

## 🧩 PROBLEM–01: 🛗 Smart Elevator Priority System

⚠️ **Function Name Must be `elevatorController()`**

You are designing logic for an elevator that handles floor requests and VIP priority.

| Input      | The function takes three inputs: `currentFloor` (number), `targetFloor` (number), and `isVIP` (boolean). |
| :--------- | :------------------------------------------------------------------------------------------------------- |
| **Output** | Determine the direction, movement status, and priority level. Return an object.                          |

**Rules:**

- Floors must be between **0 and 20**.
- If `targetFloor > currentFloor`, direction is `"Up"`.
- If `targetFloor < currentFloor`, direction is `"Down"`.
- If `targetFloor === currentFloor`, `move` should be `false`.
- If `isVIP` is true, priority is `"High"`, otherwise `"Normal"`.

| Challenge 📢 | If floors are outside the 0-20 range or types are incorrect, return `"Invalid Input"`. |
| :----------- | :------------------------------------------------------------------------------------- |

**Sample Input & Output:**

- `elevatorController(5, 10, false)` → `{ direction: "Up", move: true, priority: "Normal" }`
- `elevatorController(12, 12, true)` → `{ direction: "Stationary", move: false, priority: "High" }`

---

## 🧩 PROBLEM–02: 🏧 Smart ATM Withdrawal Validator

⚠️ **Function Name Must be `atmValidator()`**

Check if a user can withdraw money based on balance and daily limits.

| Input      | The function takes three inputs: `balance` (number), `requestAmount` (number), and `dailyLimit` (number). |
| :--------- | :-------------------------------------------------------------------------------------------------------- |
| **Output** | Validate the request and return the success status and remaining balance in an object.                    |

**Rules:**

- `requestAmount` must be a multiple of **500** (e.g., 500, 1000, 1500).
- `requestAmount` cannot exceed the `balance`.
- `requestAmount` cannot exceed the `dailyLimit`.
- If successful, subtract `requestAmount` from `balance`.

| Challenge 📢 | All inputs must be numbers $\ge 0$. If any condition fails (like not a multiple of 500), return `{ success: false, message: "Transaction Failed" }`. If types are wrong, return `"Invalid Input"`. |
| :----------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |

**Sample Input & Output:**

- `atmValidator(15000, 2000, 5000)` → `{ success: true, remainingBalance: 13000 }`
- `atmValidator(10000, 1200, 5000)` → `{ success: false, message: "Transaction Failed" }`

---

## 🧩 PROBLEM–03: 🚗 Smart Ride Fare Calculator

⚠️ **Function Name Must be `fareCalculator()`**

Calculate ride-sharing fares considering distance and peak hour surge.

| Input      | The function takes three inputs: `distance` (km number), `isPeakHour` (boolean), and `promoCode` (string). |
| :--------- | :--------------------------------------------------------------------------------------------------------- |
| **Output** | Calculate the final fare and return an object showing the amount and if surge was applied.                 |

**Rules:**

- Base fare is **50 TK**. Per km rate is **20 TK**.
- Total Fare = Base Fare + (Distance \* 20).
- If `isPeakHour` is true, add a **30% surge** to the total fare.
- If `promoCode` is `"SAVE10"`, subtract **10 TK** from the final calculated fare.
- The final fare cannot be less than **0**.

| Challenge 📢 | `distance` must be a number $> 0$. Return `"Invalid Input"` for incorrect types or invalid distance. |
| :----------- | :--------------------------------------------------------------------------------------------------- |

**Sample Input & Output:**

- `fareCalculator(10, true, "SAVE10")` → `{ fare: 315, surgeApplied: true }`
- `fareCalculator(5, false, "NONE")` → `{ fare: 150, surgeApplied: false }`

---

## 🧩 PROBLEM–04: 🔑 Smart Subscription Access Manager

⚠️ **Function Name Must be `subscriptionManager()`**

Manage user access based on subscription days left and payment status.

| Input      | The function takes three inputs: `daysLeft` (number), `isAutoRenewalOn` (boolean), and `paymentFailed` (boolean). |
| :--------- | :---------------------------------------------------------------------------------------------------------------- |
| **Output** | Determine the access type and status message. Return an object.                                                   |

**Rules:**

- If `daysLeft > 0` and `paymentFailed` is false, access is `"Full"` and status is `"Active"`.
- If `daysLeft === 0` and `isAutoRenewalOn` is true and `paymentFailed` is false, access is `"Full"` and status is `"Renewing"`.
- If `paymentFailed` is true, access is `"Limited"` and status is `"Grace Period"`.
- If `daysLeft === 0` and `isAutoRenewalOn` is false, access is `"None"` and status is `"Expired"`.

| Challenge 📢 | `daysLeft` must be $\ge 0$. Any invalid type must return `"Invalid Input"`. |
| :----------- | :-------------------------------------------------------------------------- |

**Sample Input & Output:**

- `subscriptionManager(0, true, true)` → `{ access: "Limited", status: "Grace Period" }`
- `subscriptionManager(10, true, false)` → `{ access: "Full", status: "Active" }`

---

## 🧩 PROBLEM–05: 🎓 Smart Exam Result Analyzer

⚠️ **Function Name Must be `examAnalyzer()`**

Analyze student marks and determine if they passed based on strict criteria.

| Input      | The function takes two inputs: `scores` (Array of numbers) and `attendance` (number percentage). |
| :--------- | :----------------------------------------------------------------------------------------------- |
| **Output** | Determine the result ("Pass" or "Fail") and return it with the original scores.                  |

**Rules:**

- To pass, the **average** of `scores` must be $\ge 50$ AND `attendance` must be $\ge 75$.
- **Critical Failure:** If any single subject score in the array is **less than 33**, the result is `"Fail"` regardless of the average or attendance.
- All scores in the array must be between 0 and 100.

| Challenge 📢 | If `scores` is not an array, `attendance` is not 0-100, or any score is invalid, return `"Invalid Input"`. |
| :----------- | :--------------------------------------------------------------------------------------------------------- |

**Sample Input & Output:**

- `examAnalyzer([50, 60, 65], 80)` → `{ result: "Pass", finalScores: [50, 60, 65] }`
- `examAnalyzer([80, 20, 90], 90)` → `{ result: "Fail", finalScores: [80, 20, 90] }`

---
