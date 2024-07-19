//array is  collection multiple data types in a contigues way

//   SPREAD OPERATOR

let A = [1, 2, 3, 4, 5, 6, 7];
let B = ["helloe", 10, 20, 30, 40, 50, 60];

let C = [...A, ...B];
console.log(C);

// loops in arrays

for (i in B) {
  //for in - for index
  console.log(i);
}
for (i of A) {
  //for of - for values
  if (i % 2 == 0) {
    console.log(i);
  }
}

for (i in A) {
  if (A[i] % 2 == 0) {
    console.log(A[i]);
  }
}

for (i = 0; i < A.length; i++) {
  if (A[i] % 2 == 0) {
    console.log(A[i]);
  }
}

let D = [10, 20, 30, 40, 50, 60, 70, 50, 80];

for (i of D) {
  if (i == 50) {
    console.log("yes", "the number fo times it appears: 1");
  }
}

let E = [10, 1000, 30, 400, 50, 600, 70, 10, 10, 20, 80];

let count = 0;
for (i in E) {
  if (E[i] == 10) {
    count++;
  }
}
console.log(`yes it exists ${count} times`);

// let F = [10, 1000, 30, 400, 50, 600, 70, 10, 10, 20, 80];
// let greatest = F[0];
// let secondGreatest = F[0];
// for (let i = 1; i < F.length; i++) {
//   if (F[i] > greatest) {
//     greatest = F[i];
//   }
//   if(greatest<secondGreatest){
//     secondGreatest = greater
//     secondGreatest++
// }
// }

// console.log(greatest);
// console.log(secondGreatest)

let F = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// let sum = 0;

// for (let i = 1; i < F.length; i++) {
//   sum = sum + F[i];
// }
// console.log(sum);

let sum = 0;
for (i in F){
  sum = sum +F[i]
}
console.log(sum);