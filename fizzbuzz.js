// FizzBuzz

// Write a program that shows all numbers between 1 and 100 with the following exceptions:

//     It shows "Fizz" instead if the number is divisible by 3.

//     It shows "Buzz" instead if the number is divisible by 5 and not by 3.

// When it's done, improve it so that the program shows "FizzBuzz" instead for numbers divisible both by 3 and by 5.
let number = prompt('Enter a number between 1-100');
while ((number > 0) && (number < 101)) {
    if ((number % 5 === 0) && (number % 3 === 0)) {
        console.log(`FizzBuzz : ${number} `)
        number = 0
    } else if ((number % 5 === 0) && (number % 3 !== 0)) {
        console.log(`Buzz : ${number} `)
        number = 0
    } else if ((number % 3 === 0)) {
        console.log(`Fizz : ${number} `)
        number = 0
    } else {
        console.log(`${number}`)
        number = 0
    }
}
console.log(`stopped : ${number}`)