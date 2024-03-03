export const types = {
  fullScreen: "FULL_SCREEN_ANIMATION",
  singleItem: "SINGLE_ITEM_ANIMATION",
};

const transformFullScreen = (scope, options, itemForAnimation, e) => {
  const cords = {
    X: -e.currentTarget.clientWidth / 2 + e.pageX,
    Y: e.currentTarget.clientHeight / 2 - e.pageY,
  };
  let transformData = [];
  if (options.move) {
    if (options.invert) {
      transformData[0] = `translateX(${-cords.X / scope.X}px) translateY(${
        cords.Y / scope.Y
      }px)`;
    } else {
      transformData[0] = `translateX(${cords.X / scope.X}px) translateY(${
        -cords.Y / scope.Y
      }px)`;
    }
  }
  if (options.rotate) {
    if (options.halfRotate) {
      transformData[1] = `rotateY(${180 - cords.X / scope.X}deg) rotateX(${
        -cords.Y / scope.Y
      }deg)`;
    } else {
      transformData[1] = `rotateY(${cords.X / scope.X}deg) rotateX(${
        cords.Y / scope.Y
      }deg)`;
    }
  }
  if (options.shadow) {
  }
  itemForAnimation.setAttribute(
    "style",
    `transform:${transformData.join(" ")}`
  );
};
const transformSingleItem = (scope, options, itemForAnimation, e) => {
  let transformData = [];

  const cords = {
    X: -e.currentTarget.clientWidth / 2 + e.offsetX,
    Y: e.currentTarget.clientHeight / 2 - e.offsetY,
  };
  if (options.move) {
    if (options.invert) {
      transformData[0] = `translateY(${cords.Y / scope.Y}px) translateX(${
        cords.X / scope.X
      }px)`;
    } else {
      transformData[0] = `translateY(${cords.Y / scope.Y}px) translateX(${
        -cords.X / scope.X
      }px)`;
    }
  }
  if (options.rotate) {
    if (options.halfRotate) {
      transformData[1] = `rotateY(${180 - cords.X / scope.X}deg) rotateX(${
        -cords.Y / scope.Y
      }deg)`;
    } else {
      transformData[1] = `rotateY(${cords.X / scope.X}deg) rotateX(${
        cords.Y / scope.Y
      }deg)`;
    }
  }
  if (options.shadow) {
  }
  itemForAnimation.setAttribute(
    "style",
    `transform:${transformData.join(" ")}`
  );
};

export const animation = (
  itemForListner,
  itemForAnimation,
  type,
  scope,
  options
) => {
  let bindedFullScreenAnimation = transformFullScreen.bind(
    null,
    scope,
    options,
    itemForAnimation
  );
  let bindedSingleItemAnimation = transformSingleItem.bind(
    null,
    scope,
    options,
    itemForAnimation
  );
  switch (type) {
    case types.fullScreen:
      itemForListner.addEventListener("mousemove", bindedFullScreenAnimation);
      itemForListner.addEventListener(
        "wheel",
        () => {
          itemForListner.removeEventListener(
            "mousemove",
            bindedFullScreenAnimation
          );
        },
        { once: true }
      );
      break;
    case types.singleItem:
      itemForListner.addEventListener("mouseenter", () => {
        itemForListner.addEventListener("mousemove", bindedSingleItemAnimation);
      });
      itemForListner.addEventListener("mouseleave", () => {
        itemForAnimation.removeAttribute("style");
        itemForListner.removeEventListener(
          "mousemove",
          bindedSingleItemAnimation
        );
      });
      break;
  }
};
