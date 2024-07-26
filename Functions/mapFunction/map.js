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


//return a array and return all the element greater than 50

let A = [10, 20, 30, 40, 50, 60, 70, 80, 90];
A.map((a) => {
  if (a > 50) {
    console.log(a);
  }
});

//greatest in the array

const numbe = [10, 20, 30, 40, 50];

let greatestNumber = numbe[0];

numbe.map((num) => {
  if (num > greatestNumber) {
    greatestNumber = num;
  }
});

console.log(greatestNumber);


const person = [
  {
    id: 1,
    first_name: "Nickie",
    last_name: "Southorn",
    email: "nsouthorn0@t.co",
    gender: "Male",
    phone: "+86 988 458 8839",
  },
  {
    id: 2,
    first_name: "Priya",
    last_name: "Guyet",
    email: "pguyet1@psu.edu",
    gender: "Male",
    phone: "+225 201 122 8186",
  },
  {
    id: 3,
    first_name: "Neda",
    last_name: "Chapell",
    email: "nchapell2@chicagotribune.com",
    gender: "Female",
    phone: "+55 296 146 2266",
  },
  {
    id: 4,
    first_name: "Dewie",
    last_name: "Argontt",
    email: "dargontt3@umich.edu",
    gender: "Male",
    phone: "+62 933 617 6542",
  },
  {
    id: 5,
    first_name: "Cloe",
    last_name: "Oakshott",
    email: "coakshott4@about.me",
    gender: "Female",
    phone: "+1 864 342 0870",
  },
];

const firstNames = person.map((p) => p.first_name);

console.log(firstNames);



