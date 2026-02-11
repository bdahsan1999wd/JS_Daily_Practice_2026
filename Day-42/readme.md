# 💥 🧠 JS DAILY PRACTICE – DAY 42

📅 **Goal:** Advanced Algorithmic Decision Making
🎯 **Focus:** Movie Rating • Space Exploration • Dynamic Pricing • Cyber Security • Stock Market

---

## ⚠️ General Rules

- Solve every problem using a **function**.
- **Return** the result (❌ do not use `console.log` inside the function).
- Proper **input validation** is mandatory.
- If input is invalid → return `"Invalid Input"`.

---

## 🧩 PROBLEM–01: 🍿 AI Content Moderator

⚠️ **Function Name Must be `getMovieAccess()`**

An AI-driven streaming platform logic that determines content accessibility based on age and restrictions.

| Input      | `userAge` (number), `hasParentalControl` (boolean), and `contentRating` (string). |
| :--------- | :-------------------------------------------------------------------------------- |
| **Output** | Return `"Access Granted"`, `"Access Denied"`, or `"Require Pin"`.                 |

**Rules:**

- **Ratings:** `"G"` (General), `"PG"` (Parental Guidance), `"R"` (Restricted).
- **Access Logic:**
  - If rating is `"G"`: Return `"Access Granted"`.
  - If rating is `"PG"`: If `userAge` < 13, return `"Require Pin"`; otherwise, `"Access Granted"`.
  - If rating is `"R"`:
    - If `userAge` >= 18: `"Access Granted"`.
    - If `userAge` >= 15 AND `userAge` <= 17 AND `hasParentalControl` is true: `"Require Pin"`.
    - Otherwise: `"Access Denied"`.

| Challenge 📢 | `userAge` must be (0-100). `contentRating` must be "G", "PG", or "R". |
| :----------- | :-------------------------------------------------------------------- |

**Sample Input & Output:**

- `getMovieAccess(16, true, "R")` → `"Require Pin"`
- `getMovieAccess(12, false, "PG")` → `"Require Pin"`
- `getMovieAccess(10, false, "R")` → `"Access Denied"`

---

## 🧩 PROBLEM–02: 🚀 Mars Colony Suitability

⚠️ **Function Name Must be `checkMarsSuitability()`**

An environmental assessment system to determine if a sector on Mars is safe for human habitation.

| Input      | `oxygenLevel` (number), `temperature` (number), and `radiationShield` (boolean). |
| :--------- | :------------------------------------------------------------------------------- |
| **Output** | Return an object: `{ status: "Livable" "Hostile", alert: string }`.              |

**Rules:**

- **Livable Condition:** `oxygenLevel` >= 18 AND `temperature` is between -60 and 0 (inclusive).
- **Shield Factor:** If `radiationShield` is false, the status is always `"Hostile"`.
- **Alert Priority:**
  - If `oxygenLevel` < 18: alert is `"Oxygen Critical"`.
  - If `temperature` is out of range: alert is `"Temperature Extreme"`.
  - If both are safe AND `radiationShield` is true: status is `"Livable"`, alert is `"System Stable"`.

| Challenge 📢 | `oxygenLevel` (0-100). `temperature` must be a valid number. |
| :----------- | :----------------------------------------------------------- |

**Sample Input & Output:**

- `checkMarsSuitability(20, -30, true)` → `{ status: "Livable", alert: "System Stable" }`
- `checkMarsSuitability(15, -40, true)` → `{ status: "Hostile", alert: "Oxygen Critical" }`
- `checkMarsSuitability(25, -10, false)` → `{ status: "Hostile", alert: "Radiation Exposure" }`

---

## 🧩 PROBLEM–03: 🍔 Dynamic Food Pricing

⚠️ **Function Name Must be `calculateFoodPrice()`**

A food delivery algorithm that applies surge pricing and discounts based on external factors.

| Input      | `basePrice` (number), `distance` (km), and `isRainy` (boolean). |
| :--------- | :-------------------------------------------------------------- |
| **Output** | Return the final price (number).                                |

**Rules:**

- **Delivery Fee:** 15 TK per km.
- **Midnight Offer:** If `basePrice` > 1000, the delivery fee becomes **0 TK**.
- **Rainy Surge:** If `isRainy` is true, add a **30% surcharge** to the subtotal (basePrice + delivery fee).
- **Price Cap:** The final price cannot exceed **2x** the `basePrice`. (If it exceeds, return 2 \* basePrice).

| Challenge 📢 | `basePrice` and `distance` must be non-negative numbers. |
| :----------- | :------------------------------------------------------- |

**Sample Input & Output:**

- `calculateFoodPrice(500, 10, true)` → `845` (500 + 150 = 650; 650 + 30% = 845)
- `calculateFoodPrice(100, 20, true)` → `200` (400 + 30% = 520; capped at 2 \* 100)

---

## 🧩 PROBLEM–04: 🛡️ Cyber-Security Vault Access

⚠️ **Function Name Must be `canAccessVault()`**

A high-security logic gate for accessing a digital vault.

| Input      | `isBioVerified` (boolean), `hasKeycard` (boolean), and `isEmergencyMode` (boolean). |
| :--------- | :---------------------------------------------------------------------------------- |
| **Output** | Return `true` or `false`.                                                           |

**Rules:**

- **Security Breach:** If `isEmergencyMode` is true, `isBioVerified` is false, and `hasKeycard` is true, return `false`.
- **Emergency Access:** If `isEmergencyMode` is true AND `isBioVerified` is true, return `true`.
- **Normal Access:** If `isEmergencyMode` is false, both `isBioVerified` AND `hasKeycard` must be true.
- **Otherwise:** Return `false`.

| Challenge 📢 | All inputs must be strictly boolean. |
| :----------- | :----------------------------------- |

**Sample Input & Output:**

- `canAccessVault(true, false, true)` → `true`
- `canAccessVault(false, true, true)` → `false`
- `canAccessVault(true, true, false)` → `true`

---

## 🧩 PROBLEM–05: 📈 Stock Market Trade Validator

⚠️ **Function Name Must be `shouldITrade()`**

A logic-based trading bot that decides whether to Buy, Sell, or Hold a stock.

| Input      | `currentPrice` (number), `previousPrice` (number), and `isMarketOpen` (boolean). |
| :--------- | :------------------------------------------------------------------------------- |
| **Output** | Return `"Buy"`, `"Sell"`, `"Hold"`, or `"Market Closed"`.                        |

**Rules:**

- **Market Status:** If `isMarketOpen` is false, return `"Market Closed"`.
- **Buy Logic:** If `currentPrice` is **10% or more lower** than `previousPrice`.
- **Sell Logic:** If `currentPrice` is **15% or more higher** than `previousPrice`.
- **Hold:** In all other cases.

| Challenge 📢 | `currentPrice` and `previousPrice` must be positive numbers. |
| :----------- | :----------------------------------------------------------- |

**Sample Input & Output:**

- `shouldITrade(90, 100, true)` → `"Buy"`
- `shouldITrade(116, 100, true)` → `"Sell"`
- `shouldITrade(110, 100, true)` → `"Hold"`

---
