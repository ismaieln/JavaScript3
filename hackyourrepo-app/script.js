'use strict';

/*
  Write here your JavaScript for HackYourRepo!
*/
const placeholderRepos = [
  {
    name: 'SampleRepo1',
    description: 'This repository is meant to be a sample',
    forks: 5,
    updated: '2020-05-27 12:00:00',
  },
  {
    name: 'AndAnotherOne',
    description: 'Another sample repo! Can you believe it?',
    forks: 9,
    updated: '2020-05-27 12:00:00',
  },
  {
    name: 'HYF-Is-The-Best',
    description:
      "This repository contains all things HackYourFuture. That's because HYF is amazing!!!!",
    forks: 130,
    updated: '2020-05-27 12:00:00',
  },
];

// declaration of the required variables
let selectRepo = document.getElementById('selectRepo');
let repo = document.getElementById('repo');
let description = document.getElementById('desc');
let forks = document.getElementById('fork');
let updated = document.getElementById('upDate');
let contributor = document.getElementById('contributor');

// Event Listener for select
selectRepo.addEventListener('change', applyData);
let outPut = '<div class="contributors">' + '<h2> Contributors</h2 ></div >';
contributor.innerHTML = outPut;

// the function apply data//
function applyData() {
  repo.innerText = placeholderRepos[selectRepo.value].name;
  description.innerText = placeholderRepos[selectRepo.value].description;
  forks.innerText = placeholderRepos[selectRepo.value].forks;
  updated.innerText = placeholderRepos[selectRepo.value].updated;
  outPut +=
    '<div class="contributors"> <img src="https://avatars0.githubusercontent.com/u/13186712?v=4"  width="50px" /> <a  href="https://github.com/NoerGitKat" class="userName" target="_blank" >NoerGitKat</a> <div></div><div class="badge">8</div></div >';
  contributor.innerHTML = outPut;
}
