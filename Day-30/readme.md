# 💥 🧠 JS DAILY PRACTICE – DAY 30

📅 **Goal:** Real-life smart device automation & optimization
🎯 **Focus:** Energy efficiency + Load management + Scheduling + Smart decision rules

---

## ⚠️ General Rules

- Solve every problem using a **function**
- **Return** the result (❌ do not use `console.log`)
- Proper **input validation** is mandatory
- If input is invalid → return `"Invalid Input"`

---

## 🧩 PROBLEM–01: 🌬️ Wind Turbine Load Optimizer

**Function Name:** `turbineLoad(windSpeed, maxCapacity, connectedLoad)`

### Description

- `windSpeed`: number (m/s)
- `maxCapacity`: number (kW) — max turbine can produce
- `connectedLoad`: number (kW) — requested load

### Rules

- Power generated = `windSpeed × 10` kW
- Generated power is capped at `maxCapacity`
- If requested load > available power → allow only available power

### Input Example

```js
turbineLoad(12, 150, 140);
```

### Validation Rules

- All inputs must be **positive numbers**
- `windSpeed` and `connectedLoad` must be **greater than 0**
- `maxCapacity` must be **greater than or equal to 0**
- If input is invalid → return `"Invalid Input"`

### Output Example

```js
{
  allowedLoad: 120,
  powerGenerated: 120
}
```

---

## 🧩 PROBLEM–02: ☀️ Solar Panel Daily Usage Advisor

**Function Name:** `solarUsage(sunHours, panelCapacity, dailyConsumption)`

### Description

- `sunHours`: number
- `panelCapacity`: number (kW per hour)
- `dailyConsumption`: number (kW needed)

### Rules

- Energy produced = `sunHours × panelCapacity`
- If produced energy is less than daily consumption → suggest reducing usage

### Input Example

```js
solarUsage(5, 4, 25);
```

### Validation Rules

- All inputs must be **positive numbers**
- If input is invalid → return `"Invalid Input"`

### Output Example

```js
{
  energyProduced: 20,
  canCoverConsumption: false
}
```

---

## 🧩 PROBLEM–03: 🚿 Smart Irrigation Pump Scheduler

**Function Name:** `pumpScheduler(waterLevel, requiredWater, supplyAvailable, timeOfDay)`

### Description

- `waterLevel`: number (0–100%)
- `requiredWater`: number (liters)
- `supplyAvailable`: boolean
- `timeOfDay`: `"day"` | `"night"`

### Rules

- Start pump **only if** `waterLevel < 50` **and** `supplyAvailable` is `true`
- Night mode → reduce water flow to **50%**

### Input Example

```js
pumpScheduler(30, 200, true, "night");
```

### Validation Rules

- `waterLevel` must be between **0–100**
- `requiredWater` must be **greater than 0**
- `supplyAvailable` must be a **boolean**
- `timeOfDay` must be `"day"` or `"night"`
- If input is invalid → return `"Invalid Input"`

### Output Example

```js
{
  pumpOn: true,
  flowPercent: 50
}
```

---

### 🧩 PROBLEM–04: 🔥 Smart Water Heater Scheduler

**Function Name:** `waterHeaterScheduler(currentTemp, desiredTemp, usagePattern, peakHours)`

### Description

- `currentTemp`: number (°C)
- `desiredTemp`: number (°C)
- `usagePattern`: `"morning"` | `"evening"` | `"night"`
- `peakHours`: boolean (true if electricity cost is high)

### Rules

- Heater turns **ON** only if `currentTemp < desiredTemp`
- Morning → increase power by 2
- Evening → increase power by 1
- Night → no increase
- Peak hours → reduce power by 1 (minimum 1)
- Power level range: 1–5

### Input Example

```js
waterHeaterScheduler(40, 60, "morning", true);
```

### Validation Rules

- `currentTemp` and `desiredTemp` must be numbers
- `usagePattern` must be a valid string (`"morning"`, `"evening"`, `"night"`)
- `peakHours` must be boolean
- If input is invalid → return `"Invalid Input"`

### Output Example

```js
{
  heaterOn: true,
  powerLevel: 2
}
```

---

🧩 PROBLEM–05: 💡 Smart Room Lighting Optimizer

**Function Name:** `lightingOptimizer(rooms, occupancy, timeOfDay, powerLimit)`

### Description

- `rooms`: array of room names
- `occupancy`: object `{ roomName: numberOfPeople }`
- `timeOfDay`: `"day"` | `"night"`
- `powerLimit`: number (maximum watts allowed)

### Rules

- Lights turn ON only if the room is occupied
- Day mode → reduce brightness by 50%
- Night mode → full brightness
- Ensure total power ≤ `powerLimit`
- If total power exceeds the limit → dim low-priority rooms first (rooms with < 2 people)

### Input Example

```js
lightingOptimizer(
  ["Room1", "Room2", "Room3"],
  { Room1: 3, Room2: 1, Room3: 0 },
  "day",
  300,
);
```

### Validation Rules

- `rooms` must be an array of strings
- `occupancy` must be an object with numeric values
- `timeOfDay` must be `"day"` or `"night"`
- `powerLimit` must be a positive number
- If input is invalid → return `"Invalid Input"`

### Output Example

```js
[
  { room: "Room1", lightsOn: true, brightnessPercent: 50 },
  { room: "Room2", lightsOn: true, brightnessPercent: 50 },
  { room: "Room3", lightsOn: false, brightnessPercent: 0 },
];
```

---
