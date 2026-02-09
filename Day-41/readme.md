# 💥 🧠 JS DAILY PRACTICE – DAY 41

📅 **Goal:** Smart City & National Resource Management
🎯 **Focus:** Smart Grid • Agriculture • Environment • Logistics • Education

---

## ⚠️ General Rules

- Solve every problem using a **function**.
- **Return** the result (❌ do not use `console.log` inside the function).
- Proper **input validation** is mandatory.
- If input is invalid → return `"Invalid Input"`.

---

## 🧩 PROBLEM–01: ⚡ Smart Grid Load Balancer

⚠️ **Function Name Must be `calculateElectricityBill()`**

A smart city grid system that charges more during peak hours to save energy.

| Input      | `units` (number), `isPeakHour` (boolean), and `isIndustrial` (boolean). |
| :--------- | :---------------------------------------------------------------------- |
| **Output** | Return the total energy bill (number).                                  |

**Rules:**

- **Base Rate:** 8 TK/unit for Residential, 12 TK/unit for Industrial.
- **Peak Hour Surcharge:** If `isPeakHour` is true, add **25%** to the unit rate.
- **Clean Energy Discount:** If `units` < 100, give a flat **50 TK** discount on the total bill.

| Challenge 📢 | `units` must be a non-negative number. |
| :----------- | :------------------------------------- |

**Sample Input & Output:**

- `calculateElectricityBill(200, true, false)` → `2000` (8 + 25% = 10 TK/unit; 10 \* 200 = 2000)
- `calculateElectricityBill(80, false, false)` → `590` (8 \* 80 = 640; 640 - 50 = 590)

---

## 🧩 PROBLEM–02: 🚜 Smart Irrigation System

⚠️ **Function Name Must be `shouldWaterPlant()`**

An automated agricultural system to determine if a field needs watering based on sensors.

| Input      | `moistureLevel` (number), `isRaining` (boolean), and `cropType` (string). |
| :--------- | :------------------------------------------------------------------------ |
| **Output** | Return an object with `status` (boolean) and `waterVolume` (Liters).      |

**Rules:**

- **Watering Logic:** If `isRaining` is true, the system should NOT water (status: false, volume: 0).
- **Moisture Threshold:** - `"Paddy"` (Dhan): Needs water if `moistureLevel` < 40%. (Volume: 500L)
  - `"Wheat"` (Ghom): Needs water if `moistureLevel` < 20%. (Volume: 200L)
- **Status:** If moisture is above threshold, status is false.

| Challenge 📢 | `moistureLevel` must be between 0-100. `cropType` must be "Paddy" or "Wheat". |
| :----------- | :---------------------------------------------------------------------------- |

**Sample Input & Output:**

- `shouldWaterPlant(30, false, "Paddy")` → `{ status: true, waterVolume: 500 }`
- `shouldWaterPlant(15, true, "Wheat")` → `{ status: false, waterVolume: 0 }`

---

## 🧩 PROBLEM–03: 🏢 Trade License Fee Calculator

⚠️ **Function Name Must be `calculateLicenseFee()`**

A digital municipality system to calculate annual trade license fees for businesses.

| Input      | `businessType` (string), `isRural` (boolean), and `yearsActive` (number). |
| :--------- | :------------------------------------------------------------------------ |
| **Output** | Return the total fee (number).                                            |

**Rules:**

- **Base Fee:** `"Retail"` = 5000 TK, `"Manufacturing"` = 15000 TK, `"IT"` = 2000 TK.
- **Rural Subsidy:** If `isRural` is true, the base fee is reduced by **40%**.
- **Loyalty Discount:** If `yearsActive` > 10, subtract **1000 TK** from the final fee (after subsidy).
- **Minimum Fee:** The final fee cannot be less than **500 TK**.

| Challenge 📢 | `yearsActive` must be non-negative. `businessType` must be one of the three. |
| :----------- | :--------------------------------------------------------------------------- |

**Sample Input & Output:**

- `calculateLicenseFee("IT", false, 1)` → `2000`
- `calculateLicenseFee("Manufacturing", true, 12)` → `8000` (15000 - 40% = 9000; 9000 - 1000 = 8000)

---

## 🧩 PROBLEM–04: 🎓 Student Scholarship Automated System

⚠️ **Function Name Must be `evaluateScholarship()`**

A national education portal to check if a student qualifies for a monthly stipend.

| Input      | `gpa` (number), `attendance` (number), and `familyIncome` (number).     |
| :--------- | :---------------------------------------------------------------------- |
| **Output** | Return the stipend category: `"Gold"`, `"Silver"`, or `"Not Eligible"`. |

**Rules:**

- **Gold:** If `gpa` >= 4.5 AND `attendance` >= 90 AND `familyIncome` < 25000.
- **Silver:** If `gpa` >= 4.0 AND `attendance` >= 80 AND `familyIncome` < 50000.
- **Not Eligible:** Anything else.

| Challenge 📢 | `gpa` (0.0-5.0), `attendance` (0-100), and `familyIncome` must be positive. |
| :----------- | :-------------------------------------------------------------------------- |

**Sample Input & Output:**

- `evaluateScholarship(4.8, 95, 20000)` → `"Gold"`
- `evaluateScholarship(4.2, 85, 30000)` → `"Silver"`

---

## 🧩 PROBLEM–05: 🌳 Forest Protection (Pollution Alert)

⚠️ **Function Name Must be `checkPollutionLevel()`**

An environmental system that monitors air quality (AQI) near protected forest areas.

| Input      | `aqiValue` (number) and `isIndustrialZone` (boolean). |
| :--------- | :---------------------------------------------------- |
| **Output** | Return a status object with `alert` and `fineAmount`. |

**Rules:**

- **Safe:** AQI < 100. `{ alert: "Green", fineAmount: 0 }`.
- **Warning:** AQI between 101-200. `{ alert: "Yellow", fineAmount: 5000 }`.
- **Danger:** AQI > 200. `{ alert: "Red", fineAmount: 20000 }`.
- **Industrial Penalty:** If `isIndustrialZone` is true and AQI > 100, **double** the `fineAmount`.

| Challenge 📢 | `aqiValue` must be a non-negative number. |
| :----------- | :---------------------------------------- |

**Sample Input & Output:**

- `checkPollutionLevel(150, false)` → `{ alert: "Yellow", fineAmount: 5000 }`
- `checkPollutionLevel(250, true)` → `{ alert: "Red", fineAmount: 40000 }`

---
