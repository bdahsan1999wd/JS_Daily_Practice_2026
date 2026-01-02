# 🧠 JS Daily Practice – Day 02

📅 **Date:** 02 January 2026
🎯 **Goal:** Improve problem‑solving skills with arrays & strings
📌 **Focus:** Array Logic + String Processing + Validation

---

## ⚠️ General Rules (Must Follow)

- Solve every problem using a **function**.
- **Return** the result (❌ do not use `console.log` for the solution).
- Proper **input validation** is mandatory.
- If input is invalid, return the **specified error message** for that problem.

---

## 🧩 Problem–01: Sum of Positive Numbers

**Function Name:** `sumPositiveNumbers()`

Create a function that returns the sum of all positive numbers from an array.

### Input

- An array containing mixed values

### Rules

1. If input is not an array → return **"Invalid Input"**.
2. Ignore non‑number values.
3. Ignore negative numbers and zero.

### Output

- Return the sum of positive numbers.

### Example

```js
sumPositiveNumbers([1, -2, 3, 4, "5"]); // 8
sumPositiveNumbers([-1, -5, 0]); // 0
sumPositiveNumbers("not an array"); // "Invalid Input"
```

---

## 🧩 Problem–02: Count Total Words

**Function Name:** `countWords()`

Create a function that counts the total number of words in a sentence.

### Input

- A string sentence

### Rules

1. If input is not a string → return **"Invalid Input"**.
2. Extra spaces before, after, or between words should be ignored.

### Output

- Return the total number of words.

### Example

```js
countWords("I love JavaScript very much"); // 5
countWords("   Learn   JS   Daily  "); // 3
countWords(12345); // "Invalid Input"
```

---

## 🧩 Problem–03: Find Longest Word

**Function Name:** `longestWord()`

Create a function that returns the longest word from a sentence.

### Input

- A string sentence

### Rules

1. If input is not a string → return **"Invalid Input"**.
2. If the sentence is empty or contains no valid words → return **""**.

### Output

- Return the longest word.

### Example

```js
longestWord("I am learning programming"); // "programming"
longestWord(""); // ""
longestWord(100); // "Invalid Input"
```

---

## 🧩 Problem–04: Remove Falsy Values

**Function Name:** `removeFalsy()`

Create a function that removes all falsy values from an array.

### Input

- An array containing mixed values

### Rules

1. If input is not an array → return **"Invalid Input"**.
2. Falsy values include: `false`, `0`, `""`, `null`, `undefined`, `NaN`.

### Output

- Return a new array without falsy values.

### Example

```js
removeFalsy([0, 1, false, 2, "", 3]); // [1, 2, 3]
removeFalsy([null, undefined, "JS", NaN]); // ["JS"]
removeFalsy("array"); // "Invalid Input"
```

---

## 🧩 Problem–05: Simple Email Validator

**Function Name:** `isValidEmail()`

Create a function that checks whether an email address is valid.

### Input

- A string email address

### Rules

1. If input is not a string → return **"Invalid Input"**.
2. Email must contain **"@"** and **"."**.
3. "@" must come before ".".

### Output

- Return **true** if valid, otherwise **false**.

### Example

```js
isValidEmail("test@gmail.com"); // true
isValidEmail("testgmail.com"); // false
isValidEmail(123); // "Invalid Input"
```

---
