import fetchIngredients from "./fetchIngredients.js";
import displayIngredients from "./displayIngredients.js";
//import setIngredients from "./setIngredients.js";

const showIngredients = async (url) => {
  //fetch Ingredients
  const data = await fetchIngredients(url);

  //display Ingredients
  const section = await displayIngredients(data);
  // if(section){
  //     setIngredients(section);
  // }
};

export default showIngredients;
