# 💥 🧠 JS DAILY PRACTICE – DAY 31

📅 **Goal:** Real-life smart device automation & optimization
🎯 **Focus:** Energy efficiency + Load management + Scheduling + Smart decision rules

---

## ⚠️ General Rules

- Solve every problem using a **function**
- **Return** the result (❌ do not use `console.log`)
- Proper **input validation** is mandatory
- If input is invalid → return `"Invalid Input"`

---

## 🧩 PROBLEM–01: 🥶 Smart Fridge Temperature Controller

**Function Name:** `fridgeTempControl(currentTemp, doorOpen, foodLoad)`

### Description

- `currentTemp`: number (°C)
- `doorOpen`: boolean — fridge door is open or closed
- `foodLoad`: number (kg)

### Rules

- If door is open → increase cooling by 2
- More food → increase cooling proportionally (1°C per 5kg)
- Max cooling temperature reduction = 10°C
- Fridge target temp = 4°C

### Input Example

```js
fridgeTempControl(6, true, 15);
```

### Validation Rules

- `currentTemp` must be a **number**
- `doorOpen` must be **boolean**
- `foodLoad` must be **greater than or equal to 0**
- If input is invalid → return `"Invalid Input"`

### Output Example

```js
{
  targetTemp: -1,
  alert: "Door open!"
}
```

---

## 🧩 PROBLEM–02: 🛁 Smart Bathroom Ventilation

**Function Name:** `bathVentilation(humidity, peopleInBathroom, timeOfDay)`

### Description

- `humidity`: number (0–100)
- `peopleInBathroom`: number
- `timeOfDay`: `"day"` | `"night"`

### Rules

- If `humidity` > 70 → turn **fan ON**
- If `peopleInBathroom` > 2 → increase fan speed
- If `timeOfDay` is `"night"` → reduce fan speed by **50%**

### Input Example

```js
bathVentilation(80, 3, "night");
```

### Validation Rules

- `humidity` must be between 0–100
- `peopleInBathroom` must be greater than or equal to 0
- `timeOfDay` must be `"day"` or `"night"`
- If input is invalid → return `"Invalid Input"`

### Output Example

```js
{
  fanOn: true,
  speedPercent: 50
}
```

---

## 🧩 PROBLEM–03: 📦 Smart Warehouse Inventory Alert

**Function Name:** `inventoryAlert(itemCount, minRequired, reorderPending)`

### Description

- `itemCount`: number of items in stock
- `minRequired`: minimum required stock
- `reorderPending`: boolean

### Rules

- If `itemCount < minRequired` → alert **low stock**
- If `reorderPending` is `true` → show **"waiting for delivery"**
- Otherwise → **"stock sufficient"**

### Input Example

```js
inventoryAlert(12, 20, false);
```

### Validation Rules

- `itemCount` and `minRequired` must be greater than or equal to 0
- `reorderPending` must be boolean
- If input is invalid → return `"Invalid Input"`

### Output Example

```js
{
  status: "Low stock",
  action: "Reorder now"
}
```

---

## 🧩 PROBLEM–04: 🛋️ Smart Sofa Seat Heater

**Function Name:** `seatHeaterControl(currentTemp, desiredTemp, seatOccupied)`

### Description

- `currentTemp`: number (°C)
- `desiredTemp`: number (°C)
- `seatOccupied`: boolean

### Rules

- Heater **ON** only if seat is occupied
- Adjust temperature gradually → reduce difference by **1°C per minute**
- Minimum temperature = **20°C**
- Maximum temperature = `desiredTemp`

### Input Example

```js
seatHeaterControl(18, 24, true);
```

### Validation Rules

- `currentTemp` and `desiredTemp` must be numbers
- `seatOccupied` must be boolean
- If input is invalid → return `"Invalid Input"`

### Output Example

```js
{
  heaterOn: true,
  currentTemp: 20
}
```

---

## 🧩 PROBLEM–05: 🧊 Smart Refrigerator Temperature Manager

**Function Name:** `fridgeController(currentTemp, doorOpen, foodLoad)`

### Description

- `currentTemp`: number (°C)
- `doorOpen`: boolean
- `foodLoad`: number (amount of food inside)

### Rules

- If the door is open → temperature cannot be stabilized, show an alert
- More `foodLoad` → require slightly more cooling
- Default target temperature: 0°C
- Door open → show warning

### Input Example

```js
fridgeController(4, true, 12);
```

### Validation Rules

- `currentTemp` must be a number
- `doorOpen` must be boolean
- `foodLoad` must be greater than or equal to 0
- If input is invalid → return `"Invalid Input"`

### Output Example

```js
{
  targetTemp: 0,
  alert: "Door open!"
}
```

---
