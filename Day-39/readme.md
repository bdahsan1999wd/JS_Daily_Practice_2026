# 💥 🧠 JS DAILY PRACTICE – DAY 39

📅 **Goal:** Advanced Business Logic & Edge Case Handling
🎯 **Focus:** Hospitality • Freelance • Automotive • HR-Tech • Media

---

## ⚠️ General Rules

- Solve every problem using a **function**.
- **Return** the result (❌ do not use `console.log` inside the function).
- Proper **input validation** is mandatory.
- If input is invalid → return `"Invalid Input"`.

---

## 🧩 PROBLEM–01: 🏨 Luxury Hotel Booking

⚠️ **Function Name Must be `calculateHotelStay()`**

Calculates the total cost of a hotel stay based on room type and additional services.

| Input      | `nights` (number), `roomType` (string), and `wantsBreakfast` (boolean). |
| :--------- | :---------------------------------------------------------------------- |
| **Output** | Return the total stay cost (number).                                    |

**Rules:**

- **Room Rates:** "Standard" = 3000 TK/night, "Deluxe" = 5000 TK/night.
- **Breakfast:** If `wantsBreakfast` is true, add **500 TK per night**.
- **Long Stay Discount:** If `nights` > 5, apply a **15% discount** on the total bill.

| Challenge 📢 | `nights` must be a positive number. `roomType` must be "Standard" or "Deluxe". |
| :----------- | :----------------------------------------------------------------------------- |

**Sample Input & Output:**

- `calculateHotelStay(3, "Standard", true)` → `10500`
- `calculateHotelStay(6, "Deluxe", false)` → `25500`

---

## 🧩 PROBLEM–02: 💻 Freelance Gig Estimator

⚠️ **Function Name Must be `calculateGigQuote()`**

Determines the price for a freelance project based on complexity and deadline.

| Input      | `basePrice` (number), `isUrgent` (boolean), and `complexity` (string). |
| :--------- | :--------------------------------------------------------------------- |
| **Output** | Return the final quote (number).                                       |

**Rules:**

- **Complexity Surcharge:** - "Medium": Add **20%** to base price.
  - "High": Add **50%** to base price.
- **Urgent Fee:** If `isUrgent` is true, add a flat **2000 TK** to the price.
- **Platform Fee:** Add **5%** service charge on the final amount.

| Challenge 📢 | `basePrice` must be positive. `complexity` must be "Basic", "Medium", or "High". |
| :----------- | :------------------------------------------------------------------------------- |

**Sample Input & Output:**

- `calculateGigQuote(5000, false, "Medium")` → `6300`
- `calculateGigQuote(10000, true, "High")` → `17850`

---

## 🧩 PROBLEM–03: 🚗 Car Fuel Efficiency Checker

⚠️ **Function Name Must be `checkFuelEfficiency()`**

Checks if a vehicle is fuel-efficient based on distance and fuel consumed.

| Input      | `distanceKM` (number), `fuelLiters` (number), and `isHighway` (boolean). |
| :--------- | :----------------------------------------------------------------------- |
| **Output** | Return an object with `kmPerLiter` (number) and `isEfficient` (boolean). |

**Rules:**

- **Efficiency Formula:** $kmPerLiter = \frac{distanceKM}{fuelLiters}$
- **Efficiency Standard:** - On Highway: Efficient if `kmPerLiter` > 15.
  - Otherwise (City): Efficient if `kmPerLiter` > 10.
- Round `kmPerLiter` to **2 decimal places**.

| Challenge 📢 | All inputs must be positive numbers. |
| :----------- | :----------------------------------- |

**Sample Input & Output:**

- `checkFuelEfficiency(100, 5, true)` → `{ kmPerLiter: 20, isEfficient: true }`
- `checkFuelEfficiency(50, 6, false)` → `{ kmPerLiter: 8.33, isEfficient: false }`

---

## 🧩 PROBLEM–04: 💰 Employee Annual Bonus

⚠️ **Function Name Must be `calculateEmployeeBonus()`**

Determine the bonus amount based on salary and performance rating.

| Input      | `salary` (number), `performanceRating` (1-5), and `yearsInCompany` (number). |
| :--------- | :--------------------------------------------------------------------------- |
| **Output** | Return the bonus amount (number).                                            |

**Rules:**

- **Rating Bonus:** - Rating 5: 20% of salary.
  - Rating 4: 10% of salary.
  - Rating 3: 5% of salary.
- **Loyalty Bonus:** If `yearsInCompany` > 5, add an extra **5000 TK** to the bonus.
- **Cap:** The maximum bonus cannot exceed **50,000 TK**.

| Challenge 📢 | All inputs must be positive numbers. Rating must be between 1 and 5. |
| :----------- | :------------------------------------------------------------------- |

**Sample Input & Output:**

- `calculateEmployeeBonus(100000, 5, 2)` → `20000`
- `calculateEmployeeBonus(200000, 4, 10)` → `25000`

---

## 🧩 PROBLEM–05: 📸 Event Photography Package

⚠️ **Function Name Must be `photographyQuote()`**

Provide a quote for a photography session based on hours and additional services.

| Input      | `hours` (number), `eventType` (string), and `wantsDrone` (boolean).           |
| :--------- | :---------------------------------------------------------------------------- |
| **Output** | Return an object with `totalQuote` (number) and `photographerCount` (number). |

**Rules:**

- **Hourly Rate:** 2000 TK per hour.
- **Drone Fee:** If `wantsDrone` is true, add **5000 TK**.
- **Photographers:** - If `eventType === "Wedding"`, 3 photographers are needed.
  - Otherwise, 1 photographer is needed.
- **Bundle:** If `hours` > 8, apply a **15% discount** on the total quote.

| Challenge 📢 | `hours` must be a positive number. |
| :----------- | :--------------------------------- |

**Sample Input & Output:**

- `photographyQuote(5, "Birthday", false)` → `{ totalQuote: 10000, photographerCount: 1 }`
- `photographyQuote(10, "Wedding", true)` → `{ totalQuote: 21250, photographerCount: 3 }`

---
