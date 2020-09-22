function getAnonName(firstName) {
  return new Promise((resolve, reject) => {
    if (!firstName) {
      reject("You didn't pass in a first name!");
    } else {
      resolve(`${firstName} Alnabwani`);
    }
  });
  // .then(result => console.log(result))
  // .catch(err => console.log(err))
}

console.log(getAnonName(null));
console.log(getAnonName('Ismaiel'));
