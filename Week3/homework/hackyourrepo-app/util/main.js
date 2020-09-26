import { getData } from './getData.js';

// The main function
export function main() {
  // the basic DOM
  document.body.innerHTML = `
  <main>
  <div id="store"></div>
  <div class="container" >
  <header>HYF Repositories
  <select name="selectRepo" id="selectRepo"></select>
  </header>  
  <section id="info">
  <h4 class="labels">Repository:</h4>
  <p id="repo" class="labels"><small class="placeH">Repository Name</small></p>
  <h4 class="labels">Description:</h4>
  <p id="desc" class="labels"><small class="placeH">Description</small></p>
  <h4 class="labels">Forks:</h4>
  <p id="fork" class="labels"><small class="placeH">Forks</small></p>
  <h4 class="labels">Updated:</h4>
  <p id="upDate" class="labels"><small class="placeH">2020-10-10 20:20:20</small></p>
  </section>
  <section id="contributor">
  <div class="contributors">
  <h2>Contributors</h2 >
  </div >
  <div id="contributorsPage" ></div>  
  <div id="paginationId" class="pagination"></div>
  </section>
  </div >
  </main >`;

  // call the function to fetch data
  getData();
}
