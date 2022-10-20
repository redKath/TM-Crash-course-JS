// We have an array of strings arr. We’d like to have a sorted copy of it, but keep arr unmodified.

// Create a function copySorted(arr) that returns such a copy.

let arr4 = ["HTML", "JavaScript", "CSS"];

const copySorted = arr4 => {
  let arr41 = [...arr4].sort(function (a, b) {
    return a.length - b.length;
  });
  return arr41
}
let sorted = copySorted(arr4);

console.log(sorted); // CSS, HTML, JavaScript
console.log(arr4); // HTML, JavaScript, CSS (no changes)
console.log('=====================')
let arr3 = [5, 2, 1, -10, 8];
let sortedDecreasing = []
// ... your code to sort it in decreasing order
const sortDecreasingOrder = arr3 => {

  return arr3.sort((a, b) => b - a)
}
console.log(sortDecreasingOrder([5, 2, 1, -10, 8]))
console.log(arr3); // 8, 5, 2, 1, -10
console.log('=====================')
// Write a function filterRangeInPlace(arr, a, b) that gets an array arr and removes from it all values except those that are between a and b. The test is: a ≤ arr[i] ≤ b.

// The function should only modify the array. It should not return anything.

// For instance:

// let arr = [5, 3, 8, 1];

// filterRangeInPlace(arr, 1, 4); // removed the numbers except from 1 to 4

// alert( arr ); // [3, 1]
let arr2 = [5, 3, 8, 1];
const filterRangeInPlace = (arr2, c, d) => {
  arr2.forEach((element, index) => {
    if (element >= c && element <= d) {
      pass
    }
    else arr2.splice(index, 1)
  })
  return arr2
}
filterRangeInPlace(arr2, 1, 4); // removed the numbers except from 1 to 4

console.log('filteredrangeinplace', arr2); // [3, 1]
console.log('=====================')
// Write a function filterRange(arr, a, b) that gets an array arr, looks for elements with values higher or equal to a and lower or equal to b and return a result as an array.

// The function should not modify the array. It should return the new array.

// For instance:

// let arr = [5, 3, 8, 1];

// let filtered = filterRange(arr, 1, 4);

// alert( filtered ); // 3,1 (matching values)

// alert( arr ); // 5,3,8,1 (not modified)

let arr = [5, 3, 8, 1];
let filteredArr = [];
const filterRange = (arr, a, b) => {
  arr.forEach(element => {
    if (element >= a && element <= b) {
      filteredArr.push(element)
      // console.log(element)

    }

  });
  return filteredArr
}
let filtered = filterRange(arr, 1, 4);

console.log(filtered); // 3,1 (matching values)

console.log(arr); // 5,3,8,1 (not modified)
console.log('=====================')
// Write the function camelize(str) that changes dash-separated words like “my-short-string” into camel-cased “myShortString”.

// That is: removes all dashes, each word after dash becomes uppercased.

// Examples:

// camelize("background-color") == 'backgroundColor';
// camelize("list-style-image") == 'listStyleImage';
// camelize("-webkit-transition") == 'WebkitTransition';

// P.S. Hint: use split to split the string into an array, transform it and join back.

const camelize = str => {
  let arrayStr = [...str];
  for (let i = 0; i < str.length; i++) {

    if (str[i] === '-' && i != 0) {
      // console.log(str[i])
      // console.log(str[i + 1], typeof (str[i + 1]))
      // str[i + 1] = str[i + 1].toUpperCase()
      arrayStr.splice(i + 1, 1, str[i + 1].toUpperCase());
      // console.log('next ', str[i + 1])
    }
  }
  // console.log(arrayStr)
  str = arrayStr.join('')


  return str.split('-').join('');
}
console.log(camelize("background-color"))
console.log(camelize("list-style-image"))
console.log(camelize("-webkit-transition"))