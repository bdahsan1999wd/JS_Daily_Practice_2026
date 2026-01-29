# 💥 🧠 JS DAILY PRACTICE – DAY 29

📅 **Goal:** Real-life automation & smart decision systems
🎯 **Focus:** Device Logic + Condition Engine + Safety Rules + Optimization + Control System

---

## ⚠️ General Rules

- Solve every problem using a **function**
- **Return** the result (❌ do not use `console.log`)
- Proper **input validation** is mandatory
- If input is invalid → return `"Invalid Input"`

---

## 🧩 PROBLEM–01: 🔋 IPS / Inverter Smart Backup Controller

**Function Name:** `manageIPS(batteryPercent, loadWatts, mode)`

### Description

- `batteryPercent`: number (0–100)
- `loadWatts`: number
- `mode`: `"eco"` | `"normal"` | `"performance"`

### Rules

- If battery < 10% → **emergency shutdown**
- Else if battery < 20% → force **main line**
- If load > 1200W → turn off heavy devices
- Mode behavior:
  - eco → reduce load by 30%
  - normal → no change
  - performance → allow +20% load

### Input Example

```js
manageIPS(15, 1000, "eco");
```

### Validation Rules

- `batteryPercent` must be a number between **0–100**
- `loadWatts` must be a **positive number**
- `mode` must be a **valid string**
- If input is invalid → return `"Invalid Input"`

### Output

```js
{
  powerSource: "line",
  allowedLoad: 700,
  warning: "Low battery"
}
```

---

## 🧩 PROBLEM–02: 🌡️ Smart Room AC Auto Controller

**Function Name:** `controlAC(temp, humidity, peopleCount, timeOfDay)`

### Description

- `temp`: number (°C)
- `humidity`: number (0–100)
- `peopleCount`: number
- `timeOfDay`: `"day"` | `"night"`

### Rules

- If `temp` < 24 → AC off
- If `humidity` > 70 → dry mode
- If `peopleCount` > 5 → increase cooling
- If `timeOfDay` is `"night"` → reduce power level by 1 (min 1)

### Input Example

```js
controlAC(30, 75, 6, "night");
```

### Validation Rules

- All numeric inputs must be valid numbers
- `timeOfDay` must be `"day"` or `"night"`
- If input is invalid → return `"Invalid Input"`

### Output

```js
{
  acOn: true,
  mode: "dry",
  powerLevel: 3
}
```

---

## 🧩 PROBLEM–03: 🚰 Water Tank Auto Motor System

**Function Name:** `controlMotor(waterLevel, isMunicipalWaterAvailable)`

### Description

- `waterLevel`: number (0–100)
- `isMunicipalWaterAvailable`: boolean

### Rules

- If `waterLevel` > 90% → stop motor
- If `waterLevel` < 30% **AND** supply available → start motor
- If supply not available → waiting

### Input Example

```js
controlMotor(25, true);
```

### Validation Rules

- `waterLevel` must be a number between 0–100
- `isMunicipalWaterAvailable` must be a boolean
- If input is invalid → return `"Invalid Input"`

### Output

```js
{
  motorOn: true,
  status: "filling"
}
```

---

## 🧩 PROBLEM–04: 🚗 Smart Car Fuel & Range Advisor

**Function Name:** `fuelAdvisor(fuelPercent, distanceToDestination, avgMileage)`

### Description

- `fuelPercent`: number (0–100)
- `distanceToDestination`: number (km)
- `avgMileage`: number (km per 100% fuel)

### Rules

- Calculate reachable distance
- If `fuelPercent` < 15% → urgent warning
- If cannot reach → suggest refuel

### Input Example

```js
fuelAdvisor(20, 150, 10);
```

### Validation Rules

- All inputs must be positive numbers
- `fuelPercent` must be between 0–100
- If input is invalid → return `"Invalid Input"`

### Output

```js
{
  canReach: false,
  warning: null,
  suggestedAction: "refuel"
}
```

---

## 🧩 PROBLEM–05: 🏠 Smart Elevator Power Manager

**Function Name:** `manageElevatorPower(floorRequests, powerMode, batteryBackupPercent)`

### Description

- `floorRequests`: number[] (array of floor numbers)
- `powerMode`: `"line"` | `"battery"`
- `batteryBackupPercent`: number (0–100)

### Rules

- If on battery **AND** battery < 25% → only allow nearest 2 floors
- If too many requests → process only 5 at a time
- If battery < 10% → emergency mode (only ground floor)

### Input Example

```js
manageElevatorPower([1, 5, 7, 10, 12, 15], "battery", 20);
```

### Validation Rules

- `floorRequests` must be an array of numbers
- `powerMode` must be valid (`"line"` or `"battery"`)
- `batteryBackupPercent` must be between 0–100
- If input is invalid → return `"Invalid Input"`

### Output

```js
{
  activeRequests: [1,5],
  mode: "limited"
}
```

---
