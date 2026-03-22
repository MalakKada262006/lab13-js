// Task 1: Code the timesTwo function declaration
// Create a function named timesTwo that takes a number and returns the value multiplied by 2
function timesTwo(n) {
  return n * 2;
}

// Task 2: Export the timesTwo function as a module
// Use module.exports to export the timesTwo function
module.exports = timesTwo;
// timesTwo.js
function timesTwo(n) {
  // Validation minimale : on refuse les entrées non numériques
  if (typeof n !== "number" || Number.isNaN(n)) {
    throw new Error("Input must be a number");
  }

  return n * 2;
}

module.exports = timesTwo;