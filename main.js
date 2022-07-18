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

// const numbers = new Array(1, 2, 3, 4, 5); // new is constructor
// // console.log(numbers);

// const fruits = ['apples', 'oranges', 'pears'];
// fruits[3] = 'grapes'; // add an item in array, include size of array

// // adding array in last place
// fruits.push('mangos');

// // adding array in 1st place
// fruits.unshift('strawberries');
// console.log(fruits);

// // delete last element in array
// fruits.pop();
// console.log(fruits);

// // determine if it's an array - return true or false
// console.log(Array.isArray('hello'));
// console.log(Array.isArray(fruits));

// // find the size of array
// console.log(fruits.indexOf('oranges'));

// ============= object literals =================
// basically key value pairs

/*
const person = {
    firstName: 'Sherlock',
    lastName: 'Holmes',
    age: 40,
    hobbies: ['detective', 'shooting', 'basketball'],
    address: {
        street: 'Baker',
        city: 'London',
        state: 'England'
    }
}

console.log(person);
console.log(person.firstName, person.lastName);
// get shooting
console.log(person.hobbies[1]);
// get city
console.log(person.address.city);

// destructuring getting keys from dict as a variable - advance conceot, new es6 feature
const { firstName, lastName, address: { city } } = person;
console.log(firstName, city);

// add new key valu pair
person.email = 'sherlock@gmail.com';
console.log(person); */

// arrays with objects

const todos = [
    {
        id: 1,
        text: 'practice typing',
        isCompleted: true
    },
    {
        id: 2,
        text: 'watch Traversy media JS Crash Course',
        isCompleted: true
    },
    {
        id: 3,
        text: 'flex box practice',
        isCompleted: false
    }
];

console.log(todos);
// get watch traversy ...
console.log(todos[1].text);

// json data type - most common data type used for fullstack dev, api works

// how to convert array to json
/*const todoJSON = JSON.stringify(todos);
console.log(todoJSON);*/

// ======loops=====
// for loop

for (let i = 0; i <= 10; i++) {
    console.log(`for loop counter: ${i}`);

}

// while loop 