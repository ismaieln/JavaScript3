import { selectPage } from './selectPage.js';
// This is for page right and left
export function clickRightLeft(f, buttons, store, pages) {
  let sto = store.innerHTML;
  let pageNumber = buttons[sto].innerHTML;

  if (f && sto < buttons.length - 1) {
    sto++;
    selectPage(pages, sto, buttons, store);
  } else if (!f && sto >= 1) {
    sto--;
    selectPage(pages, sto, buttons, store);
  }
}
