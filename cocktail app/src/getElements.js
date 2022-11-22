const getElements = (selection) => {
  const elements = document.querySelectorAll(selection);
  if (elements) return elements;
  throw new Error("no elements selected");
};

export default getElements;
