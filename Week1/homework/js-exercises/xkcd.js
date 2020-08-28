// Event Listeners for buttons
document.getElementById('buttonH').addEventListener('click', useHttbReq);
document.getElementById('buttonA').addEventListener('click', useAxios);

// declaration of the required variables
let outPut = document.getElementById('displayData');
let image = document.getElementById('image');

// the function with XMLHttpRequest()//
function useHttbReq() {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://xkcd.now.sh/?comic=latest', true);
  xhr.onload = () => {
    if (xhr.status == 200) {
      let info = JSON.parse(xhr.responseText);
      let pic = '';
      pic += '<img src="' + info.img + '"  />';
      image.innerHTML = pic;
      console.log(info);
    } else if (this.status == 404) {
      outPut.innerText = 'Not Found';
    }
  };

  xhr.send();
}

// function with axios
function useAxios() {
  axios
    .get('https://xkcd.now.sh/?comic=latest')
    .then(res => {
      let pic = '';
      pic += '<img src="' + res.data.img + '"  />';
      image.innerHTML = pic;
      console.log(res);
    })
    .catch(err => console.log(err));
}
