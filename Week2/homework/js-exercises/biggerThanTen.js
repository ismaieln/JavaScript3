function checkDoubleDigits(num) {
  new Promise((resolve, reject) => {
    if (num > 10) {
      resolve('The number is bigger than 10!');
    } else {
      reject('Error! The number is smaller than 10...');
    }
  }).then(function(result) {
    console.log(result);
    return result;
  });
}

checkDoubleDigits(5);
checkDoubleDigits(15);
