import { printPagination } from './printPagination.js';
import { divideToPages } from './divideToPages.js';
import { selectPage } from './selectPage.js';
import { clickRightLeft } from './clickRightLeft.js';
// the function to print the contributors
export function printTheContributors(contributors) {
  let conLength = contributors.length;
  let pageCount = Math.ceil(conLength / 5);

  let pages = divideToPages(contributors, pageCount);

  printPagination(pageCount);

  const store = document.getElementById('store');
  const right = document.getElementById('right');
  const left = document.getElementById('left');
  const buttons = document.querySelectorAll('.btn');

  right.addEventListener('click', function() {
    clickRightLeft(true, buttons, store, pages);
  });
  left.addEventListener('click', function() {
    clickRightLeft(false, buttons, store, pages);
  });

  //Initiate page number one
  selectPage(pages, 0, buttons, store);

  buttons.forEach(button => {
    button.addEventListener('click', function() {
      let e = this.innerHTML - 1;
      selectPage(pages, e, buttons, store);
    });
  });
}
