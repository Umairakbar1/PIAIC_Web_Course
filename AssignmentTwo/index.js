console.log("Task 1:");
var convertTemperature = function (valueInCelsius, toFahrenheit) {
    if (toFahrenheit) {
        return "".concat(valueInCelsius * (9 / 5) + 32, " Fahrenheit");
    }
    else {
        return "".concat(valueInCelsius, " Celsius");
    }
};
console.log(convertTemperature(42, true));
console.log("=========");
console.log("Task 2:");
var calculatePercentage = function (value, total) {
    return "".concat((value / total) * 100, "%");
};
console.log(calculatePercentage(350, 500));
console.log("=========");
console.log("Task 3:");
var calculateWeeksAndDays = function (days) {
    var numberOfWeeks = Math.floor(days / 7);
    var numberOfDays = days % 7;
    return "".concat(numberOfWeeks, " weeks and ").concat(numberOfDays, " days");
};
console.log(calculateWeeksAndDays(17));
console.log("=========");
console.log("Task 4:");
var calculateDiscount = function (price) {
    var discountPercentage, discountType;
    if (price > 100) {
        discountPercentage = 10;
        discountType = "10% discount";
    }
    else {
        discountPercentage = 5;
        discountType = "5% discount";
    }
    var discountedPrice = price - (price * discountPercentage / 100);
    return "New Price with ".concat(discountType, ": $").concat(discountedPrice);
};
console.log(calculateDiscount(90));
console.log("=========");
console.log("Task 5:");
var classifyUserAge = function (age) {
    if (age >= 0 && age <= 12) {
        return "User is a Child";
    }
    else if (age >= 13 && age <= 19) {
        return "User is a Teenager";
    }
    else {
        return "User is an Adult";
    }
};
console.log(classifyUserAge(20));
console.log("=========");
console.log("Task 6:");
var recommendClothing = function (temperature) {
    if (temperature <= 20) {
        return "You should wear warm clothes because it is very cold outside";
    }
    else {
        return "You should wear summer clothes because it is very hot outside";
    }
};
console.log(recommendClothing(20));
console.log("=========");
console.log("Task 7:");
var checkDivisibility = function (num) {
    if (num % 5 === 0 && num % 3 === 0) {
        return "It is divisible by both 3 and 5";
    }
    else if (num % 5 === 0) {
        return "It is divisible by 5";
    }
    else if (num % 3 === 0) {
        return "It is divisible by 3";
    }
    else {
        return "It is not divisible by either 3 or 5";
    }
};
console.log(checkDivisibility(30));
console.log("=========");
console.log("Task 8:");
var isLeapYear = function (year) {
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        return "Yes, it's a leap year";
    }
    else {
        return "No, it's not a leap year";
    }
};
console.log(isLeapYear(2000));
console.log("=========");
console.log("Task 9:");
var getDayOfWeek = function (day) {
    var daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    if (day >= 1 && day <= 7) {
        return "It is ".concat(daysOfWeek[day - 1], " today");
    }
    else {
        return "Invalid day number";
    }
};
console.log(getDayOfWeek(6));
console.log("=========");
console.log("Task 10:");
var calculateTotalBill = function (units) {
    var costPerUnit = 5;
    var totalBill = units * costPerUnit;
    if (units > 100) {
        totalBill -= (totalBill * 10 / 100);
    }
    else if (units > 300) {
        totalBill -= (totalBill * 15 / 100);
    }
    else if (units > 500) {
        totalBill -= (totalBill * 25 / 100);
    }
    return "Total bill after tax: $".concat(totalBill);
};
console.log(calculateTotalBill(105));
console.log("=========");
