// Input validation

// Write a program that continues to ask the user for a number until the entered number is less than or equal to 100.
console.log("=========")
// let num = prompt("Enter number");
// while (num >100) {
//   num = prompt("Enter number")
//   console.log(num)
// }
// When you are done with the above, improve the program so that the terminating number is between 50 and 100.
let num = prompt("Enter a number");
while ((num <= 50) || (num >= 100)) {
  num = prompt("Enter number")
  console.log(num)
}
console.log("end")