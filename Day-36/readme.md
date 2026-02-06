# 💥 🧠 JS DAILY PRACTICE – DAY 36

📅 **Goal:** Advanced Business Logic & System Architecting
🎯 **Focus:** FinTech • E-commerce • HR-Tech • Health-Tech • Industrial

---

## ⚠️ General Rules

- Solve every problem using a **function**.
- **Return** the result (❌ do not use `console.log` inside the function).
- Proper **input validation** is mandatory.
- If input is invalid → return `"Invalid Input"`.

---

## 🧩 PROBLEM–01: 💳 Smart Credit Card Eligibility

⚠️ **Function Name Must be `checkCreditEligibility()`**

Evaluate if a user is eligible for a credit card based on income, credit score, and existing debt.

| Input      | `income` (number), `creditScore` (number), and `hasExistingDebt` (boolean). |
| :--------- | :-------------------------------------------------------------------------- |
| **Output** | Return an object with `isEligible` (boolean) and `cardTier` (string).       |

**Rules:**

- **Platinum:** `income` >= 100,000 and `creditScore` >= 750.
- **Gold:** `income` >= 50,000, `creditScore` >= 650, and `hasExistingDebt` is `false`.
- **Rejected:** Any other case. Result: `{ isEligible: false, cardTier: "None" }`.

| Challenge 📢 | `income` and `creditScore` (300-850) must be positive numbers. |
| :----------- | :------------------------------------------------------------- |

**Sample Input & Output:**

- `checkCreditEligibility(120000, 800, true)` → `{ isEligible: true, cardTier: "Platinum" }`
- `checkCreditEligibility(55000, 700, false)` → `{ isEligible: true, cardTier: "Gold" }`
- `checkCreditEligibility(55000, 600, false)` → `{ isEligible: false, cardTier: "None" }`

---

## 🧩 PROBLEM–02: 🛒 Dynamic Combo Discount

⚠️ **Function Name Must be `calculateComboPrice()`**

An e-commerce logic where buying multiple categories triggers a "Combo Discount".

| Input      | `cartTotal` (number), `itemCategories` (Array of strings), and `isFirstOrder` (boolean). |
| :--------- | :--------------------------------------------------------------------------------------- |
| **Output** | Return the final payable amount (number).                                                |

**Rules:**

- **Combo Discount:** If `itemCategories` contains both `"Electronics"` and `"Gadgets"`, apply **15% off** the `cartTotal`.
- **New User Bonus:** If `isFirstOrder` is true, subtract **200 TK** (apply after combo discount).
- **Minimum Price:** Final price cannot be less than 0. Round to 2 decimal places.

| Challenge 📢 | `cartTotal` > 0 and `itemCategories` must be a non-empty array. |
| :----------- | :-------------------------------------------------------------- |

**Sample Input & Output:**

- `calculateComboPrice(1000, ["Electronics", "Gadgets", "Food"], false)` → `850`
- `calculateComboPrice(1000, ["Electronics", "Gadgets"], true)` → `650`
- `calculateComboPrice(100, ["Clothing"], true)` → `0`

---

## 🧩 PROBLEM–03: 👨‍💻 Recruitment Shortlist Filter

⚠️ **Function Name Must be `shortlistCandidate()`**

Filters job applicants based on experience, skills, and expected salary.

| Input      | `yearsExp` (number), `skills` (Array), and `expectedSalary` (number). |
| :--------- | :-------------------------------------------------------------------- |
| **Output** | Return an object with `status` and `recommendation`.                  |

**Rules:**

- **Selected:** `yearsExp` >= 3, `skills` includes `"JavaScript"`, and `expectedSalary` <= 50,000.
  - Result: `{ status: "Shortlisted", recommendation: "Schedule Interview" }`
- **Overqualified:** `yearsExp` > 10.
  - Result: `{ status: "Review Manually", recommendation: "Consider for Senior Role" }`
- **Rejected:** All other cases.
  - Result: `{ status: "Rejected", recommendation: "Send Feedback Email" }`

| Challenge 📢 | All numbers must be positive and `skills` must be an array. |
| :----------- | :---------------------------------------------------------- |

**Sample Input & Output:**

- `shortlistCandidate(5, ["HTML", "JavaScript"], 45000)` → `{ status: "Shortlisted", recommendation: "Schedule Interview" }`
- `shortlistCandidate(12, ["JavaScript"], 80000)` → `{ status: "Review Manually", recommendation: "Consider for Senior Role" }`

---

## 🧩 PROBLEM–04: 🏥 Health-Risk Assessment Engine

⚠️ **Function Name Must be `healthRiskAnalyzer()`**

Evaluates health risk status based on BMI, age, and lifestyle habits.

| Input      | `bmi` (number), `age` (number), and `isSmoker` (boolean).                 |
| :--------- | :------------------------------------------------------------------------ |
| **Output** | Return an object with `riskLevel` (string) and `recommendation` (string). |

**Rules:**

- **High Risk:** `bmi` > 30 OR (`bmi` > 25 AND `isSmoker` is true).
  - Result: `{ riskLevel: "High", recommendation: "Consult Doctor Immediately" }`.
- **Moderate Risk:** `bmi` (18.5 - 25) but `isSmoker` is true.
  - Result: `{ riskLevel: "Moderate", recommendation: "Quit Smoking" }`.
- **Healthy:** `bmi` (18.5 - 25) and `isSmoker` is false.
  - Result: `{ riskLevel: "Low", recommendation: "Maintain Current Lifestyle" }`.
- **Underweight:** `bmi` < 18.5.
  - Result: `{ riskLevel: "Nutritional Risk", recommendation: "Increase Caloric Intake" }`.

| Challenge 📢 | `bmi` and `age` must be positive numbers. |
| :----------- | :---------------------------------------- |

**Sample Input & Output:**

- `healthRiskAnalyzer(28, 35, true)` → `{ riskLevel: "High", recommendation: "Consult Doctor Immediately" }`
- `healthRiskAnalyzer(22, 25, true)` → `{ riskLevel: "Low", recommendation: "Maintain Current Lifestyle" }`

---

## 🧩 PROBLEM–05: ⚡ Smart Grid Load Balancer

⚠️ **Function Name Must be `powerDistributor()`**

Industrial power grid management system based on priority and grid stability.

| Input      | `currentLoad` (number), `isPriorityFactory` (boolean), and `gridStatus` (string). |
| :--------- | :-------------------------------------------------------------------------------- |
| **Output** | Return an object with `action` and `allowedLoad`.                                 |

**Rules:**

- **Critical Situation:** If `gridStatus` is `"Critical"`:
  - Priority Factory: `{ action: "Reduce Load", allowedLoad: currentLoad * 0.5 }`.
  - Normal Factory: `{ action: "Shutdown", allowedLoad: 0 }`.
- **Stable Situation:** If `gridStatus` is `"Stable"`:
  - If `currentLoad` > 1000: `{ action: "Apply Surcharge", allowedLoad: currentLoad }`.
  - Else: `{ action: "Normal Operation", allowedLoad: currentLoad }`.

| Challenge 📢 | `currentLoad` >= 0 and `gridStatus` must be exactly `"Stable"` or `"Critical"`. |
| :----------- | :------------------------------------------------------------------------------ |

**Sample Input & Output:**

- `powerDistributor(800, true, "Critical")` → `{ action: "Reduce Load", allowedLoad: 400 }`
- `powerDistributor(1200, false, "Stable")` → `{ action: "Apply Surcharge", allowedLoad: 1200 }`

---
