# 💥 🧠 JS DAILY PRACTICE – DAY 38

📅 **Goal:** Advanced Daily Life Logic Implementation
🎯 **Focus:** Health • Freelance • Food Delivery • Maintenance • Hobby

---

## ⚠️ General Rules

- Solve every problem using a **function**.
- **Return** the result (❌ do not use `console.log` inside the function).
- Proper **input validation** is mandatory.
- If input is invalid → return `"Invalid Input"`.

---

## 🧩 PROBLEM–01: 🏃 Gym Membership Calculator

⚠️ **Function Name Must be `calculateGymCost()`**

Calculate the monthly cost for a gym based on sessions and personal training needs.

| Input      | `baseFee` (number), `extraSessions` (number), and `wantsTrainer` (boolean). |
| :--------- | :-------------------------------------------------------------------------- |
| **Output** | Return the total monthly bill (number).                                     |

**Rules:**

- **Extra Sessions:** Each session beyond 12 sessions costs **200 TK** per session.
- **Trainer Fee:** If `wantsTrainer` is true, add **1500 TK** to the total.
- **Discount:** If the final total exceeds **4000 TK**, apply a **10%** discount on the final bill.

| Challenge 📢 | `baseFee` and `extraSessions` must be non-negative numbers. |
| :----------- | :---------------------------------------------------------- |

**Sample Input & Output:**

- `calculateGymCost(2000, 15, true)` → `3690` (2000 + 600 + 1500 = 4100; 4100 - 10% = 3690)
- `calculateGymCost(1500, 10, false)` → `1500`

---

## 🧩 PROBLEM–02: 💻 Freelancer Project Deadline

⚠️ **Function Name Must be `projectDeadlineStatus()`**

Determine if a freelancer can finish a project based on total hours needed and daily capacity.

| Input      | `totalHoursNeeded` (number), `daysLeft` (number), and `hoursPerDay` (number). |
| :--------- | :---------------------------------------------------------------------------- |
| **Output** | Return an object with `canComplete` (boolean) and `requiredExtraHours`.       |

**Rules:**

- Calculate `totalAvailableHours` ($daysLeft \times hoursPerDay$).
- If `totalAvailableHours` is $\ge$ `totalHoursNeeded`:
  - Return `{ canComplete: true, requiredExtraHours: 0 }`.
- If not:
  - Calculate the difference and return `{ canComplete: false, requiredExtraHours: [difference] }`.

| Challenge 📢 | All inputs must be positive numbers. |
| :----------- | :----------------------------------- |

**Sample Input & Output:**

- `projectDeadlineStatus(40, 5, 8)` → `{ canComplete: true, requiredExtraHours: 0 }`
- `projectDeadlineStatus(50, 5, 6)` → `{ canComplete: false, requiredExtraHours: 20 }`

---

## 🧩 PROBLEM–03: 🍔 Food Delivery Charge Optimizer

⚠️ **Function Name Must be `calculateDeliveryCharge()`**

Calculate delivery fees based on order value, distance, and weather conditions.

| Input      | `orderAmount` (number), `distance` (km), and `isRaining` (boolean). |
| :--------- | :------------------------------------------------------------------ |
| **Output** | Return the total delivery fee (number).                             |

**Rules:**

- **Free Delivery:** If `orderAmount` > 1000 AND `distance` < 3km, the fee is **0**.
- **Base Charge:** 40 TK for the first 2km.
- **Extra Distance:** 10 TK per km for every km after the first 2km.
- **Rain Surcharge:** If `isRaining` is true, add **50 TK** to the final delivery fee.

| Challenge 📢 | `orderAmount` and `distance` must be greater than 0. |
| :----------- | :--------------------------------------------------- |

**Sample Input & Output:**

- `calculateDeliveryCharge(1200, 2, false)` → `0`
- `calculateDeliveryCharge(500, 5, true)` → `120` (Calculation: 40 + (3\*10) + 50)

---

## 🧩 PROBLEM–04: 🚗 Car Service Alert

⚠️ **Function Name Must be `carServiceAdvisor()`**

Determine what service a car needs based on mileage and months since the last service.

| Input      | `mileage` (number) and `monthsSinceLastService` (number). |
| :--------- | :-------------------------------------------------------- |
| **Output** | Return the service category (string).                     |

**Rules:**

- **Major Service:** If `mileage` $\ge$ 20,000 OR `monthsSinceLastService` $\ge$ 12.
- **Intermediate Service:** If `mileage` $\ge$ 10,000 OR `monthsSinceLastService` $\ge$ 6.
- **Basic Checkup:** If `mileage` $\ge$ 5,000.
- **No Service Needed:** Anything below 5,000 mileage and less than 6 months.

| Challenge 📢 | Both inputs must be positive numbers. |
| :----------- | :------------------------------------ |

**Sample Input & Output:**

- `carServiceAdvisor(25000, 4)` → `"Major Service"`
- `carServiceAdvisor(3000, 2)` → `"No Service Needed"`

---

## 🧩 PROBLEM–05: 🪴 Smart Plant Watering System

⚠️ **Function Name Must be `plantWateringGuide()`**

Determine how much water a plant needs based on plant type, temperature, and moisture.

| Input      | `plantType` (string), `temperature` (number), and `soilMoisture` (number). |
| :--------- | :------------------------------------------------------------------------- |
| **Output** | Return an object with `waterAmount` (ml) and `frequency` (string).         |

**Rules:**

- **Cactus:** - If `soilMoisture` < 5%: `{ waterAmount: 100, frequency: "Once a week" }`.
  - Otherwise: `{ waterAmount: 0, frequency: "No water needed" }`.
- **Other Plants:** - If `temperature` > 35: `{ waterAmount: 500, frequency: "Daily" }`.
  - Else if `soilMoisture` < 20%: `{ waterAmount: 250, frequency: "Every 2 days" }`.
  - Default: `{ waterAmount: 0, frequency: "No water needed" }`.

| Challenge 📢 | `temperature` must be a number, `soilMoisture` must be between 0 and 100. |
| :----------- | :------------------------------------------------------------------------ |

**Sample Input & Output:**

- `plantWateringGuide("Cactus", 40, 2)` → `{ waterAmount: 100, frequency: "Once a week" }`
- `plantWateringGuide("Rose", 38, 30)` → `{ waterAmount: 500, frequency: "Daily" }`

---
