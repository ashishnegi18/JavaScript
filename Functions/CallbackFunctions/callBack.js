//callback function:function that is passed as an argument to another function

function greet(name, callback) {
  console.log("Hello " + name);
  callback();
}

// A callback function
function sayGoodbye() {
  console.log("Goodbye!");
}

// Passing the callback function as an argument
greet("Alice", sayGoodbye);

// Callbacks are particularly useful in scenarios where operations are asynchronous, such as:

//Asynchronous Example with setTimeout

// Function to simulate a delayed greeting using setTimeout
function delayedGreeting(name, callback) {
  setTimeout(function () {
    console.log("Hello " + name);
    callback();
  }, 2000); // 2-second delay
}

// Callback function
function complete() {
  console.log("Operation complete!");
}

// Using the delayedGreeting function
delayedGreeting("Bob", complete);
