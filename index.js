function calculate() {
  let timeEl = document.getElementById("time-el");
  let halflifeEl = document.getElementById("halflife-el");
  let halflife2El = document.getElementById("halflife2-el");
  let drinksEl = document.getElementById("drinks").value;
  let etgPerDrink = parseInt(drinksEl) * 50000;
  let arr = [];
  let i = 0;
  while (etgPerDrink > 300) {
    etgPerDrink /= 2;
    i++;
    arr.push(i);
  }
  timeEl.textContent =
    arr.length * 3 + " - " + arr.length * 3.5 + " hours until clean!";
  halflifeEl.textContent = "# half lives:  " + arr.length;
  halflife2El.textContent =
    " Half-life (hrs): 3 (normal liver) - 3.5 (you've drank alot for a while now)";
}

function reset() {
  let timeEl = document.getElementById("time-el");
  let halflifeEl = document.getElementById("halflife-el");
  let halflife2El = document.getElementById("halflife2-el");
  let drinksEl = document.getElementById("drinks").value = "";
  timeEl.textContent = "";
  halflifeEl.textContent = "";
  halflife2El.textContent = "";
}
