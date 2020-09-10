'use strict';

/*
  Write here your JavaScript for HackYourRepo!
*/

// call the function main when the window loaded..
window.addEventListener('load', main);

// The main function
function main() {
  const hackYourRepos =
    'https://api.github.com/orgs/HackYourFuture/repos?per_page=100';

  // the basic DOM
  document.body.innerHTML = `
  <main><div class="container" >
  <header>HYF Repositories
  <select name="selectRepo" id="selectRepo"></select>
  </header>  
  <section id="info" class="sect">
  <h4 class="labels">Repository:</h4>
  <p id="repo" class="labels"></p>
  <h4 class="labels">Description:</h4>
  <p id="desc" class="labels"></p>
  <h4 class="labels">Forks:</h4>
  <p id="fork" class="labels"></p>
  <h4 class="labels">Updated:</h4>
  <p id="upDate" class="labels"></p>
  </section>
  <section id="contributor" class="sect"></section>
  </div ></main >`;

  // call the function to fetch data
  getData(hackYourRepos).catch(err => printError('Network request failed'));
}

// to print the error message incase of error
function printError(err) {
  document.body.innerHTML = `
  <main><div class="container" >
  <header>HYF Repositories  
  </header>
  <div id="errorMessage">${err}</div >
  </main >`;
}

// load the data for HackYourRepos
async function getData(url) {
  const response = await fetch(url);
  const resData = await response.json();
  printData(resData);
}

// sort the data alphabetical
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
  //declare variables
  const selectRepo = document.getElementById('selectRepo');
  const repo = document.getElementById('repo');
  const description = document.getElementById('desc');
  const forks = document.getElementById('fork');
  const updated = document.getElementById('upDate');

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
    let url_repo = `<a href="https://github.com/HackYourFuture/
      ${res[this.value].name}" 
      target="_blank">${res[this.value].name}</a>`;

    // to print the date format in nice way // it is long code but at the time been it works.
    let dat = res[this.value].updated_at.split('T');
    let tim = dat[1].slice(0, dat[1].length - 1);
    repo.innerHTML = url_repo;
    description.innerText = res[this.value].description;
    forks.innerText = res[this.value].forks;
    updated.innerText = dat[0] + '  ' + tim;

    // identify the url for the contributors
    let urlCont =
      'https://api.github.com/repos/HackYourFuture/' +
      res[this.value].name +
      '/contributors';

    // call the function
    getTheContributors(urlCont).catch(err =>
      console.log(err + ', Please Ismaiel check the address!'),
    );
  });
}

// the function to get the contributors
async function getTheContributors(urlC) {
  await axios.get(urlC).then(respon => printTheContributors(respon));
}

// the function to print the contributors
function printTheContributors(contributors) {
  const contributor = document.getElementById('contributor');
  let resData = contributors.data;
  let outPut = `<div class="contributors">
  <h2>Contributors</h2 >
  </div >`;
  resData.forEach(element => {
    outPut += `
      <div class="contributors">
      <img src="${element.avatar_url}" alt="avatar" width="50px" />
      <a  href="${element.html_url}" class="userName" target="_blank" >
      ${element.login}</a>
      <div class="badge">${element.contributions}</div>
      </div ><br>`;
  });
  contributor.innerHTML = outPut;
}
