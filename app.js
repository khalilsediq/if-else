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

const userNm = Number(prompt("Enter First Number"));
const userNm2 = Number(prompt("Enter Second Number"));

if (userNm > userNm2) {
  alert("First Number Is larger than Second ");
} else if (userNm === userNm2) {
  alert("Both are Equal");
} else if (isNaN(userNm) || isNaN(userNm2)) {
  alert("Please! Enter a Valid Input");
} else {
  alert("Second Number Is larger than First");
}
///////////////////////////////////////////////////////////////////////////////////////////////////////Completed......
