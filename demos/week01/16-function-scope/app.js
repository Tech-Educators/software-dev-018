// GLOBAL VARIABLES - Any variables that are declared outside code blocks

// LOCAL variables are defined inside codeblocks - and we can only use them in that codeblock!

let myGlobal = 0

// Anything inside these curly brackets is a code block
if (true) {

}

function test() {
    let result = myGlobal + 2

    let myDog = 'Darcy'
    console.log(result)
}

test()

// console.log(myDog)



// DONT EVER DO THIS

let confusion = 'Sam'


function functionToConfuse() {
    let confusion = 'Tim'
    console.log(confusion) // Tim
}


functionToConfuse()
console.log(confusion) // Sam