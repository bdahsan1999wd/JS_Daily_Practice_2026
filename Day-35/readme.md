# 💥 🧠 JS DAILY PRACTICE – DAY 35

📅 **Goal:** Advanced Decision Logic & System Simulation
🎯 **Focus:** Security • Transportation • Entertainment • Health • Travel

---

## ⚠️ General Rules

- Solve every problem using a **function**.
- **Return** the result (❌ do not use `console.log` inside the function).
- Proper **input validation** is mandatory.
- If input is invalid → return `"Invalid Input"`.

---

## 🧩 PROBLEM–01: 🕵️ Smart Password Strength Validator

⚠️ **Function Name Must be `passwordValidator()`**

This function evaluates password strength based on length, character types, and forbidden patterns.

| Input      | The function takes one input: `password` (string).              |
| :--------- | :-------------------------------------------------------------- |
| **Output** | Return an object with `strength` (string) and `score` (number). |

**Rules:**

- **Strong:** Length >= 8, contains at least one uppercase letter, and at least one number. Result: `{ strength: "Strong", score: 100 }`.
- **Weak:** Length >= 8 and has a number, but contains forbidden words like `"123"` or `"admin"`. Result: `{ strength: "Weak", score: 30 }`.
- **Action Required:** Any other case (e.g., too short or missing a number). Result: `{ strength: "Action Required", score: 0 }`.

| Challenge 📢 | If input is not a string or is empty, return `"Invalid Input"`. |
| :----------- | :-------------------------------------------------------------- |

**Sample Input & Output:**

- `passwordValidator("Pass1234")` → `{ strength: "Strong", score: 100 }`
- `passwordValidator("admin123")` → `{ strength: "Weak", score: 30 }`

---

## 🧩 PROBLEM–02: 🚕 Dynamic Ride-Fare Estimator

⚠️ **Function Name Must be `calculateFare()`**

A dynamic pricing system that accounts for distance, peak hour surges, and weather conditions.

| Input      | The function takes three inputs: `distance` (km), `timeOfDay` (0-23 hour), and `isRainy` (boolean). |
| :--------- | :-------------------------------------------------------------------------------------------------- |
| **Output** | Return the final calculated fare (number).                                                          |

**Rules:**

- **Base Fare:** 50 TK. **Per KM:** 20 TK.
- **Peak Hour Surge:** If `timeOfDay` is (8-11) or (18-21), add **30%** extra to the total cost.
- **Weather Surge:** If `isRainy` is true, add an additional **20%** surcharge (calculated _after_ the peak hour surge).
- Final amount should be rounded to 2 decimal places.

| Challenge 📢 | `distance` must be > 0 and `timeOfDay` must be between 0-23. Otherwise, return `"Invalid Input"`. |
| :----------- | :------------------------------------------------------------------------------------------------ |

**Sample Input & Output:**

- `calculateFare(10, 9, false)` → `325` (Calculation: (50 + 200) \* 1.3)
- `calculateFare(5, 20, true)` → `234` (Calculation: (50 + 100) _ 1.3 _ 1.2)

---

## 🧩 PROBLEM–03: 🎟️ Movie Ticket Multi-Tier Booking

⚠️ **Function Name Must be `movieTicketPrice()`**

A multi-tier booking system applying age discounts, matinee deals, and membership perks.

| Input      | The function takes three inputs: `age` (number), `showTime` (0-23 hour), and `hasMemberCard` (boolean). |
| :--------- | :------------------------------------------------------------------------------------------------------ |
| **Output** | Return the final ticket price (number).                                                                 |

**Rules:**

- **Base Price:** 500 TK.
- **Age Discount:** If `age < 12`, apply 50% off. If `age > 60`, apply 30% off.
- **Matinee Discount:** If `showTime` is between 12 and 16 (inclusive), subtract 100 TK from the price (apply this after the age discount).
- **Membership:** If `hasMemberCard` is true, apply an additional **10%** discount on the final calculated amount.

| Challenge 📢 | `age` must be > 0 and `showTime` must be 0-23. Otherwise, return `"Invalid Input"`. |
| :----------- | :---------------------------------------------------------------------------------- |

**Sample Input & Output:**

- `movieTicketPrice(10, 14, false)` → `150` (Calculation: (500 \* 0.5) - 100)
- `movieTicketPrice(30, 19, true)` → `450` (Calculation: 500 \* 0.9)

---

## 🧩 PROBLEM–04: 🧪 Water Purification Advisor

⚠️ **Function Name Must be `waterQualityChecker()`**

Evaluates water safety based on Total Dissolved Solids (TDS) and filter usage duration.

| Input      | The function takes two inputs: `tdsLevel` (number) and `usageDays` (number). |
| :--------- | :--------------------------------------------------------------------------- |
| **Output** | Return an object with `status` (string) and `isSafeToDrink` (boolean).       |

**Rules:**

- **Pure:** If `tdsLevel < 100` and `usageDays <= 180`: `{ status: "Pure Water", isSafeToDrink: true }`.
- **Good:** If `tdsLevel` is 100-300 and `usageDays <= 180`: `{ status: "Good (Service Soon)", isSafeToDrink: true }`.
- **Warning:** If `tdsLevel > 300` OR `usageDays > 180`: `{ status: "Change Filter Immediately", isSafeToDrink: false }`.

| Challenge 📢 | Both inputs must be positive numbers. Otherwise, return `"Invalid Input"`. |
| :----------- | :------------------------------------------------------------------------- |

**Sample Input & Output:**

- `waterQualityChecker(80, 50)` → `{ status: "Pure Water", isSafeToDrink: true }`
- `waterQualityChecker(150, 200)` → `{ status: "Change Filter Immediately", isSafeToDrink: false }`

---

## 🧩 PROBLEM–05: ✈️ Smart Travel Luggage Tracker

⚠️ **Function Name Must be `luggageChecker()`**

A logistical system checking weight limits, restricted items, and shipping suggestions.

JavaScript
| Input      | The function takes three inputs: `weight` (kg), `items` (Array of strings), and `isBusinessClass` (boolean). |
| :--------- | :----------------------------------------------------------------------------------------------------------- |
| **Output** | Return an object with `extraCharge`, `status`, and `suggestion`.                                             |

**Rules:**

- **Limit:** Economy = 20kg, Business = 35kg.
- **Extra Charge:** 500 TK for every 1kg over the limit.
- **Status:** If `items` contains `"Powerbank"` or `"Lighter"`, status is `"Hand Luggage Only"`. Otherwise, if under weight limit, status is `"Approved"`.
- **Suggestion:** If total `weight > 50`, suggestion is `"Send via Cargo"`. Otherwise, `"Ready to Fly"`.

| Challenge 📢 | `weight` must be > 0 and `items` must be a non-empty array. Otherwise, return `"Invalid Input"`. |
| :----------- | :----------------------------------------------------------------------------------------------- |

**Sample Input & Output:**

- `luggageChecker(25, ["Clothes"], false)` → `{ extraCharge: 2500, status: "Approved", suggestion: "Ready to Fly" }`
- `luggageChecker(15, ["Phone", "Lighter"], true)` → `{ extraCharge: 0, status: "Hand Luggage Only", suggestion: "Ready to Fly" }`

---
