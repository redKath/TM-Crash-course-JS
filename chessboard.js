/*Chessboard
Write a program that creates a string that represents an 8×8 grid, using newline characters to separate lines. At each position of the grid there is either a space or a "#" character. The characters should form a chessboard.

Passing this string to console.log should show something like this:

 # # # #
# # # # 
 # # # #
# # # # 
 # # # #
# # # # 
 # # # #
# # # #
When you have a program that generates this pattern, define a binding size = 8 and change the program so that it works for any size, outputting a grid of the given width and height.*/

// get length and width for the grid
// const length = 8; //vertical measurement
// const width = 8; // horizontal measurement

const length = Number(prompt('Enter length of grid')); //vertical measurement
const width = Number(prompt('Enter width of grid')); // horizontal measurement

// prepare strings to repeat 
let firstPattern = ' #'
let secondPattern = '# '

switch (length % 2) {
    case 0:
        for (let i = 1; i <= length / 2; i++) {
            console.log(firstPattern.repeat(width))
            console.log(secondPattern.repeat(width))
        }
        break
    case 1:

        if (length === 1) {
            console.log(firstPattern.repeat(width))
        }

        else {
            console.log(firstPattern.repeat(width))
            for (let i = 1; i <= Math.floor(length / 2); i++) {
                console.log(secondPattern.repeat(width))
                console.log(firstPattern.repeat(width))

            }
        }
        break
    default:
        console.log('error invalid length or width')
}
