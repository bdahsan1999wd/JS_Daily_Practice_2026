# 💥 🧠 JS DAILY PRACTICE – DAY 34

📅 **Goal:** Real-Life Decision Logic & Life Hacks
🎯 **Focus:** Smart Finance • Health Tracking • E-commerce • Utility Management

---

## ⚠️ General Rules

- Solve every problem using a **function**.
- **Return** the result (❌ do not use `console.log` inside the function).
- Proper **input validation** is mandatory.
- If input is invalid → return `"Invalid Input"`.

---

## 🧩 PROBLEM–01: 🛍️ Smart Grocery Budget Planner

⚠️ **Function Name Must be `budgetPlanner()`**

Design a logic that checks your budget. If it exceeds the limit, it removes the most expensive item once and re-evaluates.

| Input      | The function takes two inputs: `totalBudget` (number) and `items` (Array of objects e.g., `[{ name: "Oil", price: 700 }]`). |
| :--------- | :-------------------------------------------------------------------------------------------------------------------------- |
| **Output** | Determine the affordability status and the final cost. Return an object.                                                    |

**Rules:**

- Calculate the total cost of all items in the array.
- If `totalCost > totalBudget`, find the single item with the highest price and remove it from the total.
- After removing that item, if the remaining cost is still `> totalBudget`, status is `"Over Budget"`. Otherwise, status is `"Under Budget"`.
- If the original total cost was already within budget, no items should be removed.

| Challenge 📢 | `items` must be a non-empty array and `totalBudget` must be > 0. Otherwise, return `"Invalid Input"`. |
| :----------- | :---------------------------------------------------------------------------------------------------- |

**Sample Input & Output:**

- `budgetPlanner(1000, [{name: "Oil", price: 700}, {name: "Rice", price: 500}])` → `{ status: "Under Budget", finalCost: 500 }`
- `budgetPlanner(300, [{name: "Meat", price: 600}, {name: "Fish", price: 400}])` → `{ status: "Over Budget", finalCost: 400 }`

---

## 🧩 PROBLEM–02: 💊 Smart Medicine Reminder

⚠️ **Function Name Must be `medicineTracker()`**

A system to track the next dose timing and ensure the medical course isn't finished.

| Input      | The function takes three inputs: `lastTakenHour` (0-23 number), `gapHours` (number), and `totalDosesLeft` (number). |
| :--------- | :------------------------------------------------------------------------------------------------------------------ |
| **Output** | Return an object with `nextDoseAt` (hour) and a status message.                                                     |

**Rules:**

- `nextDoseAt` is calculated as `(lastTakenHour + gapHours) % 24`.
- If `totalDosesLeft === 0`, status is `"Course Completed"`.
- Otherwise, status is `"Next dose at [nextDoseAt]"`.
- **Safety Restriction:** `gapHours` must be between **4 and 12** hours.

| Challenge 📢 | If any input is negative, `lastTakenHour > 23`, or `gapHours` is outside the 4-12 range, return `"Invalid Input"`. |
| :----------- | :----------------------------------------------------------------------------------------------------------------- |

**Sample Input & Output:**

- `medicineTracker(22, 6, 2)` → `{ nextDoseAt: 4, status: "Next dose at 4" }`
- `medicineTracker(10, 8, 0)` → `{ nextDoseAt: 18, status: "Course Completed" }`

---

## 🧩 PROBLEM–03: ⚡ Smart Electricity Bill Estimator

⚠️ **Function Name Must be `electricityBill()`**

Calculate household or commercial bills with solar power incentives.

| Input      | The function takes three inputs: `units` (number), `hasSolar` (boolean), and `isCommercial` (boolean). |
| :--------- | :----------------------------------------------------------------------------------------------------- |
| **Output** | Return an object with `totalBill` and the billing `category`.                                          |

**Rules:**

- **Tier 1:** First 100 units = 5 TK/unit.
- **Tier 2:** Units above 100 = 10 TK/unit.
- If `isCommercial` is true, add a **15% tax** to the total bill.
- If `hasSolar` is true, apply a **20% discount** on the final bill (after tax).

| Challenge 📢 | `units` must be >= 0. Any invalid type or negative unit must return `"Invalid Input"`. |
| :----------- | :------------------------------------------------------------------------------------- |

**Sample Input & Output:**

- `electricityBill(150, false, false)` → `{ totalBill: 1000, category: "Residential" }`
- `electricityBill(100, true, false)` → `{ totalBill: 400, category: "Solar Powered" }`

---

## 🧩 PROBLEM–04: 😴 Smart Sleep Cycle Optimizer

⚠️ **Function Name Must be `sleepOptimizer()`**

Calculate the best bedtime to wake up refreshed based on human sleep cycles.

| Input      | The function takes two inputs: `wakeUpTime` (0-23 number) and `sleepType` ("Deep" or "Quick"). |
| :--------- | :--------------------------------------------------------------------------------------------- |
| **Output** | Return an object with `bedTime` (24h format) and a message.                                    |

**Rules:**

- `"Deep"` sleep requires **9 hours**.
- `"Quick"` sleep requires **6 hours**.
- To find `bedTime`, subtract the hours from `wakeUpTime`.
- If the result is negative, wrap it around the 24-hour clock (e.g., 2 AM - 6 hrs = 20:00).
- Message format: `"Go to sleep at [bedTime]:00"`.

| Challenge 📢 | If `sleepType` is invalid or `wakeUpTime` is outside 0-23, return `"Invalid Input"`. |
| :----------- | :----------------------------------------------------------------------------------- |

**Sample Input & Output:**

- `sleepOptimizer(7, "Deep")` → `{ bedTime: 22, message: "Go to sleep at 22:00" }`
- `sleepOptimizer(5, "Quick")` → `{ bedTime: 23, message: "Go to sleep at 23:00" }`

---

## 🧩 PROBLEM–05: 📈 Smart Investment Risk Analyzer

⚠️ **Function Name Must be `investmentAnalyzer()`**

Determine investment risk levels and potential returns based on user profile.

| Input      | The function takes three inputs: `amount` (number), `duration` (years), and `isExperienced` (boolean). |
| :--------- | :----------------------------------------------------------------------------------------------------- |
| **Output** | Return an object with `riskLevel` and `estimatedReturn`.                                               |

**Rules:**

- **Base Risk:**
  - `"High"`: If `amount > 100000` AND `duration < 2`.
  - `"Low"`: If `duration >= 5`.
  - `"Medium"`: For all other cases.
- **Experience Adjustment:** If `isExperienced` is true, the risk level drops by one stage (High -> Medium, Medium -> Low).
- **Return Calculation:** Low: 10%, Medium: 20%, High: 40%.

| Challenge 📢 | `amount` and `duration` must be > 0. Return `"Invalid Input"` for incorrect types or non-positive values. |
| :----------- | :-------------------------------------------------------------------------------------------------------- |

**Sample Input & Output:**

- `investmentAnalyzer(200000, 1, false)` → `{ riskLevel: "High", estimatedReturn: "40%" }`
- `investmentAnalyzer(200000, 1, true)` → `{ riskLevel: "Medium", estimatedReturn: "20%" }`

---
