let menuBtn = document.querySelector(".menu-btn");

let iframe = parent.document.getElementById("#headerIframe");
let menuOpen = false;

function toggleMenu() {
  menuBtn.classList.toggle("button-open");

  if (menuOpen) {
    iframe.style.height = "100px";
    menuOpen = false;
  } else {
    iframe.style.height = "100vh";
    menuOpen = true;
  }
}
