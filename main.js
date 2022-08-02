// javascript.info task answers:
// working with variables
// Declare two variables: admin and name.
// Assign the value "John" to name.
// Copy the value from name to admin.
// Show the value of admin using alert (must output “John”).

let admin;
let name = 'John';
admin = name;
console.log(admin) // John

/*Create a variable with the name of our planet. How would you name such a variable?
Create a variable to store the name of a current visitor to a website. How would you name that variable?*/
let ourPlanetName = 'earth';
let currentUserName = 'John';

const BIRTHDAY = '18.04.1982';

// const age = someCode(birthday);

// function someCode(birthday) {
//     // somecode
// }

/* FUNCTIONS */
// Write a function min(a, b) which returns the least of two numbers a and b.

function min(a, b) {
    if (a > b) {
        return console.log(b)
    } else if (b > a) {
        return console.log(a)
    } else {
        return console.log(`${a} and ${b} are equal`)
    }
}

min(2, 5)
min(3, -1)
min(1, 1)

// Write a function pow(x,n) that returns x in power n. Or, in other words, multiplies x by itself n times and returns the result.
function pow(x, n) {
    return console.log(x ** n)
}

pow(3, 2) //= 3 * 3 = 9
pow(3, 3) //= 3 * 3 * 3 = 27
pow(1, 100) //= 1 * 1 * ...* 1 = 1

//Replace Function Expressions with arrow functions in the code below:

/*
function ask(question, yes, no) {
    if (confirm(question)) yes();
    else no();
}

ask(
    "Do you agree?",
    function () { alert("You agreed."); },
    function () { alert("You canceled the execution."); }
);*/

let ask = (question, yes, no) => {  // the curly brace opens a multiline function
    if (confirm(question)) yes();
    else no();
};
