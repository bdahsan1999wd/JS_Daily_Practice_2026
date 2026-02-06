# 💥 🧠 JS DAILY PRACTICE – DAY 37

📅 **Goal:** Daily Life Problem Solving with Logic
🎯 **Focus:** Transport • Shopping • Utility • Mobile Data • Home Finance

---

## ⚠️ General Rules

- Solve every problem using a **function**.
- **Return** the result (❌ do not use `console.log` inside the function).
- Proper **input validation** is mandatory.
- If input is invalid → return `"Invalid Input"`.

---

## 🧩 PROBLEM–01: 🚌 Local Bus Fare Finder

⚠️ **Function Name Must be `localBusFare()`**

Calculates the bus fare based on distance and passenger category.

| Input      | `distance` (number), `isStudent` (boolean), and `isSeniorCitizen` (boolean). |
| :--------- | :--------------------------------------------------------------------------- |
| **Output** | Return the final fare (number).                                              |

**Rules:**

- **Base Fare:** 20 TK (Fixed for the first 5km).
- **Per KM:** After the first 5km, add **5 TK** for every additional kilometer.
- **Discounts:** - If `isStudent` is true: Apply a **50%** discount on the total fare.
  - If `isSeniorCitizen` is true: Apply a **30%** discount on the total fare.
  - If both are true: Apply only the **Student discount (50%)**.

| Challenge 📢 | `distance` must be a positive number. Otherwise, return `"Invalid Input"`. |
| :----------- | :------------------------------------------------------------------------- |

**Sample Input & Output:**

- `localBusFare(10, true, false)` → `22.5` (Calculation: 20 + 25 = 45; 50% of 45 = 22.5)
- `localBusFare(4, false, false)` → `20`

---

## 🧩 PROBLEM–02: 🛒 Grocery Budget Controller

⚠️ **Function Name Must be `groceryBudgetChecker()`**

Manages a shopping list based on a pre-defined budget.

| Input      | `budget` (number) and `items` (Array of objects with `name` and `price`). |
| :--------- | :------------------------------------------------------------------------ |
| **Output** | Return the remaining balance or an over-budget message.                   |

**Rules:**

- Calculate the total price of all items in the array.
- If total is within the `budget`: Return the `remainingBalance` (number).
- If total exceeds the `budget`: Return the string `"Over Budget by [amount]"`.

| Challenge 📢 | `budget` must be positive and `items` array cannot be empty. |
| :----------- | :----------------------------------------------------------- |

**Sample Input & Output:**

- `groceryBudgetChecker(500, [{name: "Egg", price: 150}, {name: "Milk", price: 100}])` → `250`
- `groceryBudgetChecker(200, [{name: "Meat", price: 800}])` → `"Over Budget by 600"`

---

## 🧩 PROBLEM–03: 🔌 Load Shedding Calculator

⚠️ **Function Name Must be `ipsBatteryBackup()`**

Estimates how long an IPS (Inverter) will last during a power outage.

| Input      | `batteryCapacity` (Ah), `totalLoad` (Watts), and `isNewBattery` (boolean). |
| :--------- | :------------------------------------------------------------------------- |
| **Output** | Return the backup time in hours (number).                                  |

**Rules:**

- **Formula:** $BackupTime = \frac{BatteryCapacity \times 12}{TotalLoad}$
- If `isNewBattery` is false: Subtract **20%** efficiency loss from the calculated backup time.
- Round the final result to **2 decimal places**.

| Challenge 📢 | `batteryCapacity` and `totalLoad` must be greater than 0. |
| :----------- | :-------------------------------------------------------- |

**Sample Input & Output:**

- `ipsBatteryBackup(100, 200, true)` → `6`
- `ipsBatteryBackup(100, 200, false)` → `4.8`

---

## 🧩 PROBLEM–04: 📱 Mobile Data Pack Suggestor

⚠️ **Function Name Must be `dataPackAdvisor()`**

Suggests the best mobile data plan based on usage and budget.

| Input      | `usageGB` (number), `budget` (number), and `prefersNightPack` (boolean). |
| :--------- | :----------------------------------------------------------------------- |
| **Output** | Return the name of the recommended pack (string).                        |

**Rules:**

- **Night Pack:** If `prefersNightPack` is true AND `budget` >= 150: Return `"Night Owl Unlimited"`.
- **Professional:** If `usageGB` > 50 AND `budget` >= 500: Return `"Professional Pack"`.
- **Standard:** If `usageGB` is between 10 and 50 AND `budget` >= 300: Return `"Standard Monthly"`.
- **Basic:** For any other case: Return `"Basic Pay-As-You-Go"`.

| Challenge 📢 | `usageGB` and `budget` must be positive numbers. |
| :----------- | :----------------------------------------------- |

**Sample Input & Output:**

- `dataPackAdvisor(60, 600, false)` → `"Professional Pack"`
- `dataPackAdvisor(5, 100, true)` → `"Basic Pay-As-You-Go"`

---

## 🧩 PROBLEM–05: 🏠 Flat Rent & Utility Splitter

⚠️ **Function Name Must be `calculateFlatExpenses()`**

Splits the house rent and utility bills among roommates.

| Input      | `baseRent` (number), `utilityBill` (number), and `numberOfRoommates` (number). |
| :--------- | :----------------------------------------------------------------------------- |
| **Output** | Return an object with `totalPerPerson` (number) and `isHighExpense` (boolean). |

**Rules:**

- **Total:** Add the `baseRent` and the `utilityBill`.
- **Split:** Divide the total amount by the `numberOfRoommates`.
- **Status:** If the cost per person is greater than **5000 TK**: `isHighExpense` is true, otherwise false.
- Round `totalPerPerson` to **2 decimal places**.

| Challenge 📢 | All inputs must be numbers greater than 0. |
| :----------- | :----------------------------------------- |

**Sample Input & Output:**

- `calculateFlatExpenses(15000, 3000, 3)` → `{ totalPerPerson: 6000, isHighExpense: true }`
- `calculateFlatExpenses(10000, 2000, 4)` → `{ totalPerPerson: 3000, isHighExpense: false }`

---
