const body = document.querySelector("body");

export const types = {
  shadow: "SHADOW_TEXT_TRANSFORM",
  rotate: "ROTATE_TEXT_TRANSFORM",
  move: "TRANSLATE_TEXT_TRANSFORM",
};

export const transformAnimation = (element, type) => {
  body.addEventListener("mousemove", (e) => {
    const cords = {
      X: -e.view.innerWidth / 2 + e.clientX,
      Y: e.view.innerHeight / 2 - e.clientY,
    };
    switch (type) {
      case types.move:
        console.log("move");
        element.setAttribute(
          "style",
          `transform:translateX(${-cords.X / 100}px) translateY(${
            -(-cords.Y) / 100
          }px) `
        );
        break;
      case types.rotate:
        element.setAttribute(
          "style",
          `transform:rotateY(${cords.X / 100}deg) rotateX(${cords.Y / 50}deg);`
        );
        break;
      case types.shadow:
        element.setAttribute(
          "style",
          `text-shadow:${-cords.X / 150}px ${cords.Y / 100}px 1px #000`
        );
        break;
    }
  });
};
