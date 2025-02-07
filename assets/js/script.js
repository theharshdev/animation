const animationToTop = document.querySelectorAll(".animation-to-top");
const animationToleft = document.querySelectorAll(".animation-to-left");

function animationToTopFnc() {
  animationToTop.forEach((elm) => {
    const rect = elm.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      elm.classList.add("translate-y-[0]", "opacity-100");
      elm.classList.remove("translate-y-[200px]", "opacity-0");
      elm.style.transition = "1.3s";
    } else {
      elm.classList.add("translate-y-[200px]", "opacity-0");
      elm.classList.remove("translate-y-[0]", "opacity-100");
      elm.style.transition = "0";
    }
  });
}

window.addEventListener("scroll", animationToTopFnc);
window.addEventListener("load", animationToTopFnc);

function animationToLeftFnc() {
  animationToleft.forEach((elm) => {
    const rect = elm.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      elm.classList.add("translate-x-[0]", "opacity-100");
      elm.classList.remove("translate-x-[200px]", "opacity-0");
      elm.style.transition = "1.3s";
    } else {
      elm.classList.add("translate-x-[200px]", "opacity-0");
      elm.classList.remove("translate-x-[0]", "opacity-100");
      elm.style.transition = "0";
    }
  });
}

window.addEventListener("scroll", animationToLeftFnc);
window.addEventListener("load", animationToLeftFnc);
