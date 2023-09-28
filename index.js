console.clear();

// Part 1: Password
const SUPER_SECRET_PASSWORD = "h4x0r1337";

const receivedPassword = "h4x0r1337";

if (receivedPassword === SUPER_SECRET_PASSWORD) {
  console.log("Welcome! You are logged in as Brunhilde1984.");
} else {
  console.log("Access denied!");
}

// Part 2: Even / Odd
const number = 6;

if (number % 2 === 0) {
  console.log("the number is even");
} else {
  console.log("the number is odd");
}

// Part 3: Hotdogs
const numberOfHotdogs = 1000000000;

if (numberOfHotdogs < 5) {
  console.log("2 euro per hot dog");
} else if (numberOfHotdogs > 5 && numberOfHotdogs < 100) {
  console.log("1.50 euro per hot dog");
} else if (numberOfHotdogs > 100 && numberOfHotdogs < 1000000) {
  console.log("1 euro per hotdog");
} else if (numberOfHotdogs > 1000000) {
  console.log("0.10 cent per hotdog");
}

// Part 4: Daytime
const currentHour = 18;

const statement = currentHour < 17 ? "Still need to learn" : "Party time!!!!";

console.log(statement);

// Part 5: Greeting
const name = "CJ";
const myCoach = "Travis";

const greeting = name === "CJ" ? "Hello Coach !!!" : "Hello Travis!";
console.log(greeting);
