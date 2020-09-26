// Exercise A
async function getData(url) {
  try {
    let response = await fetch(url);
    let json = await response.json();
    console.log(json.image);
  } catch (err) {
    console.log('hello ' + error);
  }
}

getData('https://randomfox.ca/floof/');

// Exercise B
const arrayOfWords = ['cucumber', 'tomatos', 'avocado'];

const makeAllCaps = async array => {
  return await new Promise((resolve, reject) => {
    let capsArray = array.map(word => {
      if (typeof word === 'string') {
        return word.toUpperCase();
      } else {
        reject('Error: Not all items in the array are strings!');
      }
    });
    resolve(capsArray);
  });
};

async function toPrint() {
  try {
    let response = await makeAllCaps(arrayOfWords);
    console.log(response);
  } catch (error) {
    console.log('there is an error' + error);
  }
}

toPrint();
