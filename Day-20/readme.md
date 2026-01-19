# 🧠 JS Daily Practice – Day 20

📅 **Date:** 20 January 2026
🎯 **Goal:** Real-life monitoring & analytics systems
📌 **Focus:** Solar + Stock + Smart Home + Server + Factory

---

## ⚠️ General Rules (Must Follow)

- Solve every problem using a **function**.
- **Return** the result (❌ `console.log` is not allowed).
- Proper **input validation** is mandatory.
- If input is invalid → return **"Invalid Input"**.
- No duplicate names allowed.

---

## 🧩 Problem–01: Solar Panel Output Analyzer

**Function Name:** `solarOutputAnalyzer()`

You analyze daily output (kWh) of solar panels.

### Input Example

```js
solarOutputAnalyzer([
  { panel: "Panel A", output: [400, 420, 450, 470, 500] },
  { panel: "Panel B", output: [300, 310, 320, 330, 340] },
]);
```

### Rules

- Validate input
- No duplicate panel names
- Calculate:
  - **average output per panel**
  - **highest producing panel** → highest average
  - **underperforming panels** → any day output < 350
  - **unstable panels** → any day change > 50

### Return

```js
{
  averageOutput: { [panel]: number },
  highestProducingPanel: string,
  underperformingPanels: string[],
  unstablePanels: string[]
}
```

### Example Usage

```js
const result = solarOutputAnalyzer([
  { panel: "Panel A", output: [400, 420, 450, 470, 500] },
  { panel: "Panel B", output: [300, 310, 320, 330, 340] },
]);

/*
Expected Output:
{
  averageOutput: { "Panel A": 448, "Panel B": 320 },
  highestProducingPanel: "Panel A",
  underperformingPanels: ["Panel B"],
  unstablePanels: []
}
*/
```

---

## 🧩 Problem–02: Stock Price Volatility Analyzer

**Function Name:** `stockVolatilityAnalyzer()`

You analyze daily stock prices of different companies.

### Input Example

```js
stockVolatilityAnalyzer([
  { company: "Company A", prices: [120, 125, 130, 128, 135] },
  { company: "Company B", prices: [80, 78, 82, 85, 79] },
]);
```

### Rules

- Validate input
- No duplicate company names
- Calculate:
  - **average price per company**
  - **most valuable company** → highest average price
  - **volatile companies** → any day change > 10
  - **declining companies** → last day < first day

### Return

```js
{
  averagePrice: { [company]: number },
  mostValuableCompany: string,
  volatileCompanies: string[],
  decliningCompanies: string[]
}
```

### Example Usage

```js
const result = stockVolatilityAnalyzer([
  { company: "Company A", prices: [120, 125, 130, 128, 135] },
  { company: "Company B", prices: [80, 78, 82, 85, 79] },
]);

/*
Expected Output:
{
  averagePrice: { "Company A": 127.6, "Company B": 80.8 },
  mostValuableCompany: "Company A",
  volatileCompanies: [],
  decliningCompanies: ["Company B"]
}
*/
```

---

## 🧩 Problem–03: Smart Home Energy Usage Analyzer

**Function Name:** `smartHomeEnergyAnalyzer()`

You analyze daily energy usage (kWh) of smart homes.

### Input Example

```js
smartHomeEnergyAnalyzer([
  { home: "Home A", usage: [12, 15, 14, 16, 18] },
  { home: "Home B", usage: [20, 18, 22, 21, 19] },
  { home: "Home C", usage: [8, 10, 9, 11, 12] },
]);
```

### Rules

- Validate input
- No duplicate home names
- Calculate:
  - **average usage per home**
  - **highest consuming home** → highest average
  - **overconsuming homes** → any day usage > 20
  - **stable homes** → (max usage - min usage) < 5

### Return

```js
{
  averageUsage: { [home]: number },
  highestConsumingHome: string,
  overconsumingHomes: string[],
  stableHomes: string[]
}
```

### Example Usage

```js
const result = smartHomeEnergyAnalyzer([
  { home: "Home A", usage: [12, 15, 14, 16, 18] },
  { home: "Home B", usage: [20, 18, 22, 21, 19] },
  { home: "Home C", usage: [8, 10, 9, 11, 12] },
]);

/*
Expected Output:
{
  averageUsage: { "Home A": 15, "Home B": 20, "Home C": 10 },
  highestConsumingHome: "Home B",
  overconsumingHomes: ["Home B"],
  stableHomes: ["Home B", "Home C"]
}
*/
```

---

## 🧩 Problem–04: Server CPU Load Analyzer

**Function Name:** `serverCpuLoadAnalyzer()`

You analyze daily CPU load (%) of multiple servers.

### Input Example

```js
serverCpuLoadAnalyzer([
  { server: "Server A", load: [45, 50, 55, 60, 65] },
  { server: "Server B", load: [70, 68, 72, 75, 73] },
  { server: "Server C", load: [30, 35, 32, 38, 40] },
]);
```

### Rules

- Validate input
- No duplicate server names
- Calculate:
  - **average load per server**
  - **most loaded server** → highest average
  - **overloaded servers** → any day load > 75
  - **stable servers** → (max load - min load) < 10

### Return

```js
{
  averageLoad: { [server]: number },
  mostLoadedServer: string,
  overloadedServers: string[],
  stableServers: string[]
}
```

### Example Usage

```js
const result = serverCpuLoadAnalyzer([
  { server: "Server A", load: [45, 50, 55, 60, 65] },
  { server: "Server B", load: [70, 68, 72, 75, 73] },
  { server: "Server C", load: [30, 35, 32, 38, 40] },
]);

/*
Expected Output:
{
  averageLoad: { "Server A": 55, "Server B": 71.6, "Server C": 35 },
  mostLoadedServer: "Server B",
  overloadedServers: [],
  stableServers: ["Server B"]
}
*/
```

---

## 🧩 Problem–05: Machine Performance Analyzer

**Function Name:** `machinePerformanceAnalyzer()`

You analyze daily performance metrics (units produced) of multiple machines.

### Input Example

```js
machinePerformanceAnalyzer([
  { machine: "Machine A", output: [120, 130, 125, 140, 150] },
  { machine: "Machine B", output: [200, 210, 205, 220, 215] },
  { machine: "Machine C", output: [90, 100, 95, 105, 110] },
]);
```

### Rules

- Validate input
- No duplicate machine names
- Calculate:
  - **average output per machine**
  - **highest performing machine** → highest average output
  - **underperforming machines** → any day output < 100
  - **stable machines** → (max output - min output) < 20

### Return

```js
{
  averageOutput: { [machine]: number },
  highestPerformingMachine: string,
  underperformingMachines: string[],
  stableMachines: string[]
}

```

### Example Usage

```js
const result = machinePerformanceAnalyzer([
  { machine: "Machine A", output: [120, 130, 125, 140, 150] },
  { machine: "Machine B", output: [200, 210, 205, 220, 215] },
  { machine: "Machine C", output: [90, 100, 95, 105, 110] },
]);

/*
Expected Output:
{
  averageOutput: { "Machine A": 133, "Machine B": 210, "Machine C": 100 },
  highestPerformingMachine: "Machine B",
  underperformingMachines: ["Machine C"],
  stableMachines: []
}
*/
```

---
