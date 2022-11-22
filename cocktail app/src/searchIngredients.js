import presentIngredients from "./presentIngredients.js";
import presentDrinks from "./presentDrinks.js";
import get from "./getElement.js";

const URL = "https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list";
const filterURL = "https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=";

window.addEventListener("DOMContentLoaded", () => {
  presentIngredients(URL);
});

const searchCocktails = get("#searchCocktails");
searchCocktails.onclick = function () {
  const checkValues = document.getElementsByName("checkbox");
  let filters = new Array();
  for (var i = 0; i < checkValues.length; i++) {
    if (checkValues[i].checked == true) {
      filters.push(checkValues[i].nextElementSibling.textContent);
    }
  }
  presentDrinks(`${filterURL}${filters} `);

  // console.log(`${filterURL}${filters}`);
};
