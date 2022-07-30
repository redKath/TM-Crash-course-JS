// arrow f(x) better than expressions 
// ex: let func = (arg1, arg2, ..., argN) => expression;

let sum = (a, b) => a + b;

/* This arrow function is a shorter form of:

let sum = function(a, b) {
  return a + b;
};
*/

console.log(sum(1, 2)); // 3

// for single parameters
let double = n => n * 2;
// roughly the same as: let double = function(n) { return n * 2 }

console.log(double(3)); // 6

// if no arguments add ()
let sayHi = () => console.log("Hello!");

sayHi();

// arrow f(x) can be used in the same way as expressions
/*let age = prompt("What is your age?", 18);

let welcome = (age < 18) ?
    () => console.log('Hello!') :
    () => console.log("Greetings!");

welcome();*/

// multiline arrow f(x)
let sumOf2 = (a, b) => {  // the curly brace opens a multiline function
    let result = a + b;
    return result; // if we use curly braces, then we need an explicit "return"
};

console.log(sumOf2(6, 2)); // 8

// summary: arrow f(x) are best for one-liner f(x)
// we can use it without curly braces
//if we use with curly braces we need a explicit return statement
