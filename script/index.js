import firstLoad from "./scrollAnimation.js";
import { checkHashForAnimation } from "./swipeAnimation.js";
import { transformAnimation, types } from "./transformAnimation.js";
const rotateAndShadowElement = document.querySelectorAll(
  "#rotateAndShadowElement"
);
const body = document.querySelector("body");
const moveElement = document.querySelector("#moveElement");

const swipeElement = document.querySelector("[data-swipe]");
if (window.location.hash == "#session") {
  console.log("session");
}

body.addEventListener("mousemove", (event) => {
  rotateAndShadowElement.forEach((element) => {
    transformAnimation(event, element, types.rotateAndShadow);
  });
  transformAnimation(event, moveElement, types.move);
});

firstLoad();
checkHashForAnimation();
