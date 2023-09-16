var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var personNameOne = "Basit";
console.log("Hello ".concat(personNameOne));
console.log("=========");
console.log("Task 3:");
var personNameTwo = "abdul basit";
console.log("toLowerCase =>", personNameTwo.toLowerCase());
console.log("toUpperCase =>", personNameTwo.toUpperCase());
console.log("toTitlecase =>", personNameTwo
    .split(" ")
    .map(function (word) { return word[0].toUpperCase() + word.substr(1); })
    .join(" "));
console.log("=========");
console.log("Task 4:");
console.log("Albert Einstein once said, \"If you can't explain it simply, you don't understand it well enough.\"");
console.log("=========");
console.log("Task 5:");
var famousPerson = "Albert Einstein";
var message = "It's not that I'm so smart, it's just that I stay with problems longer.";
console.log("".concat(famousPerson, " once said, \"").concat(message, "\""));
console.log("=========");
console.log("Task 6:");
var strippedNames = "\tAlbert\nEinstein\t";
console.log(strippedNames.trim());
console.log("=========");
console.log("Task 7:");
console.log("Addition =>", 4 + 4);
console.log("Subtraction =>", 10 - 2);
console.log("Multiplication =>", 2 * 4);
console.log("Division =>", 16 / 2);
console.log("=========");
console.log("Task 8:");
console.log("_____________________________________________");
console.log(5 + 3);
console.log("_____________________________________________");
console.log("=========");
console.log("Task 9:");
var favoriteNumberOne = 18;
console.log("My Favorite number is: ".concat(favoriteNumberOne));
console.log("=========");
console.log("Task 10:");
var favoriteNumberTwo = 18;
console.log("My Favorite number is: ".concat(favoriteNumberTwo));
console.log("=========");
console.log("Task 11:");
var namesOne = ["Ali", "Ahmad", "Abdul"];
for (var i = 0; i < namesOne.length; i++) {
    console.log(namesOne[i]);
}
console.log("=========");
console.log("Task 12:");
var namesTwo = ["Ali", "Ahmad", "Abdul"];
for (var i = 0; i < namesTwo.length; i++) {
    console.log("Hello ".concat(namesTwo[i]));
}
console.log("=========");
console.log("Task 13:");
var meansOfTransport = ["Honda 125", "Range Rover"];
for (var i = 0; i < meansOfTransport.length; i++) {
    console.log("I would like to own a ".concat(meansOfTransport[i]));
}
console.log("=========");
console.log("Task 14:");
var guestsListOne = [
    "Imran Khan",
    "Shahid Afridi",
    "Virat Kohli",
    "Babar Azam",
];
for (var i = 0; i < guestsListOne.length; i++) {
    console.log("".concat(guestsListOne[i], " Sir, I would like to invite you for dinner."));
}
console.log("=========");
console.log("Task 15:");
var guestsListTwo = [
    "Imran Khan",
    "Shahid Afridi",
    "Virat Kohli",
    "Babar Azam",
];
for (var i = 0; i < guestsListTwo.length; i++) {
    if (guestsListTwo[i] === "Virat Kohli") {
        console.log("".concat(guestsListTwo[i], " Sir, No worries if you are unable to attend."));
        guestsListTwo[i] = "Misbah ul Haq";
        console.log("".concat(guestsListTwo[i], " Sir, I would like to invite you for dinner."));
    }
    else {
        console.log("".concat(guestsListTwo[i], " Sir, I would like to invite you for dinner."));
    }
}
console.log("Total guests in the list: ".concat(guestsListTwo.length));
console.log("=========");
console.log("Task 16:");
var guestListFour = [
    "Imran Khan",
    "Shahid Afridi",
    "Virat Kohli",
    "Babar Azam",
];
guestListFour.push("Nawaz Sharif");
guestListFour.unshift("Shoaib Malik");
guestListFour.splice(guestListFour.length / 2, 0, "Shahrukh Khan");
console.log("Sir, I have a bigger dinner table now, so I invited 3 more personalities.");
for (var i = 0; i < guestListFour.length; i++) {
    if (guestListFour[i] === "Virat Kohli") {
        console.log("".concat(guestListFour[i], " Sir, No worries if you are unable to attend."));
        guestListFour[i] = "Misbah ul Haq";
        console.log("".concat(guestListFour[i], " Sir, I would like to invite you for dinner."));
    }
    else {
        console.log("".concat(guestListFour[i], " Sir, I would like to invite you for dinner."));
    }
}
console.log("Total guests in the list: ".concat(guestListFour.length));
console.log("=========");
console.log("Task 17:");
var guestsListThree = [
    "Imran Khan",
    "Shahid Afridi",
    "Virat Kohli",
    "Babar Azam",
];
console.log("I'm sorry, but I can only invite 2 guests.");
var newArray = __spreadArray([], guestsListThree, true);
for (var i = 0; i < guestsListThree.length; i++) {
    if (i <= 1) {
        console.log("".concat(guestsListThree[i], " Sir, I would like to invite you for dinner."));
    }
    else {
        console.log("".concat(guestsListThree[i], " Sorry, I don't have space."));
        newArray.pop();
    }
}
guestsListThree = newArray;
console.log("Total guests in the list: ".concat(guestsListThree.length));
console.log("Now Clearing the Array");
guestsListThree.length = 0;
console.log("Total guests in the list: ".concat(guestsListThree.length));
console.log("=========");
console.log("Task 18:");
var locations = ["Canada", "USA", "Brazil", "Russia", "UK"];
console.log("Array is not in alphabetical order", locations);
var clonedArrayForAlphabeticalSort = __spreadArray([], locations, true);
var sortedArrayAlphabetical = clonedArrayForAlphabeticalSort.sort();
console.log("Alphabetical order sorted", sortedArrayAlphabetical);
console.log("Array in its original order", locations);
var clonedArrayForReverseAlphabeticalSort = __spreadArray([], locations, true);
var sortedArrayReverseAlphabetical = clonedArrayForReverseAlphabeticalSort.sort(function (a, b) {
    return a > b ? -1 : 1;
});
console.log("Reverse alphabetical order sorted", sortedArrayReverseAlphabetical);
console.log("Array in its original order", locations);
console.log("=========");
console.log("Task 19:");
var finalGuestsList = __spreadArray(__spreadArray(__spreadArray(__spreadArray([], guestsListOne, true), guestsListTwo, true), guestsListThree, true), guestListFour, true).filter(function (value, index, self) { return self.indexOf(value) === index; });
console.log("Final Guests who are invited", finalGuestsList);
console.log("=========");
console.log("Task 20:");
var addThingsToArrayOne = function () {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    var thingsArray = items;
    console.log("ThingsArray =>", thingsArray);
};
addThingsToArrayOne("Mountains", "rivers", "countries", "cities");
console.log("=========");
console.log("Task 21:");
var addThingsToArray = function () {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    var thingsArrayTwo = items;
    var thingsObject = {};
    for (var i = 0; i < thingsArrayTwo.length; i++) {
        var thing = thingsArrayTwo[i];
        var value = thingsArrayTwo[i];
        thingsObject[thing] = value;
    }
    console.log("thingsObject =>", thingsObject);
};
addThingsToArray("Mountains", "rivers", "countries", "cities");
console.log("=========");
console.log("Task 22:");
var cars = ["Buggati", "Ferrari", "RangRover"];
var indexToFind = 3;
console.log("Array index error", cars[indexToFind]);
indexToFind = 2;
console.log("Corrected array index", cars[indexToFind]);
console.log("=========");
console.log("Task 23:");
var car = "subaru";
console.log("Is car == 'subaru'? I predict True.");
console.log(car == "subaru");
var bike = "honda70";
console.log("Is bike == 'honda70'? I predict True.");
console.log(bike == "honda70");
var laptop = "macbook";
console.log("Is laptop == 'macbook'? I predict True.");
console.log(laptop == "macbook");
var phone = "iphone";
console.log("Is phone == 'iphone'? I predict True.");
console.log(phone == "iphone");
var cycle = "phoneix";
console.log("Is cycle == 'phoneix'? I predict True.");
console.log(cycle == "phoneix");
var myName = "hamza";
console.log("Is myName == 'Ali'? I predict False.");
console.log(myName == "Ali");
var myAge = 26;
console.log("Is myAge == 28? I predict False.");
console.log(myAge == 28);
var isAdmin = "No";
console.log("Is isAdmin == 'Yes'? I predict False.");
console.log(isAdmin == "Yes");
var myFavouriteColor = "Black";
console.log("Is myFavouriteColor == 'Green'? I predict False.");
console.log(myFavouriteColor == "Green");
var myFavouriteFood = "Biryani";
console.log("Is myFavouriteFood == 'Shawarma'? I predict False.");
console.log(myFavouriteFood == "Shawarma");
console.log("=========");
console.log("Task 24:");
var numOne = 1;
console.log("Value of num == 2", numOne == 2);
var numTwo = 1;
console.log("Value of num != 1", numTwo != 1);
var myNameCheck = "Hamza";
console.log("Is myNameCheck == 'hamza'? I predict True.");
console.log(myNameCheck == "hamza");
var num3 = 10;
var num4 = 5;
console.log(">= && ||", num3 >= 5 && num3 <= 5 || num4 >= 5 && num4 <= 5);
var myNewArrayOne = [1, 2, 5, 6];
var numberToCheck = 5;
var isNumberAvailable = false;
for (var i = 0; i < myNewArrayOne.length; i++) {
    if (myNewArrayOne[i] == numberToCheck) {
        isNumberAvailable = true;
        break;
    }
}
console.log("Check for the number available in the array: ", isNumberAvailable);
console.log("=========");
console.log("Task 25:");
var alien_color = "green";
var colorCheckerOne = function (clr) {
    if (alien_color == clr) {
        console.log("You earned 5 points");
    }
    else {
        console.log("no Output");
    }
};
colorCheckerOne("green");
colorCheckerOne("red");
console.log("=========");
console.log("Task 26:");
var alien_color_Two = "green";
var colorCheckerTwo = function (clr) {
    if (clr == alien_color_Two) {
        console.log("You earned 5 points");
    }
    else if (clr == "red") {
        console.log("You earned 10 points");
    }
    else {
        console.log("no Output");
    }
};
colorCheckerTwo("green");
colorCheckerTwo("red");
colorCheckerTwo("blue");
console.log("=========");
console.log("Task 27:");
var alien_color_Three = "green";
var colorCheckerThree = function (clr) {
    if (clr == alien_color_Three) {
        console.log("You earned 5 points");
    }
    else if (clr == "yellow") {
        console.log("You earned 10 points");
    }
    else if (clr == "red") {
        console.log("You earned 15 points");
    }
    else {
        console.log("no Output");
    }
};
colorCheckerThree("green");
colorCheckerThree("yellow");
colorCheckerThree("red");
console.log("=========");
console.log("Task 28:");
var personAgeCalculator = function (age) {
    if (age < 2) {
        console.log("person is a baby");
    }
    else if (age >= 2 && age < 4) {
        console.log("person is a toddler");
    }
    else if (age >= 4 && age < 13) {
        console.log("person is a kid");
    }
    else if (age >= 13 && age < 20) {
        console.log("person is a teenager");
    }
    else if (age >= 20 && age < 65) {
        console.log("person is an adult");
    }
    else if (age >= 65) {
        console.log("person is an elder");
    }
    else {
        console.log("no Output");
    }
};
personAgeCalculator(1);
personAgeCalculator(3);
personAgeCalculator(7);
personAgeCalculator(15);
personAgeCalculator(22);
personAgeCalculator(70);
console.log("=========");
console.log("Task 29:");
var favorite_fruits = ["apple", "orange", "mango", "bananas", "peach"];
for (var i = 0; i < favorite_fruits.length; i++) {
    if (favorite_fruits[i] == "orange") {
        console.log("".concat(favorite_fruits[i], " is in my favorite fruits list"));
    }
    else if (favorite_fruits[i] == "bananas") {
        console.log("".concat(favorite_fruits[i], " is in my favorite fruits list"));
    }
    else if (favorite_fruits[i] == "apple") {
        console.log("".concat(favorite_fruits[i], " is in my favorite fruits list"));
    }
    else if (favorite_fruits[i] == "mango") {
        console.log("".concat(favorite_fruits[i], " is in my favorite fruits list"));
    }
    else {
        console.log("I don't like this fruit");
    }
}
console.log("=========");
console.log("Task 30:");
var userOnWebsite = ["Ahmad", "Ali", "Abdullah", "Hamza", "Akbar"];
for (var i = 0; i < userOnWebsite.length; i++) {
    if (userOnWebsite[i] == "Ahmad") {
        console.log("Hello ".concat(userOnWebsite[i], ", thank you for logging in again"));
    }
    else if (userOnWebsite[i] == "Hamza") {
        console.log("Hello admin ".concat(userOnWebsite[i], " thank you for logging in"));
    }
    else if (userOnWebsite[i] == "Ali") {
        console.log("Hello ".concat(userOnWebsite[i], ", thank you for logging in again"));
    }
    else if (userOnWebsite[i] == "Abdullah") {
        console.log("Hello ".concat(userOnWebsite[i], ", thank you for logging in again"));
    }
    else if (userOnWebsite[i] == "Akbar") {
        console.log("Hello ".concat(userOnWebsite[i], ", thank you for logging in again"));
    }
    else {
        console.log("No user exists with that name");
    }
}
console.log("=========");
console.log("Task 31:");
var userOnWebsiteTwo = ["Ahmad", "Ali", "Abdullah", "Hamza", "Akbar"];
if (userOnWebsite.length == 0) {
    console.log("We need to find some users!");
}
else {
    while (userOnWebsite.length > 0) {
        userOnWebsite.pop();
    }
    console.log("No users found!", userOnWebsite.length);
}
console.log("=========");
console.log("Task 32:");
var current_users = ["Bob11", "John12", "william13", "Emily14", "Martin15"];
var new_users = ["Andy11", "Robert12", "John12", "Emmy13", "Scot12"];
var findingUserNames = function (user) {
    var findingUserIndex = current_users.indexOf(user);
    if (findingUserIndex != -1) {
        return "".concat(user, " needs a new username because it already exists");
    }
    else {
        return "".concat(user, " the username is available");
    }
};
for (var i = 0; i < new_users.length; i++) {
    console.log(findingUserNames(new_users[i]));
}
console.log("=========");
console.log("Task 33:");
var ordinalNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (var i = 0; i < ordinalNumbers.length; i++) {
    if (ordinalNumbers[i] == 1 || ordinalNumbers[i] == 2 || ordinalNumbers[i] == 3) {
    }
    else {
        console.log("".concat(ordinalNumbers[i], "th"));
    }
}
console.log("=========");
console.log("Task 34:");
var pizzas = ["tandori", "pepperoni", "tikka"];
for (var i = 0; i < pizzas.length; i++) {
    console.log("I like ".concat(pizzas[i], " pizza"));
}
console.log("Pizzas are my favorite meal \nI really like to eat them \nI really love pizza!");
console.log("=========");
console.log("Task 35:");
var animals = ["dog", "cat", "rabbit"];
for (var i = 0; i < animals.length; i++) {
    console.log("A ".concat(animals[i], " would make a great pet."));
}
console.log("These animals would make great pets!");
console.log("=========");
console.log("Task 36:");
var makingTShirt = function (size, textToPrint) {
    return "Size: ".concat(size, ", TextToPrint on it: ").concat(textToPrint);
};
console.log(makingTShirt("medium", "Pakistan Zindabad"));
console.log("=========");
console.log("Task 37:");
var makingTShirtTwo = function (textToPrint, size) {
    if (textToPrint === void 0) { textToPrint = "I love TypeScript"; }
    if (size === void 0) { size = "large"; }
    return "Size: ".concat(size, ", TextToPrint on it: ").concat(textToPrint);
};
console.log(makingTShirtTwo());
console.log("=========");
console.log("Task 38:");
var describe_city = function (city, country) {
    if (country === void 0) { country = "Pakistan"; }
    return "".concat(city, " is in ").concat(country);
};
console.log(describe_city("Karachi"));
console.log(describe_city("Faisalabad"));
console.log(describe_city("Mumbai"));
console.log("=========");
console.log("Task 39:");
var city_country = function (city, country) {
    if (country === void 0) { country = "Pakistan"; }
    return "\"".concat(city, ", ").concat(country, "\"");
};
console.log(city_country("Karachi", "Pakistan"));
console.log(city_country("Faisalabad", "Pakistan"));
console.log(city_country("Mumbai", "India"));
console.log("=========");
console.log("Task 40:");
var make_album = function (artist, albumName, track) {
    if (track === void 0) { track = 1; }
    return {
        artist: artist,
        albumName: albumName,
        track: track
    };
};
console.log(make_album("Atif Aslam", "Doorie"));
console.log(make_album("Arijit Singh", "Tum hi ho"));
console.log(make_album("Jubin Nautiyal", "Zindagi tu bata"));
console.log("=========");
console.log("Task 41:");
var magicians = ["Albert", "Michael", "Steve"];
var show_magicians = function (arr) {
    for (var i = 0; i < arr.length; i++) {
        console.log("Hello Mr, ".concat(arr[i], " Magician"));
    }
};
show_magicians(magicians);
console.log("=========");
console.log("Task 42:");
var make_great = function (arr) {
    return arr.map(function (item) { return "Great ".concat(item); });
};
show_magicians(make_great(magicians));
console.log("=========");
console.log("Task 43:");
var copyArrayMagicians = __spreadArray([], magicians, true);
show_magicians(make_great(copyArrayMagicians));
console.log("=========");
console.log("Task 44:");
var mergeArrays = function (arrayOne, arrayTwo) {
    return __spreadArray(__spreadArray([], arrayOne, true), arrayTwo, true);
};
var firstNames = ["John", "Robert", "William"];
var lastNames = ["Smith", "Johnson", "Brown"];
console.log(mergeArrays(firstNames, lastNames));
console.log("=========");
console.log("Task 45:");
var myObject = {
    name: "Hamza",
    age: "26",
    city: "Karachi",
    country: "Pakistan"
};
var displayObject = function (obj) {
    for (var key in obj) {
        console.log("".concat(key, ": ").concat(obj[key]));
    }
};
displayObject(myObject);
console.log("=========");
console.log("Task 46:");
var countryInfo = function (countryName) {
    switch (countryName.toLowerCase()) {
        case "pakistan":
            console.log("Capital: Islamabad");
            console.log("Population: 220 million");
            console.log("Official language: Urdu");
            break;
        case "usa":
            console.log("Capital: Washington, D.C.");
            console.log("Population: 331 million");
            console.log("Official language: English");
            break;
        case "india":
            console.log("Capital: New Delhi");
            console.log("Population: 1.3 billion");
            console.log("Official languages: Hindi and English");
            break;
        default:
            console.log("Country not found");
            break;
    }
};
countryInfo("Pakistan");
countryInfo("USA");
countryInfo("India");
countryInfo("Australia");
console.log("=========");
console.log("Task 47:");
var calculate = function (num1, num2, operator) {
    switch (operator) {
        case "+":
            return num1 + num2;
        case "-":
            return num1 - num2;
        case "*":
            return num1 * num2;
        case "/":
            if (num2 === 0) {
                return "Cannot divide by zero";
            }
            return num1 / num2;
        default:
            return "Invalid operator";
    }
};
console.log("2 + 3 =", calculate(2, 3, "+"));
console.log("5 - 2 =", calculate(5, 2, "-"));
console.log("4 * 6 =", calculate(4, 6, "*"));
console.log("8 / 2 =", calculate(8, 2, "/"));
console.log("7 / 0 =", calculate(7, 0, "/"));
console.log("10 % 3 =", calculate(10, 3, "%"));
console.log("=========");
