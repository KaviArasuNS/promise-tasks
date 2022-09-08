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

// Random Fox API to display random images of FOX

const foxURL = "https://randomfox.ca/floof/";

const foxContainer = document.getElementsByClassName("fox-container")[0];

// Loop the fetch function n Number of times to get a random fox image URL and display the same

for (i = 0; i < 14; i++) {
  fetch(foxURL)
    .then((response) => response.json())
    .then((responseJson) => {
      const img = document.createElement("img");
      img.className = "fox-items";
      img.src = responseJson.image;
      foxContainer.append(img);
      console.log(responseJson.image);
    })
    .catch((error) => console.log(error));
}
