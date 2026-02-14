# 🏙️ JS DAILY PRACTICE – DAY 45

📅 **Goal:** Smart City & Public Service Management
🎯 **Focus:** Resource Allocation • Traffic Logic • Utility Billing • Emergency Response

---

## ⚠️ General Rules

- Solve every problem using a **function**.
- **Return** the result (❌ do not use `console.log` inside the function).
- Proper **input validation** is mandatory.
- If input is invalid → return `"Invalid Input"`.

---

## 🧩 PROBLEM–01: 💡 Smart Streetlight Controller

⚠️ **Function Name Must be `manageStreetlights()`**

A system to automate street lighting based on ambient sunlight and pedestrian motion.

| Input      | `sunlightLevel` (number) and `motionDetected` (boolean). |
| :--------- | :------------------------------------------------------- |
| **Output** | Return `"OFF"`, `"FULL BRIGHTNESS"`, or `"DIM MODE"`.    |

**Rules:**

- If `sunlightLevel > 50`, return `"OFF"`.
- If `sunlightLevel <= 50` AND `motionDetected` is `true`, return `"FULL BRIGHTNESS"`.
- If `sunlightLevel <= 50` AND `motionDetected` is `false`, return `"DIM MODE"`.

| Challenge 📢 | `sunlightLevel` must be a number (0-100). `motionDetected` must be strictly a boolean. |
| :----------- | :------------------------------------------------------------------------------------- |

**Sample Input & Output:**

- `manageStreetlights(30, true)` → `"FULL BRIGHTNESS"`
- `manageStreetlights(80, false)` → `"OFF"`
- `manageStreetlights(120, true)` → `"Invalid Input"`

---

## 🧩 PROBLEM–02: 🚰 Water Usage Billing

⚠️ **Function Name Must be `calculateWaterBill()`**

A utility function to calculate monthly water bills based on consumption tiers.

| Input      | `litersUsed` (number).      |
| :--------- | :-------------------------- |
| **Output** | Total bill amount (number). |

**Rules:**

- **Base Charge:** $10 (Flat fee for everyone).
- **First 100 liters:** Free.
- **101 to 500 liters:** $0.05 per liter.
- **Above 500 liters:** $0.10 per liter.
- _Example:_ 600 liters = $10 (Base) + (400 _ 0.05) + (100 _ 0.10) = $40.

| Challenge 📢 | `litersUsed` must be a non-negative number. Non-numeric strings or negative values must return `"Invalid Input"`. |
| :----------- | :---------------------------------------------------------------------------------------------------------------- |

**Sample Input & Output:**

- `calculateWaterBill(600)` → `40`
- `calculateWaterBill(-5)` → `"Invalid Input"`

---

## 🧩 PROBLEM–03: 🚑 Emergency Dispatcher

⚠️ **Function Name Must be `dispatchVehicle()`**

Logic to determine which emergency vehicle to send and its priority level.

| Input      | `incidentType` (string) and `severity` (number 1-5). |
| :--------- | :--------------------------------------------------- |
| **Output** | Priority status message (string).                    |

**Rules:**

- **Types:** - "Medical" -> Vehicle: "Ambulance"
  - "Fire" -> Vehicle: "Fire Truck"
  - "Crime" -> Vehicle: "Police Car"
- **Priority Logic:**
  - If `severity >= 4`: return `"High Priority: Dispatch [Vehicle] immediately!"`
  - If `severity < 4`: return `"Standard Priority: Assign [Vehicle] to queue"`

| Challenge 📢 | `severity` must be an integer between 1 and 5. `incidentType` must match the three categories exactly (case-sensitive). |
| :----------- | :---------------------------------------------------------------------------------------------------------------------- |

**Sample Input & Output:**

- `dispatchVehicle("Fire", 5)` → `"High Priority: Dispatch Fire Truck immediately!"`
- `dispatchVehicle("Medical", 2)` → `"Standard Priority: Assign Ambulance to queue"`
- `dispatchVehicle("Health", 3)` → `"Invalid Input"`

---

## 🧩 PROBLEM–04: 🚦 Traffic Signal Timer

⚠️ **Function Name Must be `adjustTrafficTimer()`**

Dynamic adjustment of green light duration based on vehicle density.

| Input      | `carCount` (number).                 |
| :--------- | :----------------------------------- |
| **Output** | Signal duration in seconds (number). |

**Rules:**

- `carCount < 10`: return `30`.
- `carCount` between 10 and 40 (inclusive): return `60`.
- `carCount > 40`: return `90`.

| Challenge 📢 | `carCount` must be a non-negative integer. Decimals or non-numeric types are invalid. |
| :----------- | :------------------------------------------------------------------------------------ |

**Sample Input & Output:**

- `adjustTrafficTimer(25)` → `60`
- `adjustTrafficTimer(50)` → `90`
- `adjustTrafficTimer("a lot")` → `"Invalid Input"`

---

## 🧩 PROBLEM–05: 🗑️ Waste Collection Scheduler

⚠️ **Function Name Must be `getCollectionDay()`**

A lookup system for residents to find their waste collection days.

| Input      | `zone` (number) and `wasteType` (string: "General", "Recycle"). |
| :--------- | :-------------------------------------------------------------- |
| **Output** | Collection day (string).                                        |

**Rules:**

- **Zone 1:** General -> "Monday", Recycle -> "Wednesday"
- **Zone 2:** General -> "Tuesday", Recycle -> "Thursday"
- **Zone 3:** General -> "Wednesday", Recycle -> "Friday"

| Challenge 📢 | `zone` must be exactly 1, 2, or 3. `wasteType` must be exactly "General" or "Recycle" (case-sensitive). |
| :----------- | :------------------------------------------------------------------------------------------------------ |

**Sample Input & Output:**

- `getCollectionDay(2, "Recycle")` → `"Thursday"`
- `getCollectionDay(1, "General")` → `"Monday"`
- `getCollectionDay(4, "General")` → `"Invalid Input"`

---
