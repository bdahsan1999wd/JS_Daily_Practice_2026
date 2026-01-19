# 🧠 JS Daily Practice – Day 19

📅 **Date:** 19 January 2026
🎯 **Goal:** Real-life monitoring & analytics systems
📌 **Focus:** Weather + Internet + River + Elevator + Transport

---

## ⚠️ General Rules (Must Follow)

- Solve every problem using a **function**.
- **Return** the result (❌ `console.log` is not allowed).
- Proper **input validation** is mandatory.
- If input is invalid → return **"Invalid Input"**.
- No duplicate names allowed.

---

## 🧩 Problem–01: Weather Temperature Trend Analyzer

**Function Name:** `weatherTrendAnalyzer()`

You analyze daily temperatures of different cities.

### Input Example

```js
weatherTrendAnalyzer([
  { city: "Dhaka", temps: [28, 30, 32, 33, 35] },
  { city: "Rangpur", temps: [20, 22, 21, 23, 22] },
  { city: "Cox's Bazar", temps: [34, 36, 37, 38, 40] },
]);
```

### Rules

- Validate input
- No duplicate city names
- Calculate:
  - **average temperature per city**
  - **hottest city** → highest average temperature
  - **heat wave cities** → any day temperature > 35
  - **rising trend cities** → last day > first day

### Return

```js
{
  averageTemp: { [city]: number },
  hottestCity: string,
  heatWaveCities: string[],
  risingTrendCities: string[]
}
```

### Example Usage

```js
const result = weatherTrendAnalyzer([
  { city: "Dhaka", temps: [28, 30, 32, 33, 35] },
  { city: "Rangpur", temps: [20, 22, 21, 23, 22] },
  { city: "Cox's Bazar", temps: [34, 36, 37, 38, 40] },
]);

/*
Expected Output:
{
  averageTemp: { "Dhaka": 31.6, "Rangpur": 21.6, "Cox's Bazar": 37 },
  hottestCity: "Cox's Bazar",
  heatWaveCities: ["Cox's Bazar"],
  risingTrendCities: ["Dhaka", "Rangpur", "Cox's Bazar"]
}
*/
```

---

## 🧩 Problem–02: Internet Speed Stability Analyzer

**Function Name:** `internetSpeedAnalyzer()`

You analyze daily internet speed of different areas.

### Input Example

```js
internetSpeedAnalyzer([
  { area: "Mirpur", speeds: [20, 22, 18, 25, 30] },
  { area: "Dhanmondi", speeds: [50, 48, 47, 49, 50] },
  { area: "Gulshan", speeds: [8, 12, 10, 9, 11] },
]);
```

### Rules

- Validate input
- No duplicate area names
- Calculate:
  - **average speed per area**
  - **fastest area** → highest average speed
  - **poor service areas** → any day speed < 10
  - **stable areas** → (max speed - min speed) < 5

### Return

```js
{
  averageSpeed: { [area]: number },
  fastestArea: string,
  poorServiceAreas: string[],
  stableAreas: string[]
}
```

### Example Usage

```js
const result = internetSpeedAnalyzer([
  { area: "Mirpur", speeds: [20, 22, 18, 25, 30] },
  { area: "Dhanmondi", speeds: [50, 48, 47, 49, 50] },
  { area: "Gulshan", speeds: [8, 12, 10, 9, 11] },
]);

/*
Expected Output:
{
  averageSpeed: { "Mirpur": 23, "Dhanmondi": 48.8, "Gulshan": 10 },
  fastestArea: "Dhanmondi",
  poorServiceAreas: ["Gulshan"],
  stableAreas: ["Dhanmondi"]
}
*/
```

---

## 🧩 Problem–03: River Water Level Risk Analyzer

**Function Name:** `riverLevelAnalyzer()`

You analyze daily water level (cm) of rivers.

### Input Example

```js
riverLevelAnalyzer([
  { river: "Padma", levels: [450, 480, 500, 530, 560] },
  { river: "Jamuna", levels: [300, 310, 320, 330, 340] },
  { river: "Meghna", levels: [550, 560, 570, 580, 590] },
]);
```

### Rules

- Validate input
- No duplicate river names
- Calculate:
  - **average level per river**
  - **most dangerous river** → highest average level
  - **flood risk rivers** → any day level > 550
  - **rising rivers** → last day > first day

### Return

```js
{
  averageLevel: { [river]: number },
  mostDangerousRiver: string,
  floodRiskRivers: string[],
  risingRivers: string[]
}
```

### Example Usage

```js
const result = riverLevelAnalyzer([
  { river: "Padma", levels: [450, 480, 500, 530, 560] },
  { river: "Jamuna", levels: [300, 310, 320, 330, 340] },
  { river: "Meghna", levels: [550, 560, 570, 580, 590] },
]);

/*
Expected Output:
{
  averageLevel: { "Padma": 504, "Jamuna": 320, "Meghna": 570 },
  mostDangerousRiver: "Meghna",
  floodRiskRivers: ["Padma", "Meghna"],
  risingRivers: ["Padma", "Jamuna", "Meghna"]
}
*/
```

---

## 🧩 Problem–04: Elevator Usage Load Analyzer

**Function Name:** `elevatorUsageAnalyzer()`

You analyze daily trip counts of building elevators.

### Input Example

```js
elevatorUsageAnalyzer([
  { elevator: "Lift A", trips: [120, 140, 160, 180, 210] },
  { elevator: "Lift B", trips: [300, 290, 280, 270, 260] },
  { elevator: "Lift C", trips: [100, 110, 120, 130, 140] },
]);
```

### Rules

- Validate input
- No duplicate elevator names
- Calculate:
  - **total trips per elevator**
  - **most used elevator** → highest total trips
  - **overloaded elevators** → average trips > 250
  - **declining usage elevators** → last day < first day

### Return

```js
{
  totalTrips: { [elevator]: number },
  mostUsedElevator: string,
  overloadedElevators: string[],
  decliningUsageElevators: string[]
}
```

### Example Usage

```js
const result = elevatorUsageAnalyzer([
  { elevator: "Lift A", trips: [120, 140, 160, 180, 210] },
  { elevator: "Lift B", trips: [300, 290, 280, 270, 260] },
  { elevator: "Lift C", trips: [100, 110, 120, 130, 140] },
]);

/*
Expected Output:
{
  totalTrips: { "Lift A": 810, "Lift B": 1400, "Lift C": 600 },
  mostUsedElevator: "Lift B",
  overloadedElevators: ["Lift B"],
  decliningUsageElevators: ["Lift B"]
}
*/
```

---

## 🧩 Problem–05: Bus Route Passenger Load Analyzer

**Function Name:** `busRouteLoadAnalyzer()`

You analyze daily passenger count of bus routes.

### Input Example

```js
busRouteLoadAnalyzer([
  { route: "Route 1", passengers: [120, 150, 180, 200, 230] },
  { route: "Route 2", passengers: [300, 280, 260, 250, 240] },
  { route: "Route 3", passengers: [50, 60, 55, 65, 70] },
]);
```

### Rules

- Validate input
- No duplicate route names
- Calculate:
  - **average passengers per route**
  - **busiest route** → highest average passengers
  - **overcrowded routes** → any day passengers > 400
  - **declining routes** → last day < first day

### Return

```js
{
  averagePassengers: { [route]: number },
  busiestRoute: string,
  overcrowdedRoutes: string[],
  decliningRoutes: string[]
}
```

### Example Usage

```js
const result = busRouteLoadAnalyzer([
  { route: "Route 1", passengers: [120, 150, 180, 200, 230] },
  { route: "Route 2", passengers: [300, 280, 260, 250, 240] },
  { route: "Route 3", passengers: [50, 60, 55, 65, 70] },
]);

/*
Expected Output:
{
  averagePassengers: { "Route 1": 176, "Route 2": 266, "Route 3": 60 },
  busiestRoute: "Route 2",
  overcrowdedRoutes: [],
  decliningRoutes: ["Route 2"]
}
*/
```

---
