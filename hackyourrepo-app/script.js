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

let repoName = document.getElementById('firstRepo');
let repo = document.getElementById('repo');
let description = document.getElementById('desc');
let forks = document.getElementById('fork');
let updated = document.getElementById('upDate');

repoName.addEventListener('change', applyData);

function applyData() {
  repo.innerText = placeholderRepos[repoName.value].name;
  description.innerText = placeholderRepos[repoName.value].description;
  forks.innerText = placeholderRepos[repoName.value].forks;
  updated.innerText = placeholderRepos[repoName.value].updated;
}

// useAxios();
function useAxios() {
  axios
    .get('https://github.com/hackyourfuture')
    .then(res => console.log(res))
    .catch(err => console.log(err));
}
