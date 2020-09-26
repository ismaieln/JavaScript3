// function to display the pagination
export function printPagination(pagePount) {
  let totalPages = '';
  for (let i = 1; i <= pagePount; i++) {
    totalPages += `<li class="pageBtn btn">${i}</li>`;
  }
  let doPages = `<br><div class="pagination ">
      <ul class="pageContainer">
        <li id="left" class="pageBtn">&lang;</li>${totalPages}<li id="right" class="pageBtn">&rang;</li>
      </ul>
    </div>`;
  document.getElementById('paginationId').innerHTML = doPages;
}
