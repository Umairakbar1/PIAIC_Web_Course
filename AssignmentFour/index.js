// Function to insert a value at a specified index in an array
var originalArray = ["Bilal", "Usman", "Ali", "Asad"];
var insertionIndex = 1;
var insertedValue = "NewValue";
console.log("Array before insertion:");
console.log(originalArray);
function insertValueAtIndex(arr, index, value) {
    arr.splice(index, 0, value);
    return arr;
}
var newArrayAfterInsertion = insertValueAtIndex(originalArray, insertionIndex, insertedValue);
console.log("Array after insertion:");
console.log(newArrayAfterInsertion);
console.log("Value inserted at index ".concat(insertionIndex));
// Printing the first 25 integers using a while loop
var counter = 1;
while (counter <= 25) {
    console.log(counter);
    counter++;
}
// Printing the first 10 even numbers using a while loop
var evenCounter = 1;
while (evenCounter <= 20) {
    if (evenCounter % 2 === 0) {
        console.log(evenCounter);
    }
    evenCounter++;
}
// Function to calculate the factorial of a positive integer using a while loop
var numberForFactorial = 5;
function calculateFactorial(num) {
    var factorial = 1;
    var i = 1;
    while (i <= num) {
        factorial *= i;
        i++;
    }
    return factorial;
}
console.log("Factorial of", numberForFactorial, "is", calculateFactorial(numberForFactorial));
// Removing negative numbers from an array
var numbersWithNegatives = [-33, 44, -66, 32, 34, 5, 2];
function removeNegativeNumbers(arr) {
    return arr.filter(function (number) { return number >= 0; });
}
console.log("Array after removing negative numbers:");
console.log(removeNegativeNumbers(numbersWithNegatives));
// Function to calculate the sum of an array of numbers using a while loop
var arrayToSum = [44, 55, 65, 789, 23, 22, 45];
function calculateArraySum(arr) {
    var sum = 0;
    var i = 0;
    while (i < arr.length) {
        sum += arr[i];
        i++;
    }
    return sum;
}
console.log("Sum of array elements:", calculateArraySum(arrayToSum));
// Converting Celsius temperatures to Fahrenheit using a while loop
var celsiusTemperatures = [35, 37, 40, 44, 48, 62, 80, 90, 100];
console.log("Array of Celsius Temperatures:");
function copyArray(arr) {
    return arr.slice();
}
console.log("Copied Celsius Temperatures Array:", copyArray(celsiusTemperatures));
function convertCelsiusToFahrenheit(arr) {
    var i = 0;
    while (i < arr.length) {
        arr[i] = (arr[i] * 9) / 5 + 32;
        i++;
    }
    return arr;
}
console.log("Fahrenheit Equivalent of Celsius Temperatures:");
console.log(convertCelsiusToFahrenheit(celsiusTemperatures));
// Implementing a simple shopping cart program using an array
function addItem(cart, itemName) {
    cart.push(itemName);
}
function removeItem(cart, itemName) {
    var indexToRemove = cart.indexOf(itemName);
    if (indexToRemove !== -1) {
        cart.splice(indexToRemove, 1);
    }
}
function updateItemQuantity(cart, itemName, newQuantity) {
    var itemIndex = cart.indexOf(itemName);
    if (itemIndex !== -1) {
        cart[itemIndex] = newQuantity;
    }
}
var shoppingCart = [];
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
