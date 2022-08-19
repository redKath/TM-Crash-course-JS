/* Following day
Write a program that accepts a day name from the user, then shows the name of the following day. Incorrect inputs must be taken into account. */

const day = prompt('enter day: ').toLowerCase()
const days = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday']

if (days.includes(day)) {
    console.log(`today is ${day}`)
} else console.log('error')

/*Number comparison
Write a program that accepts two numbers, then compares their values and displays an appropriate message in all cases.*/
const num1 = Number(prompt('enter number1: '))
const num2 = Number(prompt('enter number2: '))
let num1greater = num1 > num2;
let num1lesser = num1 < num2;
let num1equal = num1 === num2;
switch (num1greater || num1lesser || num1equal) {
    case num1equal:
        // Code to run when the expression matches value1
        console.log(`${num1} == ${num2}`);
        break;
    case num1greater:
        // Code to run when the expression matches value2
        console.log(`${num1} >= ${num2}`);
        console.log(`${num2} <= ${num1}`)
        break;
    case num1lesser:
        console.log(`${num1} <= ${num2}`)
        console.log(`${num2} >= ${num1}`)
        break;
    default:
        // Code to run when neither case matches
        console.log(`error hmm`)

}
/*Final values
Take a look at the following program.*/

let nb1 = Number(prompt("Enter nb1:"));
let nb2 = Number(prompt("Enter nb2:"));
let nb3 = Number(prompt("Enter nb3:"));
console.log(nb1, nb2, nb3);
if (nb1 > nb2) {
    nb1 = nb3 * 2;
    console.log(nb1, "first if");
} else {
    nb1++;
    console.log(nb1, "increment");
    if (nb2 > nb3) {
        nb1 += nb3 * 3;
        console.log(nb1, "2nd if");
    } else {
        nb1 = 0;
        nb3 = nb3 * 2 + nb2;
    }
}
console.log(nb1, nb2, nb3);

// init: nb1=nb2=nb3=4
// final: nb1= 0 nb2= 4 nb3=12

// nb1=4,nb2=3,nb3=2
// final: nb1= 4 nb2= 3 nb3=2

// nb1=2,nb2=4,nb3=0
// final: nb1= 3 nb2= 4 nb3=0   