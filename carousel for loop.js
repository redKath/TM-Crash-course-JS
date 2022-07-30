// looping exercises
// Carousel
// Write a program that launches a carousel for 10 turns, showing the turn number each time.
let turns;
// for (turns = 1; turns <= 10; turns++) {
//     console.log(turns)
// }

//When it's done, improve it so that the number of turns is given by the user.
userTurns = prompt("How many turns?")
for (turns=0; turns <= userTurns; turns++) {
    console.log(turns)
}
