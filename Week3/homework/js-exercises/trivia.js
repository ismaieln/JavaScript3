// to create the page when window loaded
window.onload = () => {
  document.body.innerHTML = `<div class="container">
  <h1 class="flexItem">Let's play some Trivia!</h1>
    <p class="flexItem">Try your best to figure out the answer. If you really have to no clue, click on question to reveal the answer.....</p>
    <div id="quote" class="flexItem"></div>    
    </div> `;
  getQuote().catch(err => console.log(err));
};

// to fetch the data
const getData = async function(url) {
  const response = await fetch(url);
  const json = await response.json();
  return json.results;
};

//  to fetch the quotes
const getQuote = async function() {
  const quotes = await getData(' https://opentdb.com/api.php?amount=5');
  const divOfQuote = document.getElementById('quote');
  let output = '';
  for (quote of quotes) {
    output += `<p title="Click to show the answer!" class="question">${quote.question}</p>
    <p class="answer">${quote.correct_answer}</p>`;
  }
  // append the quotes to the page
  divOfQuote.innerHTML = output;

  const question = document.querySelectorAll('.question');
  const answer = document.querySelectorAll('.answer');

  for (let i = 0; i <= question.length; i++) {
    question[i].addEventListener('click', function() {
      // const first = this.firstElementChild;
      // // first.addAttribute = 'title';
      // const last = this.lastElementChild;
      if (this.title == 'Click to show the answer!') {
        this.classList.add('active');
        this.title = 'Click to hide the answer!';
        answer[i].style.display = 'block';
      } else {
        this.classList.remove('active');
        this.title = 'Click to show the answer!';
        answer[i].style.display = 'none';
      }
    });
  }
};
