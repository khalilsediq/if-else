// 1. Ask the user for their age. If the age is 18 or more, show an alert: "You are an
// adult.", else show: "You are a minor."

// const age = Number(prompt("Enter Your Age"));
// if (age >= 18 && age <= 35) {
//   alert("your are Adult, and Young");
// } else if (age < 18 && age >= 0) {
//   alert("you are a minor");
// } else if (age >= 36 && age <= 55) {
//   alert("You are Middle-aged");
// } else if (age >= 56 && age <= 110) {
//   alert("You are Too old, your expiry date will reach Soon!");
// } else {
//   alert("invalid age!");
// }
////////////////////////////////////////////////////////////////////////////////////////////////////////Completed.

// 2. Ask the user to enter a number. If it's positive, log: "Positive number"; else log:
// "Not positive".
// const userNum = Number(prompt("Enter, Number to check Positive, Negative"));

// if (userNum > 0) {
// //   alert("Postive Number");
//   console.log("Postive Number");
// } else if (userNum < 0) {
// //   alert("Not Postive Number");
//   console.log("Not a Postive Number");
// } else if (userNum === 0) {
// //   alert("Zero");
//   console.log("Zero");
// } else {
// //   alert("NaN");
//   console.log("NaN");
// }
///////////////////////////////////////////////////////////////////////////////////////////////////////Completed...

// 3. Ask the user for a number. If it’s even, alert: "Even number"; else alert: "Odd
// number".

// const userNm = Number(prompt("Enter Number to check, Even and Odd"));

// if (userNm % 2 === 0) {
//   alert("Even number");
// } else if (userNm % 2 === 1) {
//   alert("Odd number");
// } else {
//   alert("Not a Valid Number");
// }
///////////////////////////////////////////////////////////////////////////////////////////////////////Completed.

// 4. Ask for a username. If the username is "admin", display "Welcome, admin!"; else
// display "Access denied."

// const userName = prompt("Enter Your UserName").toUpperCase();
// if (userName === "ADMIN") {
//   alert("Wellcom, admin! Access Granted!");
// } else {
//   alert("Access denied");
// }
///////////////////////////////////////////////////////////////////////////////////////////////////////Completed.....

// 5. Ask for two numbers. If they are equal, log "Both numbers are the same";
// otherwise, log "The numbers are different".
// const num1 = Number(prompt("Enter Any Number "));
// const num2 = Number(prompt("Enter Another Number"));

// if (num1 === num2) {
//   console.log("Both numbers are the same");
//   alert("Both numbers are the same")
// } else if (isNaN(num1) || isNaN(num2)) {
//     console.log(" ❌ Invalid Number intered ");
//     alert(" ❌ Invalid Number Entered ")
// } else {
//     console.log("The numbers are different");
//     alert("The numbers are different")
// }
///////////////////////////////////////////////////////////////////////////////////////////////////////Completed......

// 6. Ask the user to enter two numbers. Check which one is larger and alert: "First is
// larger" or "Second is larger".

// const userNm = Number(prompt("Enter First Number"));
// const userNm2 = Number(prompt("Enter Second Number"));

// if (userNm > userNm2) {
//   alert("First Number Is larger than Second ");
// } else if (userNm === userNm2) {
//   alert("Both are Equal");
// } else if (isNaN(userNm) || isNaN(userNm2)) {
//   alert("Please! Enter a Valid Input");
// } else {
//   alert("Second Number Is larger than First");
// }
///////////////////////////////////////////////////////////////////////////////////////////////////////Completed......

// 7. Ask for a number. If it's greater than 100, alert "Too big!", else alert "Within
// range".

// const usrNum = Number(
//   prompt("kindly! Enter A Number, To check if it is in Range")
// );
// if (isNaN(usrNum)) {
//   alert("Please! Enter a valid Number");
// } else if (usrNum > 100) {
//   alert("Too Big!");
// } else {
//   alert("Within Range.");
// }
///////////////////////////////////////////////////////////////////////////////////////////////////////Completed......

// 8. Ask for a score. If it’s 50 or higher, log "You passed!", else log "You failed."

// const score = Number(prompt("Kindly, Enter Your Score!"));

// if (isNaN(score)) {
//   console.log("kindly, input Numbers Only!");
// } else if (score >= 50) {
//   console.log("You Passed!");
// } else {
//   console.log("You Failed.");
// }
///////////////////////////////////////////////////////////////////////////////////////////////////////Completed......

// 9. Ask the user to enter a temperature. If it’s over 30, alert "It's hot!"; else alert "It's not hot."

// const userTemp = Number(prompt("Enter a Temperature."));

// if(isNaN(userTemp)){
//     alert("Input Temperature in Numbers ONLY")
// }else if (userTemp > 30){
//     alert("It's Hot!")
// }else {
//     alert("It's Not Hot");
// }
///////////////////////////////////////////////////////////////////////////////////////////////////////Completed......

//  10. Ask the user to enter a number. If it's 0, alert "Zero"; if it’s not zero, alert "Not zero".

// const userNumber = Number(prompt("Enter a Number"));

// if (isNaN(userNumber)) {
//   alert("Invalid Number");
// } else if (userNumber === 0) {
//   alert("Zero");
// } else {
//   alert("Not Zero");
// }
///////////////////////////////////////////////////////////////////////////////////////////////////////Completed......

// 11. Ask the user for their age. If it's 60 or more, log "You are a senior citizen.",
// else log "You are not a senior."

// const userAge = Number(prompt("Enter Your age!"));

// if (isNaN(userAge)) {
//   console.log("Enter Your Age in Numbers Only");
// } else if (userAge >= 60) {
//   console.log("You are a Senior citizen.");
// } else {
//   console.log("You are not a senior.");
// }
///////////////////////////////////////////////////////////////////////////////////////////////////////Completed......

// 12. Ask the user for their name. If the name is "Alice", alert "Hi, Alice!"; else alert
// "You're not Alice!"

// const usrName = prompt("Enter Your Name").toUpperCase();

// if (usrName === "ALICE") {
//   alert("Hi, Alice!");
// } else {
//   alert("You're not Alice!");
// }
///////////////////////////////////////////////////////////////////////////////////////////////////////Completed......

// 13. Ask the user for a password. If it matches "12345", log "Correct password"; else
// log "Wrong password".

// const password = prompt("Enter Your Password");

// if (password === "12345") {
//   console.log("Correct Password");
// } else {
//   console.log("Wrong Password");
// }
///////////////////////////////////////////////////////////////////////////////////////////////////////Completed......

// 14. Ask the user for the current hour (0–23). If it’s less than 12, alert "Good morning!";
// else alert "Good afternoon!"

// const hour = prompt("Enter Current Hour In this (0-23) Formate");

// if (hour > 0 && hour < 12) {
//   alert("Good morning!");
// } else {
//   alert("Good afternoon!");
// }
///////////////////////////////////////////////////////////////////////////////////////////////////////Completed......

// 15. Ask the user to enter a number. If it's divisible by 5, log "Divisible by 5"; else log
// "Not divisible by 5".

// const number = Number(prompt("Enter a Number"));

// if (isNaN(number)) {
//   console.log("Enter Number Only");
// } else if (number % 5 === 0) {
//   console.log("Divisible By 5");
// } else {
//   console.log("Not Divisible By 5");
// }
///////////////////////////////////////////////////////////////////////////////////////////////////////Completed......

// 16. Ask the user if they want to play a game (yes/no). If they type "yes", alert "Let's
// play!"; else alert "Maybe next time!"

// const user = prompt("Do you want to play Game").toUpperCase();

// if(user === 'YES'){
//     alert("Let's play!")
// }else{
//     alert("Maybe next time!")
// }
///////////////////////////////////////////////////////////////////////////////////////////////////////Completed......

// 17. Ask the user for a color. If the color is "blue", log "Cool choice!"; else log
// "Interesting color!"

// const color = prompt("Enter any Color").toLowerCase();

// if (color === "blue") {
//   console.log("Cool Choice!");
// } else {
//   console.log("Interesting Color!");
// }
///////////////////////////////////////////////////////////////////////////////////////////////////////Completed......

// 18. Ask for the day of the week. If it’s "Sunday", alert "Weekend!"; else alert "Weekday".

// const week = prompt("Enter Any Day of the Week").toLowerCase();

// if (week === "sunday") {
//   alert("Weekend!");
// } else {
//   alert("WeekDay");
// }

// if (
//   week === "monday" ||
//   week === "tuesday" ||
//   week === "wednesday" ||
//   week === "thursday" ||
//   week === "friday" ||
//   week === "saturday"
// ) {
//   alert("Weekday");
// } else if (week === "sunday") {
//   alert("Weekend!");
// } else {
//   alert("invalid Day");
// }
///////////////////////////////////////////////////////////////////////////////////////////////////////Completed......

// 19. Ask the user to enter a fruit. If it's "banana" or "apple", alert "We have that!";
// else alert "Sorry, out of stock."

// const fruit = prompt("Enter a Fruit.").toLowerCase();

// if (fruit === "banana" || fruit === "apple") {
//   alert("We Have that!");
// } else {
//   alert("sorry, Out of Stock");
// }
///////////////////////////////////////////////////////////////////////////////////////////////////////Completed......

// 20. Ask the user to type "start" to begin. If they do, alert "Game started!"; else alert
// "Waiting for input..."

// const user = prompt(`Type "Start" To Enter `).toLowerCase();

// if (user === "start") {
//   alert("Game Sarted!");
// } else {
//   alert("Waiting for input.....");
// }
///////////////////////////////////////////////////////////////////////////////////////////////////////Completed......

/*Title: Advanced JavaScript Conditional Logic Practice

🔸 Instructions:
Write JavaScript if - else if - else conditions to solve the following problems. Use
logical operators like && and || where applicable. Do not write solutions here—just practice
writing the condition blocks.*/

/*   1. Age-Based Grade Check
Check a student's marks and display:
● "Distinction" if marks ≥ 80
● "Pass" if marks ≥ 50 and < 80
● "Fail" if marks < 50
● "Invalid Marks" if marks are not between 0 and 100            */

// const marks = Number(prompt("Enter Marks to check Grade"));

// if (marks > 100 || marks < 0) {
//   alert("Invalid Marks");
// } else if (marks >= 80) {
//   alert("Distinction");
// } else if (marks >= 50 && marks < 80) {
//   alert("Pass");
// } else if (marks < 50) {
//   alert("Fail");
// }
///////////////////////////////////////////////////////////////////////////////////////////////////////Completed......

/* 2. Discount Eligibility Based on Age and Membership
Given a person's age and membership status, show:
● "Senior Premium Discount" if age ≥ 60 and is a premium member
● "Senior Discount" if age ≥ 60
● "Premium Discount" if a premium member
● "No Discount" otherwise */

// const age = Number(prompt("Enter Your age"));
// const isPremiumUser = prompt("Are you Premium User").toLowerCase();

// if (age >= 60 && isPremiumUser === "yes") {
//   alert("Senior Premium Discount");
// } else if (age >= 60) {
//   alert("Senior Discount");
// } else if (isPremiumUser === "yes") {
//   alert("Premium Discount");
// } else {
//   alert("No Discount");
// }

///////////////////////////////////////////////////////////////////////////////////////////////////////Completed......

/* 3. Login and Email Verification
● If user is logged in and email is verified → "Access granted"
● If user is logged in but not verified → "Please verify your email"
● If not logged in → "Please log in" */

// const isloggedIn = prompt("Are You logged in. Answer in Yes/No?").toLowerCase();
// const emailVerified = prompt(
//   "Is Your Email verified. Ans in Yes/No?"
// ).toLowerCase();

// if (isloggedIn === "yes" && emailVerified === "yes") {
//   console.log("Access Granted");
// } else if (isloggedIn === "yes" && emailVerified === "no") {
//   console.log("Please Verify your email");
// } else {
//   console.log("Please log in");
// }
///////////////////////////////////////////////////////////////////////////////////////////////////////Completed......

/* 4. Contest Eligibility
Check if a person is eligible to enter a contest:

● Must be between ages 18–35
● Must be from Pakistan or India
● Must not be banned

Display appropriate messages for age, region, or ban issues. */

// const age = Number(prompt("Enter Your Age"));
// const country = prompt("Enter Your Country").toLowerCase();
// const isBanned = confirm("Are You banned: (ok = 'yes', cancel = 'no'")

// if (isBanned) {
//   alert("you are banned");
// } else if (age < 18 && age > 35) {
//   alert("You're not eligible for the contest");
// } else if (country !== "india" && country !== "pakistan") {
//   alert("You are not eligible for the contest");
// } else {
//   alert("you ae eligible for the contest?");
// }
///////////////////////////////////////////////////////////////////////////////////////////////////////Completed......

/* 5. Subscription Access Check
Given the subscription plan and login status:
● "Welcome Premium User" if plan is "premium" and logged in
● "Welcome Free User" if plan is "free" and logged in
● "Please log in to continue" if not logged in
● "Invalid subscription" otherwise */

// const isloggedIn = prompt("Are You logged In? Yes/No").toLowerCase();
// const subscription = prompt("Enter Your Subscription Plan!").toLowerCase();
// if (isloggedIn === "no") {
//   alert("Please log in to continue");
// } else if (subscription === "premium" && isloggedIn === "yes") {
//   alert("Welcome Premium User");
// } else if (subscription === "free" && isloggedIn === "yes") {
//   alert("Welcome Free User");
// } else if (isloggedIn !== 'yes' && isloggedIn !== 'no'){
//   alert("Enter Information for loggin, in yes/no Order only")
// }
//  else {
//   alert("invalid Subscription");
// }

///////////////////////////////////////////////////////////////////////////////////////////////////////Completed......

// 7. Work Hours Check
// Check based on hoursWorked and isWeekend:

// ● "Overtime" if hours > 40 and not a weekend
// ● "Weekend work" if hours > 0 and is weekend
// ● "Regular hours" if ≤ 40
// ● "No work" if hours === 0

// const hoursWorked = Number(prompt("How many hours have you worked?"));
// const isWeekend = prompt("is it weekEnd? (saturday/sunday)" ).toLowerCase();

// if (hoursWorked > 40 && isWeekend !== "sunday" && isWeekend !== "saturday") {
//   alert("Overtime");
// } else if (
//   hoursWorked > 0 && (  isWeekend === "sunday" ||
//   isWeekend === "saturday")
// ) {
//   alert("Weekend work");
// } else if (hoursWorked === 0) {
//   alert("no Work");
// } else if (hoursWorked <= 40 ) {
//   alert("Regular hours");
// } else {
//   alert("Input every thing correctly!");
// }
/////////////////////////////Completed

// => Requirements. Age and Gender Classification
// Given a user's age and gender:
// ● "Teen Male" if age 13–19 and gender is "male"
// ● "Teen Female" if age 13–19 and gender is "female"
// ● "Adult" if age ≥ 20
// ● "Child" if age < 13

/* const age = Number(prompt("Enter Your Age "));
const gender = prompt(
  "Enter Your Gender: (male/female or girl/boy) only"
).toLowerCase();

if (
  gender !== "female" &&
  gender !== "male" &&
  gender !== "girl" &&
  gender !== "boy"
) {
  alert("sorry male/female/girls/boys only applicable");
} else if (age >= 13 && age <= 19 && gender === "male") {
  alert("Teen Male");
} else if (age >= 13 && age <= 19 && gender === "female") {
  alert("Teen Female");
} else if (age >= 20 && gender === "female") {
  alert("Adult Female");
} else if (age >= 20 && gender === "male") {
  alert("Adult Male");
} else if (age < 13 && gender === "girl") {
  alert("Child girl");
} else if (age < 13 && gender === "boy") {
  alert("Child boy");
} else {
  alert("Enter Your response correctly");
} */
///////////////////////////////////////////////////////////////////////////////////////////////////////Completed......

// Requirements =>. Weather Warning System
// Based on temperature and humidity:
// ● "Heatwave Alert" if temp ≥ 40 and humidity ≥ 60
// ● "Hot and Dry" if temp ≥ 40 and humidity < 60
// ● "Cool Weather" if temp ≤ 20
// ● "Moderate" otherwise

/*const weatherTemp = Number(prompt("Enter weather Temperature in numbers"));
const humidity = Number(prompt("Enter humidity in numbers"));

if (weatherTemp >= 40 && humidity >= 60) {
  alert("Heatwave Alert");
} else if (weatherTemp >= 40 && humidity < 60) {
  alert("Hot And Dry");
} else if (weatherTemp <= 20) {
  alert("Cool Weather");
} else {
  alert("Moderate");
} */
///////////////////////////////////////////////////////////////////////////////////////////////////////Completed......

// 6. Product Purchase Validation
// Check product conditions:
// ● "Buy now with discount" if price > 1000, in stock, and user is a member
// ● "Buy now" if in stock
// ● "Out of stock" if stock === 0
// ● "Invalid product" otherwise

// const price = Number(prompt("Enter Your Price"));
// const stock = Number(prompt("How Many!"))
// const user = prompt("Enter Your Membership").toLowerCase();

// if (price > 1000 && stock <= 50 && user === "member") {
//   alert("Buy now with discount");
// } else if (stock > 0) {
//   alert("Buy now");
// } else if(stock === 0){
//   alert("Out Of stock")
// } else {
//   alert("invalid Product OtherWise.")
// }
///////////////////////////////////////////////////////////////////////////////////////////////////////Completed......

// 10. Score Grading System
// Given a score between 0–100:

// ● "Excellent" for 90–100
// ● "Good" for 70–89
// ● "Average" for 50–69
// ● "Poor" for 30–49
// ● "Fail" below 30
// ● "Invalid Score" if out of range

// const score = Number(prompt("Enter Your Score"));

// if (score > 100 || score < 0) {
//   alert("Invalid Score");
// } else if (score >= 90) {
//   alert("Excellent");
// } else if (score >= 70) {
//   alert("Good");
// } else if (score >= 50) {
//   alert("Average");
// } else if (score >= 30) {
//   alert("Poor");
// } else {
//   alert("Fail");
// }
///////////////////////////////////////////////////////////////////////////////////////////////////////Completed......

// 11. Course Access Control
// To access a course:
// ● Must be logged in
// ● Must be enrolled
// ● Must not be banned

// Show: "Access granted", "Enroll in course first", "User is banned", or "Please log in"

// const loggin = prompt("Are You Logged in").toLowerCase();
// const enrolled = prompt("Are you Enrolled").toLowerCase();
// const ban = prompt("Are you Banned").toLowerCase();

// if (loggin === "yes" && enrolled === "yes" && ban !== "yes") {
//   alert("Access Granted");
// } else if (loggin === "yes" && enrolled !== "yes" && ban !== "yes") {
//   alert("Enroll in course first");
// } else if (ban === "yes") {
//   alert("User is banned");
// } else {
//   alert("plese loggin!");
// }
///////////////////////////////////////////////////////////////////////////////////////////////////////Completed......

// 12. Driving Conditions
// Given a user's speed and license status:
// ● "License suspended" if speed > 120
// ● "Warning" if speed between 100–120
// ● "Normal driving" if speed ≤ 100 and has license
// ● "Driving without license" otherwise

// const speed = Number(prompt("Your Speed?"));
// const license = prompt("Do you have license").toLowerCase();
// if (speed <= 100 && license === "yes") {
//   alert("Normal Driving");
// } else if (speed <= 120 && speed > 100) {
//   alert("warning");
// } else if (speed > 120) {
//   alert("license Suspended");
// } else {
//   alert("Driving without License");
// }
///////////////////////////////////////////////////////////////////////////////////////////////////////Completed......

// 13. Order Processing Status

// For an online order:
// ● "Order on the way" if payment is complete and shipped
// ● "Preparing your order" if payment is complete and not shipped
// ● "Awaiting payment" if payment is pending
// ● "Payment failed" if transaction failed

// const payment = prompt("Is payment Completed?").toLowerCase();
// const ship = prompt("Is it Shipped?").toLowerCase();

// if (payment === "yes" && ship === "yes") {
//   alert("Order On the Way");
// } else if (payment === "yes" && ship === "no") {
//   alert("preparing Your Order");
// } else if (payment === "pending") {
//   alert("Awaiting Payment");
// } else {
//   alert("Payment failed");
// }
///////////////////////////////////////////////////////////////////////////////////////////////////////Completed......

// 14. Battery Status Checker
// Given battery level and charging state:
// ● "Fully Charged" if level === 100
// ● "Charging..." if level < 100 and charging
// ● "Low Battery" if level < 20 and not charging
// ● "Battery OK" otherwise

// const battery = Number(prompt("Enter Your Current Battery Status."));
// const charging = prompt("is it Charging").toLowerCase();
// if (battery === 100) {
//   alert("Fully charged");
// } else if (battery < 100 && charging === "yes") {
//   alert("Charging....");
// } else if (battery < 20 && charging === "no") {
//   alert("Low Battery");
// } else  {
//   alert("battery ok");
// }

///////////////////////////////////////////////////////////////////////////////////////////////////////Completed......

// 15. Browser and Device Compatibility Check
// Based on user's browser and device:
// ● "Full features enabled" if browser is Chrome and device is Desktop
// ● "Limited mobile features" if browser is Chrome and device is Mobile
// ● "Please switch to Chrome" for all other browsers

// const device = prompt("Enter Your Device").toLowerCase();
// const browser = prompt("Which browser do you use?");

// if (browser === "chrome" && device === "desktop") {
//   alert("Fully features Enabled");
// } else if (browser === "chrome" && device === "mobile") {
//   alert("Limited Mobile features");
// } else {
//   alert("please switch to chrome");
// }

///////////////////////////////////////////////////////Completed

/////////////////////////////////Python//////////////////////////////////////////////////
// Started
// 1. Speed Limit Warning
// Given a speed, print:

// "Too slow" if below 30
// "Safe speed" if between 30 and 60
// "Speeding" if between 61 and 100
// "Dangerously fast" if over 100

/*
const speed = Number(prompt("Enter Your speed."));

if (speed < 30) {
  alert("Too Slow");
} else if (speed >= 30 && speed <= 60) {
  alert("Safe Speed");
} else if (speed > 60 && speed <= 100) {
  alert("Speeding");
} else {
  alert("Dangerously fast");
}*/
///////////////////////////////////////////////////////Completed

// 2. Library Book Return Fine
// Given number of late days, calculate the fine:

// 0 days: $0
// 1–5 days: $1 per day
// 6–10 days: $2 per day
// 11+ days: $5 per day

// const days = Number(prompt("Enter your days"));

// if (days <= 0) {
//   alert("$0");
// } else if (days <= 5) {
//   alert(`Your calculated Fine => $${days * 1}, Fine per Day is $1, Total Days are ${days}`);
// } else if (days <= 10) {
//   alert(`Your calculated Fine => $${days * 2} , Fine per Day is $2, Total Days are ${days}`);
// } else {
//   alert(`Your calculated Fine => $${days * 5} , Fine per Day is $5, Total Days are ${days}`);
// }
///////////////////////////Completed.

// 3. Event Entry Eligibility
// Check if a person (with age and ticket) can enter:

// Must be 18 or older
// Must have a valid ticket

// const age = Number(prompt("Your Age, For Event Eligibility"));
// const ticket = prompt("Have ticket? Enter Yes, And No. Only!").toLowerCase();

// if ((age >= 18 && ticket === "yes") || ticket === "y") {
//   alert("You are Eligible");
// } else if ((age >= 18 && ticket === "no") || ticket === "n") {
//   alert("You Must Have a Valid Ticket");
// } else if ((age < 18 && ticket === "yes") || ticket === "y") {
//   alert("You Must Be 18 or Older, to Enter.");
// } else {
//   alert("Not Allowed- Must Be 18 or older , and have a Valid Ticket ");
// }
///////////////////////////Completed.

//4. Smartphone Battery Status
/*Given battery percentage, print:

80–100: "Fully charged"
50–79: "Good battery"
20–49: "Low battery"
Below 20: "Charge now!" */

/* const batteryPercent = Number(prompt("Enter Your Battery pecentage"));

if (batteryPercent >= 80 && batteryPercent <= 100) {
  alert("fully charged");
} else if (batteryPercent <= 79 && batteryPercent >= 50) {
  alert("Good battery");
} else if (batteryPercent <= 49 && batteryPercent >= 20) {
  alert("Low Battery");
} else if (batteryPercent < 20 && batteryPercent >= 0) {
  alert("Charge now!");
} else {
  alert("Incorrect Percentage!")
}
*/
//////////////////////////////////Completed.

// 5. Discount Eligibility
// Given customer type and age, apply discount:

// Student: 20%
// Senior (60+): 30%
// Others: 0%

/*
const type = prompt("Are you student?").toLowerCase();
const age = Number(prompt("what is your age?"));

if (type === "yes" || type === 'y') {
  alert("20% Discount");
} else if (age >= 60) {
  alert("30%, Senior Discount.");
} else {
  alert("0% discount.")
} */
//////////////////////////////////Completed.

// 6. Clothing Recommendation
// Based on temperature (°C), suggest clothing:

// Below 10: "Heavy jacket"
// 10–20: "Sweater"
// 21–30: "T-shirt"
// Above 30: "Light clothes"

/* 
const temp = Number(
  prompt("Enter Your temperature in °C, for clothing recommendation ")
);

if (temp < 10) {
  alert("Heavy Jacket");
} else if (temp <= 20) {
  alert("Sweater");
} else if (temp <= 30) {
  alert("T-shirt");
} else {
  alert("Light Clothes");
}
*/
//////////////////////////////////Completed.

// 7. Water Intake Reminder
// Based on activity level, suggest water intake:

// Sedentary: 2L
// Moderate: 2.5L
// Active: 3L+

// const activity = prompt(
//   "Tell us your Activity, (Sedentary/Moderate/Active), For sugesting Water intake"
// ).toLowerCase();

// if (activity === 'sedentary') {
//   alert("2L")

// }else if(activity === 'moderate'){
//   alert("2.5L")
// }else if (activity === 'active'){
//   alert("3L+")
// }else {
//   alert("Enter Your Activity Correctly.")
// }
//////////////////////////////////////////////Completed

// 8. Exam Result Evaluation
// Given three subject marks, print:

// "Pass" if all marks are 40 or above
// "Fail" if any mark is below 40
/*
const english = Number(prompt("Enter your english marks"));
const math = Number(prompt("Enter Your Math's Marks"));
const Geography = Number(prompt("Enter Your Geography Marks"));

if (english >= 40 && math >= 40 && Geography >= 40) {
  alert("Pass");
} else {
  alert("fail");
}
*/
//////////////////////////////////////////////Completed

// 9. App Theme Selection
// Based on time of day (0–23), select theme:

// 6–17: Light Mode
// Otherwise: Dark Mode

/*
const time = Number(
  prompt(
    "Enter Your Time in This (0-23)hours-Formate , to check App theme Selection"
  )
);

if (time >= 6 && time <= 17) {
  alert("Light Mode.");
} else if (time <= 23 && time >= 0) {
  alert("Dark Mode.");
} else {
  alert("Enter it in correct formate  (0-23)hours");
} */
//////////////////////////////////////////////Completed

// 10. Meal Type Identifier
// Based on time of day (0–23), identify meal:

// 6–10: Breakfast
// 12–14: Lunch
// 18–21: Dinner
// Any other time: Snack

const time = Number(prompt("Enter Your time To identify meal type identifier"));

if (time < 0 || time > 23 || isNaN(time)) {
  alert("Enter Your Time correctly, in (0-23)-Hours Formate");
} else if (time >= 6 && time <= 10) {
  alert("Breakfast");
} else if (time >= 13 && time <= 14) {
  alert("Lunch");
} else if (time >= 18 && time <= 21) {
  alert("Dinner");
} else {
  alert("Snack");
}
//////////////////////////////////////////////Completed