// Function to insert a value at a specified index in an array
const originalArray: string[] = ["Bilal", "Usman", "Ali", "Asad"];
const insertionIndex: number = 1;
const insertedValue: string = "NewValue";

console.log("Array before insertion:");
console.log(originalArray);

function insertValueAtIndex(
  arr: string[],
  index: number,
  value: string
): string[] {
  arr.splice(index, 0, value);
  return arr;
}

const newArrayAfterInsertion: string[] = insertValueAtIndex(
  originalArray,
  insertionIndex,
  insertedValue
);

console.log("Array after insertion:");
console.log(newArrayAfterInsertion);
console.log(`Value inserted at index ${insertionIndex}`);

// Printing the first 25 integers using a while loop
let counter = 1;
while (counter <= 25) {
  console.log(counter);
  counter++;
}

// Printing the first 10 even numbers using a while loop
let evenCounter = 1;
while (evenCounter <= 20) {
  if (evenCounter % 2 === 0) {
    console.log(evenCounter);
  }
  evenCounter++;
}

// Function to calculate the factorial of a positive integer using a while loop
const numberForFactorial: number = 5;

function calculateFactorial(num: number): number {
  let factorial: number = 1;
  let i: number = 1;
  while (i <= num) {
    factorial *= i;
    i++;
  }
  return factorial;
}

console.log(
  "Factorial of",
  numberForFactorial,
  "is",
  calculateFactorial(numberForFactorial)
);

// Removing negative numbers from an array
const numbersWithNegatives: number[] = [-33, 44, -66, 32, 34, 5, 2];

function removeNegativeNumbers(arr: number[]): number[] {
  return arr.filter((number) => number >= 0);
}

console.log("Array after removing negative numbers:");
console.log(removeNegativeNumbers(numbersWithNegatives));

// Function to calculate the sum of an array of numbers using a while loop
const arrayToSum: number[] = [44, 55, 65, 789, 23, 22, 45];

function calculateArraySum(arr: number[]): number {
  let sum: number = 0;
  let i: number = 0;
  while (i < arr.length) {
    sum += arr[i];
    i++;
  }
  return sum;
}

console.log("Sum of array elements:", calculateArraySum(arrayToSum));

// Converting Celsius temperatures to Fahrenheit using a while loop
const celsiusTemperatures: number[] = [35, 37, 40, 44, 48, 62, 80, 90, 100];

console.log("Array of Celsius Temperatures:");

function copyArray(arr: number[]): number[] {
  return arr.slice();
}

console.log(
  "Copied Celsius Temperatures Array:",
  copyArray(celsiusTemperatures)
);

function convertCelsiusToFahrenheit(arr: number[]): number[] {
  let i: number = 0;

  while (i < arr.length) {
    arr[i] = (arr[i] * 9) / 5 + 32;
    i++;
  }
  return arr;
}

console.log("Fahrenheit Equivalent of Celsius Temperatures:");
console.log(convertCelsiusToFahrenheit(celsiusTemperatures));

// Implementing a simple shopping cart program using an array
function addItem(cart: Array<string>, itemName: string) {
  cart.push(itemName);
}

function removeItem(cart: Array<string>, itemName: string) {
  const indexToRemove = cart.indexOf(itemName);
  if (indexToRemove !== -1) {
    cart.splice(indexToRemove, 1);
  }
}

function updateItemQuantity(
  cart: string[],
  itemName: string,
  newQuantity: string
) {
  const itemIndex = cart.indexOf(itemName);
  if (itemIndex !== -1) {
    cart[itemIndex] = newQuantity;
  }
}

const shoppingCart: string[] = [];

addItem(shoppingCart, "Apple");
addItem(shoppingCart, "Banana");
addItem(shoppingCart, "Orange");

console.log("Cart contents after adding items:");
console.log(shoppingCart);

removeItem(shoppingCart, "Banana");

console.log("Cart contents after removing Banana:");
console.log(shoppingCart);

updateItemQuantity(shoppingCart, "Apple", "2");

console.log("Cart contents after updating the quantity of Apple to 2:");
console.log(shoppingCart);
