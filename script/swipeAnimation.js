const body = document.querySelector("body");

export const swipeCard = () => {
  console.log("swipe card");
};

const createSrollEventListener = () => {
  body.addEventListener(
    "wheel",
    () => {
      const hash = window.location.hash;
      console.log(hash);
      createSrollEventListener();
    },
    { once: true }
  );
};

export const checkHashForAnimation = () => {
  createSrollEventListener();
};
