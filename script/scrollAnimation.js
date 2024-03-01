import { update } from "./main.js";

const headerLinks = document.querySelectorAll("#headerLink");
const body = document.querySelector("body");

const getBlockWithClassName = (item) => {
  return document.querySelector(`.${item.getAttribute("href").slice(1)}`);
};
const getIdPage = (list) => {
  let localHash = window.location.hash;
  let currentId;
  list.forEach((item, idx) => {
    if (localHash === item.getAttribute("href")) {
      currentId = idx;
    }
  });

  return currentId;
};

const changeActiveSlideByScroll = (type) => {
  let localId = getIdPage(headerLinks);

  switch (type) {
    case "next":
      localId += 1;
      break;
    case "prev":
      localId -= 1;
      break;
  }
  if (localId <= 0) {
    localId = 0;
  } else if (localId == headerLinks.length) {
    localId = headerLinks.length - 1;
  }
  document
    .querySelector(`.${window.location.hash.slice(1)}`)
    .classList.add("hide");
  document
    .querySelector(`.${window.location.hash.slice(1)}`)
    .classList.remove("show");
  setTimeout(() => {
    headerLinks.forEach((item) => {
      if (
        item.getAttribute("href") != headerLinks[localId].getAttribute("href")
      ) {
        getBlockWithClassName(item).classList.add("hidden");
        getBlockWithClassName(item).classList.remove("show");
      } else {
        update();
        getBlockWithClassName(item).classList.remove("hidden");
        getBlockWithClassName(item).classList.add("show");
      }
    });
  }, 1000);
  window.location.hash = headerLinks[localId].getAttribute("href");
};

const changeActiveSlideByClick = (e) => {
  document
    .querySelector(`.${window.location.hash.slice(1)}`)
    .classList.add("hide");
  document
    .querySelector(`.${window.location.hash.slice(1)}`)
    .classList.remove("show");
  setTimeout(() => {
    headerLinks.forEach((item) => {
      if (item.getAttribute("href") != e.target.getAttribute("href")) {
        getBlockWithClassName(item).classList.add("hidden");
        getBlockWithClassName(item).classList.remove("show");
        getBlockWithClassName(item).classList.remove("hide");
      } else {
        getBlockWithClassName(item).classList.remove("hidden");
        getBlockWithClassName(item).classList.add("show");
        getBlockWithClassName(item).classList.remove("hide");
      }
    });
  }, 1000);
};

const getScrollDelta = () => {
  body.addEventListener(
    "wheel",
    (e) => {
      const deltaY = e.deltaY;

      if (deltaY === 100) {
        changeActiveSlideByScroll("next");
      } else {
        changeActiveSlideByScroll("prev");
      }
      setTimeout(() => {
        getScrollDelta();
      }, 2000);
    },
    { once: true }
  );
};

export const firstLoadPage = () => {
  headerLinks.forEach((item) => {
    item.addEventListener("click", (e) => {
      changeActiveSlideByClick(e);
    });
  });
  headerLinks.forEach((item) => {
    if (item.getAttribute("href") != window.location.hash) {
      getBlockWithClassName(item).classList.add("hidden");
      getBlockWithClassName(item).classList.remove("show");
      getBlockWithClassName(item).classList.remove("hide");
    } else {
      getBlockWithClassName(item).classList.remove("hidden");
      getBlockWithClassName(item).classList.add("show");
      getBlockWithClassName(item).classList.remove("hide");
    }
  });
  getScrollDelta();
};
