//map function:is a method available on arrays that allows you to create a new array by applying a given function to each element of the original array

// This is particularly useful for transforming data in a clean and concise way.

//array.map(callback(element, index, array), thisArg);

// callback: A function that is called for every element in the array. It takes three arguments:
// element: The current element being processed.
// index (optional): The index of the current element.
// array (optional): The array map was called upon.
// thisArg (optional): A value to use as this when executing the callback function.

const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(number => number * 2);

console.log(doubled); // Output: [2, 4, 6, 8, 10]


const string = ["a","b","c","d","e","f","g"]

const upper = string.map(number => 
    number.toUpperCase()
)

console.log(upper)

//largest number in array

const number = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
const largestNumber = Math.max(...number);
console.log(largestNumber);




