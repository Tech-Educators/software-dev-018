let counter = 0;

if (counter < 5) {
    console.log('Hello')
}


// While loops are kinda similar to if statements -> while some condition is true, keep running the code
// we need some way for the condition to become faslse, otherwise it will keep running forever (or chrome crashes)
// a while loop will keep running the code until the condition is false

while (counter < 5) {
    // log it 
    console.log(counter)
    // add one to counter
    counter++
    // shorthand for the below
    // counter = counter + 1

    // once counter reaches a value of 5, the while doesn't run again
}


/// ****** ----- For Loops -----  ******


// for (a counter variable; a condition to check; update value of counter) {
//     // whatever code you want to repeat
// }



for (let counter = 0; counter < 5; counter++) {
    // template literals (the strings)
    console.log(`The value of counter is ${counter}`)
}
// The value of counter is 0
// The value of counter is 1
// The value of counter is 2
// The value of counter is 3
// The value of counter is 



// You'll see people use i most often as the var name

for (let i = 0; i < 10; i++) {
    console.log(i)
}