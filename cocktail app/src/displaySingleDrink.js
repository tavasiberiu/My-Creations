import { hideLoading } from "./toggleLoading.js";
import get from "./getElement.js";
const displayDrink = (data) => {
  hideLoading();

  const drink = data.drinks[0];
  const { strDrinkThumb: image, strDrink: name, strInstructions: desc } = drink;
  const indexes = Array.from(Array(15).keys());

  const img = get(".drink-img");
  const drinkName = get(".drink-name");
  const description = get(".drink-desc");
  const ingredients = get(".drink-ingredients");
  img.src = image;
  document.title = name;
  drinkName.textContent = name;
  description.textContent = desc;
  ingredients.innerHTML = indexes
    .map((item) => {
      const ingredientKey = "strIngredient" + (item + 1);
      const ingredient = drink[ingredientKey];

      const measureKey = "strMeasure" + (item + 1);
      const measure = drink[measureKey];

      if (!ingredient) return;
      if (measure) return `<li>${ingredient} (${measure})</li>`;
      else return `<li>${ingredient}</li>`;
    })
    .join("");
};
export default displayDrink;
