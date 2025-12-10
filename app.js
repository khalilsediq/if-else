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