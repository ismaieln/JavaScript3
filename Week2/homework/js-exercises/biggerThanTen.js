function checkDoubleDigits(num) {
  return new Promise((resolve, reject) => {
    if (num > 10) {
      resolve('The number is bigger than 10!');
    } else {
      reject('Error! The number is smaller than 10...');
    }
  });
}

let five = checkDoubleDigits(5);
let fifteen = checkDoubleDigits(15);
console.log(five);
console.log(fifteen);
