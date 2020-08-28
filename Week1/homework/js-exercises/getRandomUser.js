// Event Listeners for buttons
document.getElementById('buttonH').addEventListener('click', useHttbReq);
document.getElementById('buttonA').addEventListener('click', useAxios);

// declaration of the required variables
let outPut = document.getElementById('displayData');

// the function with XMLHttpRequest()//
function useHttbReq() {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://www.randomuser.me/api', true);
  xhr.onload = () => {
    if (xhr.status == 200) {
      outPut.innerText = xhr.responseText;
      console.log(xhr.responseText);
    } else if (this.status == 404) {
      outPut.innerText = 'Not Found';
    }
  };

  xhr.send();
}

// function with axios
function useAxios() {
  axios
    .get('https://www.randomuser.me/api')
    .then(res => console.log(res))
    .catch(err => console.log(err));
}
