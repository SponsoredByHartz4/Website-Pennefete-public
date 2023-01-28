let innerHeight = window.innerHeight;
innerHeight = innerHeight - 200;
let main = document.querySelector("main");
let isMobile = navigator.userAgent.toLowerCase().match(/mobile/i);

if (isMobile) {
  main.style.height = innerHeight + "px";
}
