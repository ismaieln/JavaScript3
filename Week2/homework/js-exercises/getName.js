const getAnonName = firstName => {
  let myFullName = new Promise((resolve, reject) => {
    if (!firstName) {
      reject("You didn't pass in a first name!");
    } else {
      resolve(`${firstName} Alnabwani`);
    }
  })
    .then(result => console.log(result))
    .catch(err => console.log(err));
};

getAnonName(null, console.log);
getAnonName('Ismaiel', console.log);
