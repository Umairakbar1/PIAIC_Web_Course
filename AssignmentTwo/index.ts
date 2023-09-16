console.log("Task 1:");

const convertTemperature = (valueInCelsius, toFahrenheit) => {
    if (toFahrenheit) {
        return `${valueInCelsius * (9/5) + 32} Fahrenheit`;
    } else {
        return `${valueInCelsius} Celsius`;
    }
};

console.log(convertTemperature(42, true));
console.log("=========");

console.log("Task 2:");

const calculatePercentage = (value, total) => {
    return `${(value / total) * 100}%`;
};

console.log(calculatePercentage(350, 500));
console.log("=========");

console.log("Task 3:");

const calculateWeeksAndDays = (days) => {
    const numberOfWeeks = Math.floor(days / 7);
    const numberOfDays = days % 7;
    return `${numberOfWeeks} weeks and ${numberOfDays} days`;
};

console.log(calculateWeeksAndDays(17));
console.log("=========");

console.log("Task 4:");

const calculateDiscount = (price) => {
    let discountPercentage, discountType;

    if (price > 100) {
        discountPercentage = 10;
        discountType = "10% discount";
    } else {
        discountPercentage = 5;
        discountType = "5% discount";
    }

    const discountedPrice = price - (price * discountPercentage / 100);
    return `New Price with ${discountType}: $${discountedPrice}`;
};

console.log(calculateDiscount(90));
console.log("=========");

console.log("Task 5:");

const classifyUserAge = (age) => {
    if (age >= 0 && age <= 12) {
        return `User is a Child`;
    } else if (age >= 13 && age <= 19) {
        return `User is a Teenager`;
    } else {
        return `User is an Adult`;
    }
};

console.log(classifyUserAge(20));
console.log("=========");

console.log("Task 6:");

const recommendClothing = (temperature) => {
    if (temperature <= 20) {
        return `You should wear warm clothes because it is very cold outside`;
    } else {
        return `You should wear summer clothes because it is very hot outside`;
    }
};

console.log(recommendClothing(20));
console.log("=========");

console.log("Task 7:");

const checkDivisibility = (num) => {
    if (num % 5 === 0 && num % 3 === 0) {
        return `It is divisible by both 3 and 5`;
    } else if (num % 5 === 0) {
        return `It is divisible by 5`;
    } else if (num % 3 === 0) {
        return `It is divisible by 3`;
    } else {
        return `It is not divisible by either 3 or 5`;
    }
};

console.log(checkDivisibility(30));
console.log("=========");

console.log("Task 8:");

const isLeapYear = (year) => {
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        return `Yes, it's a leap year`;
    } else {
        return `No, it's not a leap year`;
    }
};

console.log(isLeapYear(2000));
console.log("=========");

console.log("Task 9:");

const getDayOfWeek = (day) => {
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    if (day >= 1 && day <= 7) {
        return `It is ${daysOfWeek[day - 1]} today`;
    } else {
        return `Invalid day number`;
    }
};

console.log(getDayOfWeek(6));
console.log("=========");

console.log("Task 10:");

const calculateTotalBill = (units) => {
    const costPerUnit = 5;
    let totalBill = units * costPerUnit;

    if (units > 100) {
        totalBill -= (totalBill * 10 / 100);
    } else if (units > 300) {
        totalBill -= (totalBill * 15 / 100);
    } else if (units > 500) {
        totalBill -= (totalBill * 25 / 100);
    }

    return `Total bill after tax: $${totalBill}`;
};

console.log(calculateTotalBill(105));
console.log("=========");
