// loops- we used it to repeat a series of statements 
// each repition is an iteration

// difference of while loop vs for loop
// while loop runs while condition is true
// in for loop you can manipulate what to happen before and after each loop

// in while loop, it sometimes becomes an infinite loop 
// we need to avoid it by updating the counter variable often named 'i'

// when to use for and while loop
// use for loop if you know in advance how many times you want the loop to run

// example of while loop

console.log(`While loop example`);
let number = 1;
while (number <= 5) {
    console.log(number);
    number++;
}
// example of FOR loop
console.log(`FOR LOOP EXAMPLE`)
let numberS;
for (numberS = 1; numberS <= 5; numberS++) {
    console.log(numberS);
}

// here's an example where while loop is better to use than for
let letter = "";
while (letter !== "X") {
    letter = prompt("Type a letter or X to exit:");
}

// You can't know how many times it'll take for the user to enter X,
//so while is generally good for loops that depend on user interaction.

