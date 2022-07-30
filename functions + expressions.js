// all about expressions
// f(x) declaration example
function sayHi() {
    console.log("Hello");
}

// expression is another way to write function
let sayAnnyeong = function () {
    console.log("Annyeong");
};

sayHi(); // Hello
sayAnnyeong(); // Annyeong

// a f(x) is a value
console.log(sayAnnyeong); // shows f(x) code - this does not call f(x) since there are no parenthesis

// see differences
// Function Declaration
function sum(a, b) {
    return a + b;
}

// Function Expression
let sumx = function (a, b) {
    return a + b;
};

// another difference f(x) declaration can be called before it's created while expression is not
sayHi("John"); // Hello, John

function sayHi(name) {
    console.log(`Hello, ${name}`); //works
}

sayHello("John"); // error! cannot access before initialization

let sayHello = function (name) {  // (*) no magic any more
    console.log(`Hello, ${name}`);
};

// when to use function declaration and function expression
// f(x) declaration is easier to read, more eye-catching
// can be used even before they are declared

// f(x) expressions are used instead if a Function Declaration does not suit us for some reason
// ex: we need a conditional declaration