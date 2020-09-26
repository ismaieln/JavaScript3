// to select the active page
export function selectPage(pages, num, btn, store) {
  const contributor = document.getElementById('contributorsPage');
  for (let i = 0; i < btn.length; i++) {
    if (btn[i].innerHTML == num + 1) {
      btn[i].classList.add('active');
      store.innerHTML = i;
    } else {
      btn[i].classList.remove('active');
    }
  }
  let outPut = '';
  if (pages.length !== 0) {
    pages[num].forEach(element => {
      outPut += `
      <div class="contributors">
      <img src="${element.avatar_url}" alt="avatar" width="50px" />
      <a  href="${element.html_url}" class="userName" target="_blank" >
      ${element.login}</a>
      <div class="badge">${element.contributions}</div>
      </div >`;
    });
  }
  contributor.innerHTML = outPut;
}
