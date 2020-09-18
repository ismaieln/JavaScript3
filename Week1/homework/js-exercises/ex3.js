// Event Listeners for buttons
document.getElementById('buttonH').addEventListener('click', useHttbReq);
document.getElementById('buttonA').addEventListener('click', useAxios);

// declaration of the required variables
const outPut = document.getElementById('displayData');
const image = document.getElementById('images');

// create ul with DOM
let pic = '<ul class="gallery"></ul>';

// the function with XMLHttpRequest()//
function useHttbReq() {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://dog.ceo/api/breeds/image/random', true);
  xhr.onload = () => {
    if (xhr.status == 200) {
      let info = JSON.parse(xhr.responseText);

      // insert the image in li
      pic += '<li ><img src="' + info.message + '"  width = "100" /></li>';
      image.innerHTML = pic;

      // as per the comment
      console.log(info.message);
      // error message
    } else if (this.status == 404) {
      outPut.innerText = 'Not Found .....';
    }
  };

  xhr.send();
}
// function with axios
function useAxios() {
  axios
    .get('https://dog.ceo/api/breeds/image/random')
    .then(res => {
      pic += '<li ><img src="' + res.data.message + '"  width = "100" /></li>';
      image.innerHTML = pic;

      //As per the comment
      console.log(res.data.message);
    })
    .catch(err => console.log(err));
}
