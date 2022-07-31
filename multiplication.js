// multiplication table
//  Write a program that asks the user for a number, then shows the multiplication table for this number.

let number = prompt("Give a number between 2 and 9: ");

// for (let i = 1; i <= 10; i++) {
//     console.log(`${i} * ${number} =`, i * number);
// }

// When you are done, improve the program so it only accepts numbers between 2 and 9 (use the previous exercise as a blueprint).

if ((number < 10) && (number > 1)) {
    for (let i = 1; i <= 10; i++) {
        console.log(`${i} * ${number} =`, i * number);
    }
} else console.log("try again Give a number between 2 and 9")
