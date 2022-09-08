// Programming Quotes API to display random Programming Quote
const programmingQuoteURL =
  "https://programming-quotes-api.herokuapp.com/quotes/random";

const proQuoteE1 = document.getElementsByClassName("porgramming-quote")[0];

// fetch a random quote and display it at the top of the page
fetch(programmingQuoteURL)
  .then((response) => response.json())
  .then((responseJson) => {
    proQuoteE1.innerText = `${responseJson.en} - ${responseJson.author}`;
    console.log(responseJson);
  })
  .catch((error) => console.log(error));

// Meow Facts API to display facts about Cat

const meowFactsURL = "https://meowfacts.herokuapp.com/?count=5";

const meowFactsE1 = document.getElementsByClassName("facts-table")[0];

const loadMoreBtn = document.getElementsByClassName("btn btn-dark")[0];

var k = 1;
const loadMoreMeowFacts = () => {
  fetch(meowFactsURL)
    .then((response) => response.json())
    .then((responseJson) => {
      for (i = 0; i < 5; i++) {
        const tr = document.createElement("tr");
        const th = document.createElement("td");
        const td = document.createElement("td");
        th.innerText = k++;
        td.innerText = responseJson.data[i];
        tr.append(th, td);
        meowFactsE1.append(tr);
      }
    })
    .catch((error) => console.log(error));
};

loadMoreMeowFacts();

loadMoreBtn.addEventListener("click", () => {
  loadMoreMeowFacts();
});
