# 💥 🧠 JS DAILY PRACTICE – DAY 32

📅 **Goal:** Smart Home & Personal Productivity Automation
🎯 **Focus:** Scheduling • Usage optimization • Real-time monitoring • Smart decision rules

---

## ⚠️ General Rules

- Solve every problem using a **function**.
- **Return** the result (❌ do not use `console.log` inside the function).
- Proper **input validation** is mandatory.
- If input is invalid → return `"Invalid Input"`.

---

## 🧩 PROBLEM–01: 🕒 Smart Queue Token System

⚠️ **Function Name Must be `queueManager()`**

You are building a system for a bank queue. Each counter has a specific capacity.

| Input      | The function takes three inputs: `waitingPeople` (number), `countersOpen` (number), and `emergency` (boolean). |
| :--------- | :------------------------------------------------------------------------------------------------------------- |
| **Output** | Calculate how many people can be served and how many must wait. Return an object.                              |

**Rules:**

- Each counter can serve exactly **5 people**.
- If `countersOpen` is 0, the system is halted (served = 0).
- `served` count cannot be more than the total `waitingPeople`.

| Challenge 📢 | If `waitingPeople` < 0, `countersOpen` < 0, or any input type is incorrect, return `"Invalid Input"`. |
| :----------- | :---------------------------------------------------------------------------------------------------- |

**Sample Input & Output:**

- `queueManager(18, 2, false)` → `{ served: 10, remaining: 8, emergencyToken: false }`
- `queueManager(3, 1, true)` → `{ served: 3, remaining: 0, emergencyToken: true }`

---

## 🧩 PROBLEM–02: 📶 Smart Internet Usage Controller

⚠️ **Function Name Must be `internetController()`**

This function decides if the internet speed should be throttled based on data consumption.

| Input      | The function takes three inputs: `dataLeft` (GB number), `activeDevices` (number), and `priorityUser` (boolean). |
| :--------- | :--------------------------------------------------------------------------------------------------------------- |
| **Output** | Check speed status and calculate final usable data. Return an object.                                            |

**Rules:**

- Speed is `"Limited"` if `dataLeft < 5GB`, otherwise `"Standard"`.
- Each device consumes **1GB**.
- `priorityUser` reserves an additional **2GB** extra.
- `usableData` cannot go below **0**.

| Challenge 📢 | `dataLeft` and `activeDevices` must be $\ge 0$. Any invalid type must return `"Invalid Input"`. |
| :----------- | :---------------------------------------------------------------------------------------------- |

**Sample Input & Output:**

- `internetController(6, 3, true)` → `{ speed: "Limited", usableData: 1 }`
- `internetController(20, 5, false)` → `{ speed: "Standard", usableData: 15 }`

---

## 🧩 PROBLEM–03: 🎮 Gaming Time Regulator

⚠️ **Function Name Must be `gamingLimiter()`**

A parent wants to limit their child's gaming time with a weekend bonus.

| Input      | The function takes three inputs: `hoursPlayed` (number), `maxAllowed` (number), and `weekend` (boolean). |
| :--------- | :------------------------------------------------------------------------------------------------------- |
| **Output** | Determine access status and show remaining hours. Return an object.                                      |

**Rules:**

- `weekend` gives a **+2 hours** allowance bonus.
- If `hoursPlayed` $\ge$ total allowance, the access becomes `"Locked"`.
- `remainingHours` cannot be negative.

| Challenge 📢 | If numbers are negative or types are incorrect, return `"Invalid Input"`. |
| :----------- | :------------------------------------------------------------------------ |

**Sample Input & Output:**

- `gamingLimiter(6, 4, true)` → `{ access: "Locked", remainingHours: 0 }`
- `gamingLimiter(3, 5, false)` → `{ access: "Open", remainingHours: 2 }`

---

## 🧩 PROBLEM–04: 🚰 Smart Water Tank Distributor

⚠️ **Function Name Must be `waterDistributor()`**

Manage a building's water tank during normal days and emergencies.

| Input      | The function takes three inputs: `currentLevel` (liters), `dailyUsage` (liters), and `emergencyMode` (boolean). |
| :--------- | :-------------------------------------------------------------------------------------------------------------- |
| **Output** | Return an object with supplied amount, remaining water, and an alert.                                           |

**Rules:**

- `emergencyMode` supplies only **50%** of the `dailyUsage`.
- If `currentLevel` is less than the required supply, alert is `"Low Water"`, else `"Normal"`.
- Water level cannot go below **0**.

| Challenge 📢 | Ensure all numbers are $\ge 0$. Return `"Invalid Input"` for any type mismatch. |
| :----------- | :------------------------------------------------------------------------------ |

**Sample Input & Output:**

- `waterDistributor(250, 400, true)` → `{ supplied: 200, remaining: 50, alert: "Normal" }`
- `waterDistributor(100, 300, false)` → `{ supplied: 100, remaining: 0, alert: "Low Water" }`

---

## 🧩 PROBLEM–05: 🧑‍💻 Smart Work Focus Tracker

⚠️ **Function Name Must be `focusTracker()`**

Track productivity by deducting time for distractions, unless "Deep Mode" is active.

| Input      | The function takes three inputs: `minutesFocused` (number), `distractions` (number), and `deepMode` (boolean). |
| :--------- | :------------------------------------------------------------------------------------------------------------- |
| **Output** | Calculate effective focus and return an object with a status.                                                  |

**Rules:**

- Each distraction reduces **5 minutes** from focus time.
- `deepMode` ignores the **first 2** distractions.
- `status` is `"Good"` if `effectiveFocus >= 45`, otherwise `"Needs Improvement"`.
- Focus time cannot be negative.

| Challenge 📢 | `distractions` and `minutesFocused` must be $\ge 0$. Return `"Invalid Input"` if types are wrong. |
| :----------- | :------------------------------------------------------------------------------------------------ |

**Sample Input & Output:**

- `focusTracker(60, 4, true)` → `{ effectiveFocus: 50, status: "Good" }`
- `focusTracker(40, 1, false)` → `{ effectiveFocus: 35, status: "Needs Improvement" }`

---
