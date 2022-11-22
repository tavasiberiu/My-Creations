import get from "./getElement.js";
import { hideLoading } from "./toggleLoading.js";
import displayError from "./displayError.js";

const displayIngredients = ({ drinks }) => {
  const section = get(".search-ingredients");
  const title = get(".title");
  if (!drinks) {
    displayError("sorry, no ingredients found");
    return;
  }
  const newIngredients = drinks
    .map((ingredient) => {
      const { strIngredient1: name } = ingredient;
      return `
    <div>
    <input name="checkbox" type="checkbox" class="checkbox">
    <label for="${name}">${name}</label>
    </div>`;
    })
    .join("");
  hideLoading();
  title.textContent = "";
  section.innerHTML = newIngredients;
  return section;
};

export default displayIngredients;
