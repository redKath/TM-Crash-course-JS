// Neither yes nor no

// Write a program that plays "neither yes, nor no" with the user. Specifically, the programs asks the user to enter text until either "yes" or "no" is typed, which ends the game.
let text = ''
while ((text.toLowerCase() != 'yes') && (text.toLowerCase() != 'no')) {
    text = prompt('Enter a text (yes or no to exit) ')
    console.log(`entry: ${text}`)
}