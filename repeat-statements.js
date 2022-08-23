// looping exercises
// Carousel
// Write a program that launches a carousel for 10 turns, showing the turn number each time.
let turns;
// for (turns = 1; turns <= 10; turns++) {
//     console.log(turns)
// }

//When it's done, improve it so that the number of turns is given by the user.
userTurns = prompt("How many turns?")
for (turns = 0; turns <= userTurns; turns++) {
    console.log(turns)
}
// Check the following program that shows even numbers (divisible by 2) between 1 and 10.

// for (let i = 1; i <= 10; i++) {
//   if (i % 2 === 0) {
//     console.log(`${i} is even`);
//   }
// }

// Improve the program so that it also shows odd numbers. Improve it again to replace the initial number 1 by a number given by the user.

// shows odd numbers
for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0) {
        console.log(`${i} is even`);
    } else {
        console.log(`${i}`)
    }

}
console.log("====ashdjshda====")
let userInit = prompt("Enter a number: ")
for (let i = userInit; i <= 10; i++) {
    if (i % 2 === 0) {
        console.log(`${i} is even`);
    } else {
        console.log(`${i}`)
    }

}// Input validation

// Write a program that continues to ask the user for a number until the entered number is less than or equal to 100.
console.log("=========")
// let num = prompt("Enter number");
// while (num >100) {
//   num = prompt("Enter number")
//   console.log(num)
// }
// When you are done with the above, improve the program so that the terminating number is between 50 and 100.
let num = prompt("Enter a number");
while ((num < 50) || (num > 100)) {
    console.log(num)
    num = prompt("Enter number")

}
console.log("end")
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
// Neither yes nor no

// Write a program that plays "neither yes, nor no" with the user. Specifically, the programs asks the user to enter text until either "yes" or "no" is typed, which ends the game.
let text = ''
while ((text.toLowerCase() != 'yes') && (text.toLowerCase() != 'no')) {
    text = prompt('Enter a text (yes or no to exit) ')
    console.log(`entry: ${text}`)
}// FizzBuzz

// Write a program that shows all numbers between 1 and 100 with the following exceptions:

//     It shows "Fizz" instead if the number is divisible by 3.

//     It shows "Buzz" instead if the number is divisible by 5 and not by 3.

// When it's done, improve it so that the program shows "FizzBuzz" instead for numbers divisible both by 3 and by 5.
let numberx = prompt('Enter a number between 1-100');
while ((numberx > 0) && (numberx < 101)) {
    if ((numberx % 5 === 0) && (numberx % 3 === 0)) {
        console.log(`FizzBuzz : ${numberx} `)
        number = 0
    } else if ((numberx % 5 === 0) && (numberx % 3 !== 0)) {
        console.log(`Buzz : ${numberx} `)
        numberx = 0
    } else if ((numberx % 3 === 0)) {
        console.log(`Fizz : ${numberx} `)
        numberx = 0
    } else {
        console.log(`${numberx}`)
        numberx = 0
    }
}
console.log(`stopped : ${numberx}`)