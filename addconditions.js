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

/*Write a program that accepts a month number (between 1 and 12), then shows the number of days of that month. Leap years are excluded. Incorrect inputs must be taken into account.*/

const monthNum = Number(prompt("enter month number (between 1 and 12) "))
const days31 = [1, 3, 5, 7, 8, 10, 12]
const days30 = [4, 6, 9, 11]
if ((monthNum <= 12) && (monthNum > 0)) {
    switch ((monthNum <= 12) && (monthNum > 0)) {
        case (days31.includes(monthNum)):
            console.log('31 days')
            break;
        case (days30.includes(monthNum)):
            console.log('30 days')
            break
        case (monthNum == 2):
            console.log('28 days')
            break
        default:
            console.log('undefined hmmm')
            break
    }
} else console.log('There are only 12 months. It exceeded.')


/*Following second
Write a program that asks for a time under the form of three information (hours, minutes, seconds). The program calculates and shows the time one second after. Incorrect inputs must be taken into account.

This is not as simple as it seems... Look at the following results to see for yourself:

14h17m59s => 14h18m0s
6h59m59s => 7h0m0s
23h59m59s => 0h0m0s (midnight)*/

let hours = Number(prompt('enter hours (<24): '))
let minutes = Number(prompt('enter minutes (<60): '))
let seconds = Number(prompt('enter seconds (<60): '))


switch ((hours < 24 && hours > 0) && (minutes < 60 && minutes > 0) && (seconds < 60 && seconds > 0)) {
    case hours = 23 && minutes === 59 && seconds === 59:
        hours = 0
        minutes = 0
        seconds = 0

        break;
    case minutes = 59 && hours < 24:
        minutes = 0
        hours++
        seconds = 0
        break
    case seconds = 59 && minutes < 59 && hours < 24:
        seconds = 0
        minutes++
        hours = hours
        break
    default:
        console.log('cant convert')
        break


}
console.log(`${hours} h ${minutes} m ${seconds} s`)