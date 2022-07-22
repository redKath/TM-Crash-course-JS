// declaration of variable
let message;

// assignment of data to variable
message = 'Hello, Kate';
console.log(message);

// assignment and declaration done in one step
let newMessage = 'Hi there, Kate';
console.log(newMessage);

// declaring multiple variables in one line
let favGroup = 'EXO', favNum = 7, favSong = 'Lucky';

// but it's better to write multi line for multi vars
let favgirlGroup = 'Twice';
let bias = 'Dahyun';
let biasWrecker = 'Sana';

// other variants of multi line style
let user = 'John',
    age = 25,
    mensahe = 'Hello';

// comma first style
let newUser = 'John'
    , newAge = 25
    , newMensahe = 'Hello';

// when naming variables, you cant start it with a digit and use hypens
// $ and _ valid names of variables tho
// non latin letters are allowed but not recommended
let имя = '...';
let 我 = '...';

// do not use reserved keywords in naming vars
// always declare variable first using let or const before assigning
// this would cause error in strict mode

// const - unchanging variable (constant)
const myBirthday = '11.29.1999'
// you can use UPPERCASE in naming variables for difficult to remember values .. example below
const COLOR_RED = "#F00";
const COLOR_GREEN = "#0F0";
const COLOR_BLUE = "#00F";
const COLOR_ORANGE = "#FF7F00";

// ...when we need to pick a color
let color = COLOR_ORANGE;

// most importantly, when naming variables use meaningful names
// describe the data it stores
// ex. userName, shoppingCart .. dont use a, b, c, data, value