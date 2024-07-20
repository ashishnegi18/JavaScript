//sum of number

const sum = (a, b) => {
  console.log(a + b);
};
sum(10, 20);

//average of a number and on the bases of average give them a division

const Avg = (a, b, c, d, e) => {
  let Average = (a + b + c + d + e) / 5;
  console.log(Average)

  if (Average < 50 && Average >= 33) {
    console.log("good");
  } else if (Average < 70 && Average >= 50) {
    console.log("very good");
  } else if (Average >= 70 && Average <= 100) {
    console.log("excellent");
  } else {
    console.log(" please, try again");
  }
};
Avg(10, 20, 90, 90, 50);
