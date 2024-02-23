const body = document.querySelector("body");
const container = document.querySelector(".container");
const headerLinks = document.querySelectorAll("#headerLink");
let idx = 0;

function scrollUp(id) {
  if (idx > 0) {
    idx--;
  } else {
    idx = 0;
  }
  document.querySelector(`${id}`).scrollIntoView();

  console.log(id);
}
function scrollDown(id) {
  if (idx + 1 < headerLinks.length) {
    idx++;
  }
  document.querySelector(`${id}`).scrollIntoView();

  console.log(id);
}
document.addEventListener("wheel", (e) => {
  let id = headerLinks[idx].getAttribute("href");
  container.classList.remove("show");
  container.classList.add("hidden");
  if (e.deltaY == 100) {
    scrollDown(id);
  } else {
    scrollUp(id);
  }
  setTimeout(() => {
    container.classList.remove("hidden");
    container.classList.add("show");
  }, 1000);
});
