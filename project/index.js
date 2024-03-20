window.onload = function () {
  const viewport = document.querySelector("meta[name=viewport]");
  const body = document.querySelector("body");
  const abEnding = document.querySelector(".ab-ending");

  if (
    navigator.userAgent.match(/Android/i) ||
    navigator.userAgent.match(/webOS/i) ||
    navigator.userAgent.match(/iPhone/i) ||
    navigator.userAgent.match(/iPad/i) ||
    navigator.userAgent.match(/iPod/i) ||
    navigator.userAgent.match(/BlackBerry/i) ||
    navigator.userAgent.match(/Windows Phone/i)
  ) {
    viewport.setAttribute("content", "width=320, user-scalable=0");
    body.classList.add("device-mobile-optimized");
    abEnding.innerHTML = "&nbsp; &nbsp; &nbsp; ab";

    moveEl("#app-02-20", ".app-move", "#app-02-10");
    moveEl("#footer-01-14", ".footer-01", "#footer-01-13");
    moveEl("#header-01", ".SITE-HEADER-gridContainer", "#header-00");
    moveEl("#header-02", ".SITE-HEADER-gridContainer", "#header-00");
    moveEl("#header-03", ".SITE-HEADER-gridContainer", "#header-00");
    deleteElement("#header-00");
    menuToggle();
  } else {
    viewport.setAttribute("content", "width=device-width, initial-scale=1");

    document.addEventListener("scroll", function () {
      const top = document.querySelector("#intro");
      const app = document.querySelector("#app");
      const story = document.querySelector("#story");
      const topTag = document.querySelector(".top-link");
      const appTag = document.querySelector(".app-link");
      const storyTag = document.querySelector(".story-link");
      const elements = [top, app, story];
      const links = [topTag, appTag, storyTag];

      elements.forEach((el, i) => {
        isInViewport(el)
          ? links[i].setAttribute("data-state", "selected")
          : links[i].removeAttribute("data-state", "selected");
      });
    });
  }
};

function moveEl(elToMove, parent, sblEl) {
  const elementToMove = document.querySelector(elToMove);
  const newParentElement = document.querySelector(parent);
  const siblingElement = newParentElement.querySelector(sblEl);
  newParentElement.insertBefore(elementToMove, siblingElement);
}

function deleteElement(el) {
  const elementToDelete = document.querySelector(el);
  elementToDelete.remove();
}

function isInViewport(el) {
  var top = el.offsetTop;
  var left = el.offsetLeft;
  var width = el.offsetWidth;
  var height = el.offsetHeight;

  while (el.offsetParent) {
    el = el.offsetParent;
    top += el.offsetTop;
    left += el.offsetLeft;
  }

  return (
    top < window.pageYOffset + window.innerHeight &&
    left < window.pageXOffset + window.innerWidth &&
    top + height > window.pageYOffset &&
    left + width > window.pageXOffset
  );
}

function menuToggle() {
  const menuButton = document.querySelector("#header-03");
  const listButton = document.querySelectorAll(".list-word");
  const menuLines = document.querySelector(".menu-toggle-02");
  const listContainer = document.querySelector(".list-container");
  const menu = document.querySelector("#header-02");
  const body = document.querySelector("body");

  menuButton.addEventListener("click", () => {
    toggle();
  });
  listButton.forEach((el) => {
    el.addEventListener("click", () => {
      toggle();
    });
  });

  function toggle() {
    if (menu.hasAttribute("closed")) {
      menuLines.setAttribute("opening", "");
      menuLines.addEventListener(
        "animationend",
        () => {
          menuLines.removeAttribute("opening");
          menuLines.setAttribute("opened", "");
        },
        { once: true }
      );
      body.classList.add("not-scrollable");
      menu.removeAttribute("closed");
    } else {
      menu.setAttribute("closing", "");
      menuLines.setAttribute("closing", "");
      listContainer.setAttribute("closing", "");
      body.classList.remove("not-scrollable");
      menu.addEventListener(
        "animationend",
        () => {
          menu.removeAttribute("closing");
          menuLines.removeAttribute("closing");
          listContainer.removeAttribute("closing");
          menu.setAttribute("closed", "");
        },
        { once: true }
      );
      menuLines.removeAttribute("opened");
    }
  }
}
