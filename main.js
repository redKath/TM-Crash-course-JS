// let, const - let reusable, const not reusable
//when to use let or const?
//always use const unless you know you re assign it

//data types - primitive - directly assign to memory
// strings numvers memory boolean, null undefined, symbols

const name = 'John';
const age = 30;
const rating = 4.5;
const isCool = true;
const x = null; //empty
const y = undefined;
let z; //undefined

// console.log(typeof z); // how to determine datatype

//========strings===================
// console.log('my name is ' + name + ' and I am ' + age) // concat

//template literals
// console.log(`My name is ${name} and I am ${age}`)

const s = 'Hello, World, now';
// console.log(s.length)
// console.log(s.toUpperCase())
// console.log(s.toLowerCase())
// console.log(s.substring(0, 5).toUpperCase())
// console.log(s.split(', ')) // split by separators

// array - vars that hold multiple values

const numbers = new Array(1, 2, 3, 4, 5); // new is constructor
// console.log(numbers);

const fruits = ['apples', 'oranges', 'pears'];
fruits[3] = 'grapes';
console.log(fruits);
