const timsFavouriteNumber = 82;

function countToTen() {
  debugger; // this debugger showed us each step of the for loop so we could see why it doesn't run/each step when it does run
  for (let i = 0; i < 10; i++) {
    console.log(i);
  }
}
// countToTen();

function add(a, b) {
  debugger; // this debugger tells us the values of our function params AND our vairables as we get to them in the steps
  let sum = a + b;
  console.log(sum);
}

// add(400, 20);

function whileMyConsoleGentlyWeeps() {
  let counter = 1;

  while (counter < 100) {
    console.log(counter);
    counter++;
    debugger; // this stops each loop, and is a good time to see the difference between step over and resume script
  }
}

// whileMyConsoleGentlyWeeps();

// this is astill a valid tool to use
if (3 < 2) {
  console.log("this one");
} else {
  console.log("no this one");
}
