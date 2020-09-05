'use strict';

/*
  Write here your JavaScript for HackYourRepo!
*/
const hackYourRepos =
  'https://api.github.com/orgs/HackYourFuture/repos?per_page=100';

// the basic DOM
document.body.innerHTML =
  '<main><div class="container" >' +
  '<header>HYF Repositories ' +
  '<select name="selectRepo" id="selectRepo"></select>' +
  '</header>' +
  '<section id="info" class="sect">' +
  '<h4 class="labels">Repository:</h4>' +
  '<p id="repo" class="labels"></p>' +
  '<h4 class="labels">Description:</h4>' +
  '<p id="desc" class="labels"></p>' +
  '<h4 class="labels">Forks:</h4>' +
  '<p id="fork" class="labels"></p>' +
  '<h4 class="labels">Updated:</h4>' +
  '<p id="upDate" class="labels"></p>' +
  '</section>' +
  '<section id="contributor" class="sect"></section>' +
  '</div ></main >';

//declare variables
const selectRepo = document.getElementById('selectRepo');
const repo = document.getElementById('repo');
const description = document.getElementById('desc');
const forks = document.getElementById('fork');
const updated = document.getElementById('upDate');
const contributor = document.getElementById('contributor');

// call the function
getData(hackYourRepos);

// load the data for HackYourRepos
function getData(url) {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', url, true);
  xhr.onload = () => {
    if (xhr.status == 200) {
      let resTextJ = JSON.parse(xhr.responseText);

      // call other function
      printData(resTextJ);
    } else if (this.status == 404) {
      console.log('Not Found');
    }
  };
  xhr.send();
}

// sort the data
function toSortData(res) {
  let newRes = res.sort((a, b) => {
    let aA = a.name.toUpperCase();
    let bB = b.name.toUpperCase();
    if (aA < bB) {
      return -1;
    }
    if (aA > bB) {
      return 1;
    }
    return 0;
  });
  return newRes;
}

// Function to print the options in the select (list)
function printData(res) {
  let names = toSortData(res);
  let selectOptions =
    '<option value="" disabled selected>Choose Repository....</option>';
  for (let i = 0; i < res.length; i++) {
    selectOptions += '<option value="' + i + '">' + names[i].name + '</option>';
  }

  // fill the list with data
  selectRepo.innerHTML = selectOptions;

  // Event Listener for select
  selectRepo.addEventListener('change', function() {
    //insert the information of the selected repo
    let url_repo =
      ' <a href="' +
      'https://github.com/HackYourFuture/' +
      res[this.value].name +
      '"class="userName" target="_blank">' +
      res[this.value].name +
      '</a>';
    repo.innerHTML = url_repo;
    description.innerText = res[this.value].description;
    forks.innerText = res[this.value].forks;
    updated.innerText = res[this.value].updated_at;

    // identify the url for the contributors
    let urlCont =
      'https://api.github.com/repos/HackYourFuture/' +
      res[this.value].name +
      '/contributors';

    // call the function
    getTheContributors(urlCont);
  });
}

// the function to get the contributors
async function getTheContributors(urlC) {
  await axios
    .get(urlC)
    .then(respon => {
      printTheContributors(respon);
    })
    .catch(err => console.log(err));
}

// the function to print the contributors
function printTheContributors(contributors) {
  let resData = contributors.data;
  let outPut = '<div class="contributors">' + '<h2> Contributors</h2 ></div >';
  for (let j = 0; j < resData.length; j++) {
    outPut +=
      '<div class="contributors">' +
      '<img src="' +
      resData[j].avatar_url +
      '"  width="50px" />' +
      '<a  href="' +
      resData[j].html_url +
      '" class="userName" target="_blank" >' +
      resData[j].login +
      '</a>' +
      '<div class="badge">' +
      resData[j].contributions +
      '</div>' +
      '</div ><br>';
  }
  contributor.innerHTML = outPut;
}
