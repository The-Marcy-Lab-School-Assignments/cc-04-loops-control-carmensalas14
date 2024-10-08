//Write your solutions in this file, don't forget to test your functions.

const countFromOne = (num) => {
  for (let i = 1; i <= num; i++) {
    console.log(i);
  }
};
// countFromOne(10);

const countEveryOdd = (n) => {
  for (i = 1; i <= n; i++) {
    if (i % 2 !== 0) {
      console.log(i);
    }
  }
};
// countEveryOdd(10);

const isNegative = (num) => {
  return num < 0;
};
// console.log(isNegative(-8)); //true

const betweenFiveAndTwenty = (num) => {
  if (num >= 5 && num <= 20) {
    return true;
  } else {
    return false;
  }
};

console.log(betweenFiveAndTwenty(20)); // returns true
