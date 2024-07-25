let person = {
  name: "John",
  age: 30,
  address: "delhi",
  job: "developer",
  isMarried: false,
  hobbies: ["cricket", "football", "reading"],
  number: 46181786815,
};
console.log(person.name);
console.log(person.age);
console.log(person.address);
console.log(person.job);
console.log(person.isMarried);
console.log(person.hobbies[0]);

person.isStudent = true; //adding the value in object

console.log(person); //printing the object

person.age = 30; //updating the value of

//    loops in object

for (let key in person) {
  console.log(person[key]);
}

//destructuring in object

let person1 = {
  name: "rahul",
  age: 30,
  address: "delhi",
  job: "developer",
  isMarried: false,
  hobbies: ["cricket", "football", "reading"],
  number: 46181786815,
};

let { number, job, age } = person1; //destructuring object

console.log(number); //now i can direct access number

//Objects in array

let person2 = [
  {
    first_name: "Gisela",
    last_name: "Raatz",
    email: "graatz0@theguardian.com",
    gender: "Female",
    phone_number: "+63 (278) 292-0580",
  },
  {
    first_name: "Chantal",
    last_name: "Rist",
    email: "crist1@wiley.com",
    gender: "Female",
    phone_number: "+86 (490) 931-0805",
  },
  {
    first_name: "Huberto",
    last_name: "Lalley",
    email: "hlalley2@weather.com",
    gender: "Male",
    phone_number: "+30 (627) 561-1409",
  },
  {
    first_name: "Jobie",
    last_name: "Hugonneau",
    email: "jhugonneau3@rakuten.co.jp",
    gender: "Female",
    phone_number: "+976 (386) 350-9605",
  },
  {
    first_name: "Briano",
    last_name: "Meale",
    email: "bmeale4@drupal.org",
    gender: "Male",
    phone_number: "+237 (524) 628-9576",
  },
];

// destructuring in objects in array

let [{ first_name }, { last_name }, { email }, { gender }, { phone_number }] =
  person2;

console.log(first_name);
