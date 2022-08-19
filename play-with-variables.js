const firstName = prompt('Enter your first name: ')
const lastName = prompt('Enter your last name: ')
console.log(`Hi ${firstName} ${lastName}`)

let a = 2;
a -= 1; // 1
a++; // 2 =a
let b = 8;
b += 2; //10
const c = a + b * b; //101
const d = a * b + b;//20
const e = a * (b + b); //20
const f = a * b / a; //10
const g = b / a * a; //10
console.log(a, b, c, d, e, f, g); // 1, 10,  101, 20, 20,10,10 - 2 10 102 30 40 10 10

let vatPrice = prompt('How much is the raw price? ')
const finalVat = 0.206 * Number(vatPrice) + Number(vatPrice)
console.log(`vat price (20.6%) = ${finalVat}`)

// The conversion between scales is given by the formula: [°F] = [°C] x 9/5 + 32.

let temperature = prompt('enter temperature (°C): ')
temperature = temperature * 9 / 5 + 32
console.log(`${temperature} °F`)

let number1 = 5;
let number2 = 3;

// TODO: type your code here (and nowhere else!)
let aa = number2 //3
let bb = number1 //5
number1 = aa
number2 = bb


console.log(number1); // Should show 3
console.log(number2); // Should show 5