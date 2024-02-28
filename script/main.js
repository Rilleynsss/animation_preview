import { firstLoadPage } from "./scrollAnimation.js";
const moveContainer = document.querySelectorAll("[data-moveContainer]");
const moveElements = document.querySelectorAll("[data-move]");
const body = document.querySelector("body");
const rotateElements = document.querySelectorAll("[data-rotate]");
const rotateContainer = document.querySelectorAll("[data-rotateContainer]");

const types = {
  fullScreen: "FULL_SCREEN_ANIMATION",
  singleItem: "SINGLE_ITEM_ANIMATION",
};

const animation = (itemForListner, itemForAnimation, type, scope, options) => {
  let transformData = [];
  switch (type) {
    case types.fullScreen:
      itemForListner.addEventListener(
        "mousemove",
        (e) => {
          const cords = {
            X: -e.clientX / 2 + e.currentTarget.offsetX,
            Y: e.clientY / 2 - e.currentTarget.offsetY,
          };
          console.dir(e.currentTarget);

          if (options.move) {
            transformData[0] = `translateX(${cords.X / scope.X}px) translateY(${
              -cords.Y / scope.Y
            }px)`;
          }
          if (options.rotate) {
            transformData[1] = `rotateY(${
              180 + cords.X / scope.X
            }deg) rotateX(${cords.Y / scope.Y}deg)`;
          }
          if (options.shadow) {
          }
          itemForAnimation.setAttribute(
            "style",
            `transform:${transformData.join(" ")}`
          );
        },
        { once: true }
      );

      itemForListner.addEventListener("mouseleave", () => {
        transformData = [];
        itemForAnimation.setAttribute("style", transformData.join(" "));
      });
    case types.singleItem:
      itemForListner.addEventListener(
        "mouseenter",
        (e) => {
          e.currentTarget.addEventListener("mousemove", (e) => {
            const cords = {
              X: -e.currentTarget.clientWidth / 2 + e.offsetX,
              Y: e.currentTarget.clientHeight / 2 - e.offsetY,
            };
            if (options.move) {
              transformData[0] = `translateX(${
                cords.X / scope.X
              }px) translateY(${-cords.Y / scope.Y}px)`;
            }
            if (options.rotate) {
              transformData[1] = `rotateY(${
                180 + cords.X / scope.X
              }deg) rotateX(${cords.Y / scope.Y}deg)`;
            }
            if (options.shadow) {
            }
            itemForAnimation.setAttribute(
              "style",
              `transform:${transformData.join(" ")}`
            );
          });
        },
        { once: true }
      );
      itemForListner.addEventListener("mouseleave", () => {
        transformData = [];
        itemForAnimation.setAttribute("style", transformData.join(" "));
      });

      break;
  }
};
animation(
  rotateContainer[0],
  rotateElements[0],
  types.singleItem,
  {
    X: 30,
    Y: 30,
  },
  { move: true, rotate: true }
);
animation(
  moveContainer[0],
  moveElements[0],
  types.fullScreen,
  {
    X: 30,
    Y: 30,
  },
  { move: true }
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

firstLoadPage();
