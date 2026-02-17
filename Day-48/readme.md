# 🏗️ JS DAILY PRACTICE – DAY 48

📅 **Goal:** Post-Election Reconstruction & Social Stability
🎯 **Focus:** Logic Priority • Tiered Validation • String Formatting • Data Integrity

---

## ⚠️ General Rules

- Solve every problem using a **function**.
- **Return** the result (❌ do not use `console.log` inside the function).
- Proper **input validation** is mandatory.
- If input is invalid → return `"Invalid Input"`.

---

## 🧩 PROBLEM–01: 🏗️ Damage Compensation Portal

⚠️ **Function Name Must be `calculateCompensation()`**

The government has launched a portal to provide financial aid to those affected by post-election unrest. Calculate the aid based on the damage type and loss amount.

| Input      | `damageType` (string) and `estimatedLoss` (number). |
| :--------- | :-------------------------------------------------- |
| **Output** | Return the compensation amount (number).            |

**Rules:**

- **"Business"**: Receives 20% of loss (Maximum limit: **$100,000**).
- **"Home"**: Receives 30% of loss (Maximum limit: **$50,000**).
- **"Vehicle"**: Receives 50% of loss (Maximum limit: **$40,000**).

| Challenge 📢 | `damageType` must be one of the three above. `estimatedLoss` must be a positive number. |
| :----------- | :-------------------------------------------------------------------------------------- |

**Sample Input & Output:**

- `calculateCompensation("Business", 600000)` → `100000`
- `calculateCompensation("Home", 100000)` → `30000`
- `calculateCompensation("Mobile", 5000)` → `"Invalid Input"`

---

## 🧩 PROBLEM–02: 🚔 Police Patrol Dispatcher

⚠️ **Function Name Must be `dispatchPatrol()`**

Logic for a smart dispatch system to maintain peace in various neighborhoods based on risk factors.

| Input      | `riskLevel` (number 1-10) and `hasDisturbance` (boolean). |
| :--------- | :-------------------------------------------------------- |
| **Output** | Return `"High Alert"`, `"Normal Patrol"`, or `"Standby"`. |

**Rules:**

- If `hasDisturbance` is `true` **OR** `riskLevel` is above `8`, return: `"High Alert"`.
- If `hasDisturbance` is `false` **BUT** `riskLevel` is between `5` and `8` (inclusive), return: `"Normal Patrol"`.
- In all other cases, return: `"Standby"`.

| Challenge 📢 | `riskLevel` must be between 1 and 10. `hasDisturbance` must be a boolean. |
| :----------- | :------------------------------------------------------------------------ |

**Sample Input & Output:**

- `dispatchPatrol(9, false)` → `"High Alert"`
- `dispatchPatrol(6, false)` → `"Normal Patrol"`
- `dispatchPatrol(12, true)` → `"Invalid Input"`

---

## 🧩 PROBLEM–03: 🧹 Volunteer Cleanup Matching

⚠️ **Function Name Must be `matchVolunteer()`**

An app to assign volunteers to clean up election posters and flyers across the city.

| Input      | `volunteerAge` (number) and `preferredZone` (string). |
| :--------- | :---------------------------------------------------- |
| **Output** | Return `"Assigned"`, `"Waitlist"`, or `"Underage"`.   |

**Rules:**

- If `volunteerAge >= 18` **AND** `preferredZone` is `"Urban"`, return: `"Assigned"`.
- If `volunteerAge >= 18` **AND** `preferredZone` is `"Rural"`, return: `"Waitlist"`.
- If `volunteerAge < 18`, return: `"Underage"`.

| Challenge 📢 | `volunteerAge` must be a positive number. `preferredZone` must be either `"Urban"` or `"Rural"`. |
| :----------- | :----------------------------------------------------------------------------------------------- |

**Sample Input & Output:**

- `matchVolunteer(20, "Urban")` → `"Assigned"`
- `matchVolunteer(16, "Rural")` → `"Underage"`
- `matchVolunteer(25, "Suburban")` → `"Invalid Input"`

---

## 🧩 PROBLEM–04: 🤝 Peace Committee Invitation

⚠️ **Function Name Must be `inviteToMeeting()`**

A system to invite political leaders to harmony meetings to ensure social stability.

| Input      | `partyRole` (string) and `yearsInPolitics` (number).      |
| :--------- | :-------------------------------------------------------- |
| **Output** | Return `"VIP Invite"`, `"General Invite"`, or `"Reject"`. |

**Rules:**

- If `partyRole` is `"Chairman"` **AND** `yearsInPolitics > 10`, return: `"VIP Invite"`.
- If `partyRole` is `"Member"` **AND** `yearsInPolitics > 5`, return: `"General Invite"`.
- For any other role or lower experience, return: `"Reject"`.

| Challenge 📢 | `partyRole` must be a string. `yearsInPolitics` must be a non-negative number. |
| :----------- | :----------------------------------------------------------------------------- |

**Sample Input & Output:**

- `inviteToMeeting("Chairman", 12)` → `"VIP Invite"`
- `inviteToMeeting("Member", 2)` → `"Reject"`
- `inviteToMeeting("Leader", 15)` → `"Reject"`

---

## 🧩 PROBLEM–05: 📢 Fake News Report Filter

⚠️ **Function Name Must be `checkNewsUrgency()`**

Prioritizing reports of misinformation or rumors spreading on social media.

| Input      | `reportCount` (number) and `sourceVerified` (boolean).  |
| :--------- | :------------------------------------------------------ |
| **Output** | Return `"Immediate Action"`, `"Review"`, or `"Ignore"`. |

**Rules:**

- If `reportCount > 50` **AND** `sourceVerified` is `false`, return: `"Immediate Action"`.
- If `reportCount` is between `10` and `50` (inclusive, regardless of source), return: `"Review"`.
- If `reportCount < 10`, return: `"Ignore"`.

| Challenge 📢 | `reportCount` must be 0 or higher. `sourceVerified` must be a boolean. |
| :----------- | :--------------------------------------------------------------------- |

**Sample Input & Output:**

- `checkNewsUrgency(60, false)` → `"Immediate Action"`
- `checkNewsUrgency(5, true)` → `"Ignore"`
- `checkNewsUrgency(-10, false)` → `"Invalid Input"`

---
