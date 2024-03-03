import { firstLoadPage } from "./scrollAnimation.js";
import { hideCard, showCard } from "./swipeAnimation.js";
import { animation, types } from "./transformAnimations.js";
const body = document.querySelector("body");
const moveContainer = document.querySelectorAll("[data-moveContainer]");
const moveElements = document.querySelectorAll("[data-move]");
const rotateElements = document.querySelectorAll("[data-rotate]");
const rotateContainer = document.querySelectorAll("[data-rotateContainer]");
const roundAbout = document.querySelectorAll("[data-roundabout]");
const roundAboutContainer = document.querySelector(
  "[data-roundaboutContainer]"
);
const headerlinks = document.querySelectorAll("#headerLink");

export const update = () => {
  const hash = window.location.hash;
  headerlinks.forEach((element) => {
    if (element.getAttribute("href") != hash) {
      if (element.classList == "active") {
        element.classList.remove("active");
      }
    } else {
      element.classList.add("active");
    }
  });
  switch (hash) {
    case "#main":
      headerlinks[0].classList.add("active");
      animation(
        moveContainer[0],
        moveElements[0],
        types.fullScreen,
        {
          X: 100,
          Y: 90,
        },
        { move: true, invert: true }
      );
      animation(
        moveContainer[0],
        moveElements[1],
        types.fullScreen,
        {
          X: 60,
          Y: 40,
        },
        { move: true }
      );
      rotateElements.forEach((element) => {
        hideCard(element);
      });
      break;
    case "#session":
      console.log("session");

      headerlinks[1].classList.add("active");

      rotateElements.forEach((element, idx) => {
        setTimeout(() => {
          showCard(element);
        }, 500 + (idx + 1) * 600);
      });

      animation(
        rotateContainer[0],
        rotateElements[0],
        types.singleItem,
        {
          X: 30,
          Y: 30,
        },
        { move: true, rotate: true, halfRotate: false }
      );
      animation(
        rotateContainer[1],
        rotateElements[1],
        types.singleItem,
        {
          X: 30,
          Y: 30,
        },
        { move: true, rotate: true, invert: true, halfRotate: true }
      );

      break;
    case "#feedback":
      animation(
        moveContainer[1],
        moveElements[3],
        types.fullScreen,
        {
          X: 70,
          Y: 50,
        },
        { move: true, rotate: true, invert: true }
      );
      let idx = 0;
      let scope = 37.5;
      const intervalRound = setInterval(() => {
        roundAbout[idx].classList.add("active");
        if (idx > 0) {
          roundAbout[idx - 1].classList.remove("active");
        }
        if (idx == 0) {
          roundAbout[roundAbout.length - 1].classList.remove("active");
        }
        roundAboutContainer.setAttribute(
          "style",
          `transform:translateX(${scope}%)`
        );
        idx += 1;

        scope -= 25;
        if (scope < -37.5) {
          scope = 37.5;
          idx = 0;
        }
      }, 3000);
      body.addEventListener(
        "wheel",
        () => {
          roundAbout.forEach((element) => {
            if (element.classList[1] == "active") {
              element.classList.remove("active");
            }
          });
          roundAboutContainer.removeAttribute("style");
          clearInterval(intervalRound);
        },
        { once: true }
      );
      rotateElements.forEach((element) => {
        hideCard(element);
      });
    case "#about":
  }
};
body.addEventListener("click", () => {});
console.log(window.location);
window.location.replace(`${window.location.href}#main`);
update();
firstLoadPage();
