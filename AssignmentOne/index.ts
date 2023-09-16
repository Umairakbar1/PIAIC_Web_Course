const personNameOne: string = "Basit";
console.log(`Hello ${personNameOne}`);
console.log("=========");

console.log("Task 3:");
const personNameTwo: string = "abdul basit";
console.log("toLowerCase =>", personNameTwo.toLowerCase());
console.log("toUpperCase =>", personNameTwo.toUpperCase());
console.log(
  "toTitlecase =>",
  personNameTwo
    .split(" ")
    .map((word: string) => word[0].toUpperCase() + word.substr(1))
    .join(" ")
);
console.log("=========");

console.log("Task 4:");
console.log(
  `Albert Einstein once said, "If you can't explain it simply, you don't understand it well enough."`
);
console.log("=========");

console.log("Task 5:");
const famousPerson: string = "Albert Einstein";
const message: string =
  "It's not that I'm so smart, it's just that I stay with problems longer.";
console.log(`${famousPerson} once said, "${message}"`);
console.log("=========");

console.log("Task 6:");
const strippedNames: string = `\tAlbert\nEinstein\t`;
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
const favoriteNumberOne: number = 18;
console.log(`My Favorite number is: ${favoriteNumberOne}`);
console.log("=========");

console.log("Task 10:");
const favoriteNumberTwo: number = 18;
console.log(`My Favorite number is: ${favoriteNumberTwo}`);
console.log("=========");

console.log("Task 11:");
const namesOne: Array<string> = ["Ali", "Ahmad", "Abdul"];
for (let i: number = 0; i < namesOne.length; i++) {
  console.log(namesOne[i]);
}
console.log("=========");

console.log("Task 12:");
const namesTwo: Array<string> = ["Ali", "Ahmad", "Abdul"];
for (let i: number = 0; i < namesTwo.length; i++) {
  console.log(`Hello ${namesTwo[i]}`);
}
console.log("=========");

console.log("Task 13:");
const meansOfTransport: Array<string> = ["Honda 125", "Range Rover"];
for (let i: number = 0; i < meansOfTransport.length; i++) {
  console.log(`I would like to own a ${meansOfTransport[i]}`);
}
console.log("=========");

console.log("Task 14:");
const guestsListOne: Array<string> = [
  "Imran Khan",
  "Shahid Afridi",
  "Virat Kohli",
  "Babar Azam",
];
for (let i: number = 0; i < guestsListOne.length; i++) {
  console.log(`${guestsListOne[i]} Sir, I would like to invite you for dinner.`);
}
console.log("=========");

console.log("Task 15:");
const guestsListTwo: Array<string> = [
  "Imran Khan",
  "Shahid Afridi",
  "Virat Kohli",
  "Babar Azam",
];
for (let i: number = 0; i < guestsListTwo.length; i++) {
  if (guestsListTwo[i] === "Virat Kohli") {
    console.log(`${guestsListTwo[i]} Sir, No worries if you are unable to attend.`);
    guestsListTwo[i] = "Misbah ul Haq";
    console.log(`${guestsListTwo[i]} Sir, I would like to invite you for dinner.`);
  } else {
    console.log(`${guestsListTwo[i]} Sir, I would like to invite you for dinner.`);
  }
}
console.log(`Total guests in the list: ${guestsListTwo.length}`);
console.log("=========");

console.log("Task 16:");
const guestListFour: Array<string> = [
  "Imran Khan",
  "Shahid Afridi",
  "Virat Kohli",
  "Babar Azam",
];
guestListFour.push("Nawaz Sharif");
guestListFour.unshift("Shoaib Malik");
guestListFour.splice(guestListFour.length / 2, 0, "Shahrukh Khan");
console.log("Sir, I have a bigger dinner table now, so I invited 3 more personalities.");
for (let i: number = 0; i < guestListFour.length; i++) {
  if (guestListFour[i] === "Virat Kohli") {
    console.log(`${guestListFour[i]} Sir, No worries if you are unable to attend.`);
    guestListFour[i] = "Misbah ul Haq";
    console.log(`${guestListFour[i]} Sir, I would like to invite you for dinner.`);
  } else {
    console.log(`${guestListFour[i]} Sir, I would like to invite you for dinner.`);
  }
}
console.log(`Total guests in the list: ${guestListFour.length}`);
console.log("=========");

console.log("Task 17:");
let guestsListThree: Array<string> = [
  "Imran Khan",
  "Shahid Afridi",
  "Virat Kohli",
  "Babar Azam",
];
console.log("I'm sorry, but I can only invite 2 guests.");
let newArray = [...guestsListThree];
for (let i: number = 0; i < guestsListThree.length; i++) {
  if (i <= 1) {
    console.log(`${guestsListThree[i]} Sir, I would like to invite you for dinner.`);
  } else {
    console.log(`${guestsListThree[i]} Sorry, I don't have space.`);
    newArray.pop();
  }
}
guestsListThree = newArray;
console.log(`Total guests in the list: ${guestsListThree.length}`);
console.log("Now Clearing the Array");
guestsListThree.length = 0;
console.log(`Total guests in the list: ${guestsListThree.length}`);
console.log("=========");

console.log("Task 18:");
const locations: Array<string> = ["Canada", "USA", "Brazil", "Russia", "UK"];
console.log("Array is not in alphabetical order", locations);
const clonedArrayForAlphabeticalSort: Array<string> = [...locations];
const sortedArrayAlphabetical: Array<string> = clonedArrayForAlphabeticalSort.sort();
console.log("Alphabetical order sorted", sortedArrayAlphabetical);
console.log("Array in its original order", locations);
const clonedArrayForReverseAlphabeticalSort: Array<string> = [...locations];
const sortedArrayReverseAlphabetical: Array<string> = clonedArrayForReverseAlphabeticalSort.sort((a, b) =>
  a > b ? -1 : 1
);
console.log("Reverse alphabetical order sorted", sortedArrayReverseAlphabetical);
console.log("Array in its original order", locations);
console.log("=========");

console.log("Task 19:");
let finalGuestsList: Array<string> = [
  ...guestsListOne,
  ...guestsListTwo,
  ...guestsListThree,
  ...guestListFour
].filter((value, index, self) => self.indexOf(value) === index);
console.log("Final Guests who are invited", finalGuestsList);
console.log("=========");

console.log("Task 20:");
const addThingsToArrayOne = (...items: any) => {
  let thingsArray: Array<string> = items;
  console.log("ThingsArray =>", thingsArray);
};
addThingsToArrayOne("Mountains", "rivers", "countries", "cities");
console.log("=========");

console.log("Task 21:");
const addThingsToArray = (...items: any) => {
  let thingsArrayTwo: Array<string> = items;
  const thingsObject: { [key: string]: string } = {};
  for (let i = 0; i < thingsArrayTwo.length; i++) {
    let thing = thingsArrayTwo[i];
    let value = thingsArrayTwo[i];
    thingsObject[thing] = value;
  }
  console.log("thingsObject =>", thingsObject);
};
addThingsToArray("Mountains", "rivers", "countries", "cities");
console.log("=========");

console.log("Task 22:");
const cars: Array<string> = ["Buggati", "Ferrari", "RangRover"];
let indexToFind: number = 3;
console.log("Array index error", cars[indexToFind]);
indexToFind = 2;
console.log("Corrected array index", cars[indexToFind]);
console.log("=========");

console.log("Task 23:");
let car: string = "subaru";
console.log("Is car == 'subaru'? I predict True.");
console.log(car == "subaru");

let bike: string = "honda70";
console.log("Is bike == 'honda70'? I predict True.");
console.log(bike == "honda70");

let laptop: string = "macbook";
console.log("Is laptop == 'macbook'? I predict True.");
console.log(laptop == "macbook");

let phone: string = "iphone";
console.log("Is phone == 'iphone'? I predict True.");
console.log(phone == "iphone");

let cycle: string = "phoneix";
console.log("Is cycle == 'phoneix'? I predict True.");
console.log(cycle == "phoneix");

let myName: string = "hamza";
console.log("Is myName == 'Ali'? I predict False.");
console.log(myName == "Ali");

let myAge: number = 26;
console.log("Is myAge == 28? I predict False.");
console.log(myAge == 28);

let isAdmin: string = "No";
console.log("Is isAdmin == 'Yes'? I predict False.");
console.log(isAdmin == "Yes");

let myFavouriteColor: string = "Black";
console.log("Is myFavouriteColor == 'Green'? I predict False.");
console.log(myFavouriteColor == "Green");

let myFavouriteFood: string = "Biryani";
console.log("Is myFavouriteFood == 'Shawarma'? I predict False.");
console.log(myFavouriteFood == "Shawarma");

console.log("=========");

console.log("Task 24:");
let numOne: number = 1;
console.log("Value of num == 2", numOne == 2);
let numTwo: number = 1;
console.log("Value of num != 1", numTwo != 1);
let myNameCheck: string = "Hamza";
console.log("Is myNameCheck == 'hamza'? I predict True.");
console.log(myNameCheck == "hamza");
let num3: number = 10;
let num4: number = 5;
console.log(">= && ||", num3 >= 5 && num3 <= 5 || num4 >= 5 && num4 <= 5);
let myNewArrayOne: Array<number> = [1, 2, 5, 6];
let numberToCheck: number = 5;
let isNumberAvailable: boolean = false;
for (let i: number = 0; i < myNewArrayOne.length; i++) {
  if (myNewArrayOne[i] == numberToCheck) {
    isNumberAvailable = true;
    break;
  }
}
console.log("Check for the number available in the array: ", isNumberAvailable);
console.log("=========");

console.log("Task 25:");
const alien_color: string = "green";
const colorCheckerOne = (clr: string) => {
  if (alien_color == clr) {
    console.log("You earned 5 points");
  } else {
    console.log("no Output");
  }
};
colorCheckerOne("green");
colorCheckerOne("red");
console.log("=========");

console.log("Task 26:");
const alien_color_Two: string = "green";
const colorCheckerTwo = (clr: string) => {
  if (clr == alien_color_Two) {
    console.log("You earned 5 points");
  } else if (clr == "red") {
    console.log("You earned 10 points");
  } else {
    console.log("no Output");
  }
};
colorCheckerTwo("green");
colorCheckerTwo("red");
colorCheckerTwo("blue");
console.log("=========");

console.log("Task 27:");
const alien_color_Three: string = "green";
const colorCheckerThree = (clr: string) => {
  if (clr == alien_color_Three) {
    console.log("You earned 5 points");
  } else if (clr == "yellow") {
    console.log("You earned 10 points");
  } else if (clr == "red") {
    console.log("You earned 15 points");
  } else {
    console.log("no Output");
  }
};
colorCheckerThree("green");
colorCheckerThree("yellow");
colorCheckerThree("red");
console.log("=========");

console.log("Task 28:");
const personAgeCalculator = (age: number) => {
  if (age < 2) {
    console.log("person is a baby");
  } else if (age >= 2 && age < 4) {
    console.log("person is a toddler");
  } else if (age >= 4 && age < 13) {
    console.log("person is a kid");
  } else if (age >= 13 && age < 20) {
    console.log("person is a teenager");
  } else if (age >= 20 && age < 65) {
    console.log("person is an adult");
  } else if (age >= 65) {
    console.log("person is an elder");
  } else {
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
const favorite_fruits: Array<string> = ["apple", "orange", "mango", "bananas", "peach"];
for (let i: number = 0; i < favorite_fruits.length; i++) {
  if (favorite_fruits[i] == "orange") {
    console.log(`${favorite_fruits[i]} is in my favorite fruits list`);
  } else if (favorite_fruits[i] == "bananas") {
    console.log(`${favorite_fruits[i]} is in my favorite fruits list`);
  } else if (favorite_fruits[i] == "apple") {
    console.log(`${favorite_fruits[i]} is in my favorite fruits list`);
  } else if (favorite_fruits[i] == "mango") {
    console.log(`${favorite_fruits[i]} is in my favorite fruits list`);
  } else {
    console.log("I don't like this fruit");
  }
}
console.log("=========");

console.log("Task 30:");
const userOnWebsite: Array<string> = ["Ahmad", "Ali", "Abdullah", "Hamza", "Akbar"];
for (let i: number = 0; i < userOnWebsite.length; i++) {
  if (userOnWebsite[i] == "Ahmad") {
    console.log(`Hello ${userOnWebsite[i]}, thank you for logging in again`);
  } else if (userOnWebsite[i] == "Hamza") {
    console.log(`Hello admin ${userOnWebsite[i]} thank you for logging in`);
  } else if (userOnWebsite[i] == "Ali") {
    console.log(`Hello ${userOnWebsite[i]}, thank you for logging in again`);
  } else if (userOnWebsite[i] == "Abdullah") {
    console.log(`Hello ${userOnWebsite[i]}, thank you for logging in again`);
  } else if (userOnWebsite[i] == "Akbar") {
    console.log(`Hello ${userOnWebsite[i]}, thank you for logging in again`);
  } else {
    console.log("No user exists with that name");
  }
}
console.log("=========");

console.log("Task 31:");
const userOnWebsiteTwo: Array<string> = ["Ahmad", "Ali", "Abdullah", "Hamza", "Akbar"];
if (userOnWebsite.length == 0) {
  console.log("We need to find some users!");
} else {
  while (userOnWebsite.length > 0) {
    userOnWebsite.pop();
  }
  console.log("No users found!", userOnWebsite.length);
}
console.log("=========");

console.log("Task 32:");
const current_users: Array<string> = ["Bob11", "John12", "william13", "Emily14", "Martin15"];
const new_users: Array<string> = ["Andy11", "Robert12", "John12", "Emmy13", "Scot12"];
const findingUserNames = (user: string) => {
  const findingUserIndex = current_users.indexOf(user);
  if (findingUserIndex != -1) {
    return `${user} needs a new username because it already exists`;
  } else {
    return `${user} the username is available`;
  }
};

for (let i = 0; i < new_users.length; i++) {
  console.log(findingUserNames(new_users[i]));
}
console.log("=========");

console.log("Task 33:");
const ordinalNumbers: Array<number> = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (let i = 0; i < ordinalNumbers.length; i++) {
  if (ordinalNumbers[i] == 1 || ordinalNumbers[i] == 2 || ordinalNumbers[i] == 3) {
  } else {
    console.log(`${ordinalNumbers[i]}th`);
  }
}
console.log("=========");

console.log("Task 34:");
const pizzas: Array<string> = ["tandori", "pepperoni", "tikka"];
for (let i = 0; i < pizzas.length; i++) {
  console.log(`I like ${pizzas[i]} pizza`);
}
console.log(`Pizzas are my favorite meal \nI really like to eat them \nI really love pizza!`);
console.log("=========");

console.log("Task 35:");
const animals: Array<string> = ["dog", "cat", "rabbit"];
for (let i = 0; i < animals.length; i++) {
  console.log(`A ${animals[i]} would make a great pet.`);
}
console.log("These animals would make great pets!");
console.log("=========");

console.log("Task 36:");
const makingTShirt = (size: string, textToPrint: string) => {
  return `Size: ${size}, TextToPrint on it: ${textToPrint}`;
};
console.log(makingTShirt("medium", "Pakistan Zindabad"));
console.log("=========");

console.log("Task 37:");
const makingTShirtTwo = (textToPrint: string = "I love TypeScript", size: string = "large") => {
  return `Size: ${size}, TextToPrint on it: ${textToPrint}`;
};
console.log(makingTShirtTwo());
console.log("=========");

console.log("Task 38:");
const describe_city = (city: string, country: string = "Pakistan") => {
  return `${city} is in ${country}`;
};
console.log(describe_city("Karachi"));
console.log(describe_city("Faisalabad"));
console.log(describe_city("Mumbai"));
console.log("=========");

console.log("Task 39:");
const city_country = (city: string, country: string = "Pakistan") => {
  return `"${city}, ${country}"`;
};
console.log(city_country("Karachi", "Pakistan"));
console.log(city_country("Faisalabad", "Pakistan"));
console.log(city_country("Mumbai", "India"));
console.log("=========");

console.log("Task 40:");
const make_album = (artist: string, albumName: string, track: number = 1) => {
  return {
    artist,
    albumName,
    track
  };
};
console.log(make_album("Atif Aslam", "Doorie"));
console.log(make_album("Arijit Singh", "Tum hi ho"));
console.log(make_album("Jubin Nautiyal", "Zindagi tu bata"));
console.log("=========");

console.log("Task 41:");
const magicians: Array<string> = ["Albert", "Michael", "Steve"];
const show_magicians = (arr: Array<string>) => {
  for (let i = 0; i < arr.length; i++) {
    console.log(`Hello Mr, ${arr[i]} Magician`);
  }
};
show_magicians(magicians);
console.log("=========");

console.log("Task 42:");
const make_great = (arr: Array<string>) => {
  return arr.map((item) => `Great ${item}`);
};
show_magicians(make_great(magicians));
console.log("=========");

console.log("Task 43:");
let copyArrayMagicians = [...magicians];
show_magicians(make_great(copyArrayMagicians));
console.log("=========");

console.log("Task 44:");
const mergeArrays = (arrayOne: Array<string>, arrayTwo: Array<string>) => {
  return [...arrayOne, ...arrayTwo];
};
const firstNames: Array<string> = ["John", "Robert", "William"];
const lastNames: Array<string> = ["Smith", "Johnson", "Brown"];
console.log(mergeArrays(firstNames, lastNames));
console.log("=========");

console.log("Task 45:");
const myObject: { [key: string]: string } = {
  name: "Hamza",
  age: "26",
  city: "Karachi",
  country: "Pakistan"
};
const displayObject = (obj: { [key: string]: string }) => {
  for (const key in obj) {
    console.log(`${key}: ${obj[key]}`);
  }
};
displayObject(myObject);
console.log("=========");

console.log("Task 46:");
const countryInfo = (countryName: string) => {
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
const calculate = (num1: number, num2: number, operator: string) => {
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
