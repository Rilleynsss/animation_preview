import firstLoad from "./scrollAnimation.js";
import { transformAnimation, types } from "./transformAnimation.js";
const topContent = document.querySelector(".rotate-element");
const body = document.querySelector("body");
const imgBg = document.querySelector(".img_bg");
const textShadow = document.querySelectorAll("#textShadowAnim");

body.addEventListener("mousemove", (e) => {
  let cords = {
    X: -e.view.innerWidth / 2 + e.clientX,
    Y: e.view.innerHeight / 2 - e.clientY,
  };
  //   console.log(e);
  //   console.log(cords.Y);
  transformAnimation(topContent, types.rotate);
  transformAnimation(imgBg, types.move);
  //   imgBg.setAttribute(
  //     "style",
  //     `transform:translateX(${-cords.X / 100}px) translateY(${
  //       -(-cords.Y) / 100
  //     }px) `
  //   );
  textShadow.forEach((element) => {
    element.setAttribute(
      "style",
      `text-shadow:${-cords.X / 150}px ${cords.Y / 100}px 1px #000`
    );
  });
});

firstLoad();
