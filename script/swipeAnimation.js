export const showCard = (item) => {
  item.classList.remove("hidden");
  item.classList.add("full-rotate");
  item.classList.add("dFlex");
  setTimeout(() => {
    item.classList.remove("full-rotate");
  }, 1000);
};
export const hideCard = (item) => {
  item.classList.remove("dFlex");
  item.classList.add("hidden");
};
