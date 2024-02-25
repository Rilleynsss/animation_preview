const body = document.querySelector("body");
const container = document.querySelector(".container");
const headerLinks = document.querySelectorAll("#headerLink");

let idx = 0;

const scrollUp = (id) => {
  headerLinks[id + 1].classList.remove("active");
  addClassActive(id);
  document.querySelector(headerLinks[id].getAttribute("href")).scrollIntoView();
};

const scrollDown = (id) => {
  headerLinks[id - 1].classList.remove("active");
  addClassActive(id);
  document.querySelector(headerLinks[id].getAttribute("href")).scrollIntoView();
};

const addClassActive = (id) => {
  window.location.hash = headerLinks[id].getAttribute("href");
  let localHash = window.location.hash;
  localHash = headerLinks[id].getAttribute("href");
  if (localHash === headerLinks[id].getAttribute("href")) {
    headerLinks[id].classList.add("active");
  }
};

const singleScrollHandler = () => {
  body.addEventListener(
    "wheel",
    (e) => {
      const deltaY = e.deltaY;
      container.classList.remove("show");
      container.classList.add("hidden");
      setTimeout(() => {
        if (deltaY === 100) {
          idx + 2 <= headerLinks.length ? idx++ : "";
          scrollDown(idx);
        } else {
          idx === 0 ? "" : idx--;
          scrollUp(idx);
        }
        container.classList.remove("hidden");
        container.classList.add("show");
        singleScrollHandler();
      }, 1000);
    },
    { once: true }
  );
};

const firstLoad = () => {
  headerLinks.forEach((i, idBlock) => {
    if (window.location.hash == i.getAttribute("href")) {
      idx = idBlock;
    }
    if (
      i.classList == "active" &&
      window.location.hash != i.getAttribute("href")
    ) {
      i.classList.remove("active");
    }
  });
  addClassActive(idx);
  singleScrollHandler();
};

export default firstLoad;
