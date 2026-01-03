# 🧠 JS Daily Practice – Day 03

📅 **Date:** 03 January 2026
🎯 **Goal:** Strengthen logic building & edge-case handling
📌 **Focus:** Array + String Combination + Conditional Logic

---

## ⚠️ General Rules (Must Follow)

- Solve every problem using a function.

- **Return** the result (❌ do not use `console.log` for the solution).

- Proper **input validation** is mandatory.

- If input is invalid, return the **specified error message** for that problem.

---

## 🧩 Problem–01: Average of Valid Numbers

**Function Name:** `averageNumbers()`

Create a function that calculates the average of all valid positive numbers in an array.

### Input

- An array containing mixed values

### Rules

1. If input is not an array → return **"Invalid Input".**

2. Ignore non-number values.

3. Ignore negative numbers and zero.

4. If no valid numbers exist → return 0.

### Output

- Return the average value.

### Example

```js
averageNumbers([10, 20, 30]); // 20
averageNumbers([10, "a", -5, 20]); // 15
averageNumbers([]); // 0
averageNumbers("array"); // "Invalid Input"
```

---

## 🧩 Problem–02: Filter Even Numbers from Mixed Array

**Function Name:** `filterEvenNumbers()`

Create a function that filters out all even numbers from an array containing mixed values.

### Input

- An array containing numbers and other types of values

### Rules

1. If input is not an array → return **"Invalid Input".**

2. Ignore non-number values.

3. Return an empty array if no even numbers are found.

### Output

- An array containing only the even numbers.

### Example

```js
filterEvenNumbers([1, 2, 3, 4, "a", 6]); // [2, 4, 6]
filterEvenNumbers([1, 3, 5]); // []
filterEvenNumbers("not an array"); // "Invalid Input"
```

---

## 🧩 Problem–03: Count Vowels in a String

**Function Name:** `countVowels()`

Create a function that counts how many vowels are present in a given string.

### Input

- A string

### Rules

1. If input is not a string → return **"Invalid Input".**

2. Count vowels **a, e, i, o, u** (both uppercase and lowercase).

3. Ignore non-alphabetic characters.

4. Return 0 if no vowels are found.

### Output

- Return the total number of vowels.

### Example

```js
countVowels("JavaScript"); // 3
countVowels("Hello World!"); // 3
countVowels("BCDFG"); // 0
countVowels(12345); // "Invalid Input"
```

---

## 🧩 Problem–04: Merge Two Arrays and Remove Duplicates

**Function Name:** `mergeUniqueArrays()`

Create a function that merges two arrays and removes duplicate values.

### Input

- Two arrays containing numbers or strings

### Rules

1. If any input is not an array → return **"Invalid Input".**

2. Preserve the original order of first occurrences.

3. Return an empty array if both arrays are empty or contain no valid values.

### Output

- A new array containing merged unique values.

### Example

```js
mergeUniqueArrays([1, 2, 3], [2, 3, 4]); // [1, 2, 3, 4]
mergeUniqueArrays(["a", "b"], ["b", "c"]); // ["a", "b", "c"]
mergeUniqueArrays([], []); // []
mergeUniqueArrays("not an array", [1, 2]); // "Invalid Input"
```

---

## 🧩 Problem–05: Find the Shortest Word in a Sentence

**Function Name:** `shortestWord()`

Create a function that finds the shortest word in a given sentence.

### Input

- A string sentence

### Rules

1. If input is not a string → return **"Invalid Input".**

2. Ignore punctuation.

3. If the sentence is empty or contains no valid words → return an empty string `""`.

4. If multiple words have the same shortest length, return the first one.

### Output

- Return the shortest word as a string.

### Example

```js
shortestWord("I love JavaScript"); // "I"
shortestWord("Find the shortest word"); // "the"
shortestWord(""); // ""
shortestWord(12345); // "Invalid Input"
```

---
