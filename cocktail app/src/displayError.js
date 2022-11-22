import get from "./getElement.js";
import { hideLoading } from "./toggleLoading.js";

const displayError = (message) => {
  const section = get(".section-center");
  const title = get(".title");
  hideLoading();
  title.textContent = message;
  section.innerHTML = null;
};

export default displayError;
