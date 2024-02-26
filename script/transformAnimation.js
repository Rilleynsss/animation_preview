export const types = {
  shadow: "SHADOW_TRANSFORM",
  rotate: "ROTATE_TRANSFORM",
  move: "TRANSLATE_TRANSFORM",
  moveAndRotate: "MOVE_AND_ROTATE_TRANSFORM",
  moveAndShadow: "MOVE_AND_SHADOW_TRANSFORM",
  rotateAndShadow: "ROTATE_AND_SHADOW_TRANSFORM",
  allTransform: "ALL_TRANSFORM",
};

export const transformAnimation = (event, element, type) => {
  const cords = {
    X: -event.view.innerWidth / 2 + event.clientX,
    Y: event.view.innerHeight / 2 - event.clientY,
  };

  switch (type) {
    case types.move:
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
    case types.moveAndRotate:
      element.setAttribute(
        "style",
        `transform:translateX(${-cords.X / 100}px) translateY(${
          -(-cords.Y) / 100
        }px) rotateY(${cords.X / 100}deg) rotateX(${cords.Y / 50}deg) `
      );
      break;
    case types.moveAndShadow:
      element.setAttribute(
        "style",
        `transform:translateX(${-cords.X / 100}px) translateY(${
          -(-cords.Y) / 100
        }px);text-shadow:${-cords.X / 150}px ${cords.Y / 100}px 1px #000`
      );
      break;
    case types.rotateAndShadow:
      element.setAttribute(
        "style",
        `transform:rotateY(${cords.X / 100}deg) rotateX(${
          cords.Y / 50
        }deg); text-shadow:${-cords.X / 150}px ${cords.Y / 100}px 1px #000`
      );
      break;
    case types.allTransform:
      element.setAttribute(
        "style",
        `transform:translateX(${-cords.X / 100}px) translateY(${
          -(-cords.Y) / 100
        }px) rotateY(${cords.X / 100}deg) rotateX(${
          cords.Y / 50
        }deg);text-shadow:${-cords.X / 150}px ${cords.Y / 100}px 1px #000 `
      );
      break;
  }
};
