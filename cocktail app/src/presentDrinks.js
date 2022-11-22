import fetchDrinks from "./fetchDrinks.js";
import displayDrinks from "./displayDrinks.js";
import setDrink from "./setDrink.js";
import displayError from "./displayError.js";

const showDrinks = async (url) => {
  //fetch drinks
  const data = await fetchDrinks(url);
  if (!data) {
    displayError("Sorry, no drink found");
    return;
  }

  //display drinks
  const section = await displayDrinks(data);
  if (section) {
    setDrink(section);
  }
};

export default showDrinks;
