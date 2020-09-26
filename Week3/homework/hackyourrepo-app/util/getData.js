// load the data for HackYourRepos

import { printData } from './printData.js';
import { printError } from './printError.js';
//
async function getData() {
  try {
    const response = await fetch(
      'https://api.github.com/orgs/HackYourFuture/repos?per_page=100',
    );
    const resData = await response.json();
    printData(resData);
  } catch {
    printError('Network request failed');
  }
}

export { getData };
