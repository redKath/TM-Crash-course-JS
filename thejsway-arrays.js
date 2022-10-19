// List of words

// Write a program that asks the user for a word until the user types "stop". The program then shows each of these words, except "stop".
let words = [];
let userWord = '';
while (userWord != 'stop') {
  userWord = prompt('enter word: ')
  words.push(userWord)
}
words.pop();
console.log(words);
// Array maximum

// Write a program that creates the following array, then calculates and shows the array's maximum value.
const values = [3, 11, 7, 2, 9, 10];
console.log('max: ', Math.max(...values))
// Sum of values

// Write a program that creates the following array, then calculates and shows the sum of its values (42 in that case).
const values2 = [3, 11, 7, 2, 9, 10];
let sum = 0;
values2.forEach(val => {
  sum += val;
});
console.log('sum of array = ', sum)
// Write a program that:

//     Creates an array named musketeers containing values "Athos", "Porthos" and "Aramis".
//     Shows each array element using a for loop.
//     Adds the "D'Artagnan" value to the array.
//     Shows each array element using the forEach() method.
//     Remove poor Aramis.
//     Shows each array element using a for-of loop.

let musketeers = ['Athos', 'Porthos', 'Aramis'];
for (let i = 0; i < musketeers.length; i++) {
  console.log(musketeers[i]);

}
musketeers.push("D'Artagnan");
console.log('new array ', musketeers, '\n');

musketeers.forEach(musk => {
  console.log(musk)
});

musketeers.splice(2, 1)
console.log('new array... ', musketeers, '\n');

for (const myElement of musketeers) {
  // Use myElement to access each array element one by one
  console.log(myElement)
}

