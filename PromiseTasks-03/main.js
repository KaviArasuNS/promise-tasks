// Programming Quotes API to display random Programming Quote
const programmingQuoteURL =
  "https://programming-quotes-api.herokuapp.com/quotes/random";

const proQuoteE1 = document.getElementsByClassName("porgramming-quote")[0];

// fetch a random quote and display it at the top of the page
fetch(programmingQuoteURL)
  .then((response) => response.json())
  .then((responseJson) => {
    proQuoteE1.innerText = `${responseJson.en} - ${responseJson.author}`;
  })
  .catch((error) => console.log(error));

// ISRO CUSTOMER SATELLITES API
const isroCustomerSatellites =
  "https://isro.vercel.app/api/customer_satellites";

const customer_satellites = document.getElementsByClassName(
  "customer-satellites"
)[0];

// fetch ISRO Customer Satellites Data

fetch(isroCustomerSatellites)
  .then((response) => response.json())
  .then((responseJson) => {
    console.log(responseJson);

    for (i = 0; i < 52; i++) {
      satFunction(responseJson);
    }
  })
  .catch((error) => console.log(error));

// Function to Create tables with Customer Satellites Data
const satFunction = (responseJson) => {
  const table = document.createElement("table");
  table.className = "table table-striped table-bordered table-dark";
  const thead = document.createElement("thead");
  const tr1 = document.createElement("tr");
  const th1 = document.createElement("th");
  th1.innerText = "Title";
  const th2 = document.createElement("th");
  th2.innerText = "Info";

  tr1.append(th1, th2);
  thead.append(tr1);
  table.append(thead);
  customer_satellites.append(table);

  let { id, country, launch_date, mass, launcher } =
    responseJson.customer_satellites[i];

  // Creating Table Elemnets
  const tbody = document.createElement("tbody");
  const tr2 = document.createElement("tr");
  const td1 = document.createElement("td");
  const td2 = document.createElement("td");
  td1.innerText = "ID";
  td2.innerText = id;
  tr2.append(td1, td2);
  tbody.append(tr2);
  table.append(tbody);

  const tr3 = document.createElement("tr");
  const td3 = document.createElement("td");
  const td4 = document.createElement("td");
  td3.innerText = "Country";
  td4.innerText = country;
  tr3.append(td3, td4);
  tbody.append(tr3);

  const tr4 = document.createElement("tr");
  const td5 = document.createElement("td");
  const td6 = document.createElement("td");
  td5.innerText = "Launch Date";
  td6.innerText = launch_date;
  tr4.append(td5, td6);
  tbody.append(tr4);

  const tr5 = document.createElement("tr");
  const td7 = document.createElement("td");
  const td8 = document.createElement("td");
  td7.innerText = "Mass";
  td8.innerText = mass;
  tr5.append(td7, td8);
  tbody.append(tr5);

  const tr6 = document.createElement("tr");
  const td9 = document.createElement("td");
  const td10 = document.createElement("td");
  td9.innerText = "Launcher";
  td10.innerText = launcher;
  tr6.append(td9, td10);
  tbody.append(tr6);
};
