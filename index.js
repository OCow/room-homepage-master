// alert("JavaScript working...");

let main_1_backgrounds = [
  "url('./images/mobile-image-hero-1.jpg')",
  "url('./images/mobile-image-hero-2.jpg')",
  "url('./images/mobile-image-hero-3.jpg')",
];
let main_1_backgrounds_currentIndex = 0;

window.onload = () => {
  console.log("Now doing stuff after doc has loaded");

  document
    .getElementById("navigation-button-left-mobile")
    .addEventListener("click", onClickBtnLeft);
  document
    .getElementById("navigation-button-right-mobile")
    .addEventListener("click", onClickBtnRight);

  document
    .getElementById("navigation-button-left-desktop")
    .addEventListener("click", onClickBtnLeft);

  document
    .getElementById("navigation-button-right-desktop")
    .addEventListener("click", onClickBtnRight);

  let main_1 = document.getElementsByClassName("main-1")[0];
  main_1.style.backgroundImage =
    main_1_backgrounds[main_1_backgrounds_currentIndex];
};

function onClickBtnLeft(e) {
  console.log("onClickBtnLeft() called...");
  changeMain1BackgroundBackward();
  changeMain2PageBackward();
}

function onClickBtnRight(e) {
  console.log("onClickBtnRight() called...");
  changeMain1BackgroundForward();
}

function changeMain1BackgroundBackward() {
  let main_1 = document.getElementsByClassName("main-1")[0];
  main_1_backgrounds_currentIndex--;
  main_1_backgrounds_currentIndex === -1
    ? (main_1_backgrounds_currentIndex = 2)
    : null;
  main_1.style.backgroundImage =
    main_1_backgrounds[main_1_backgrounds_currentIndex];
}

function changeMain1BackgroundForward() {
  let main_1 = document.getElementsByClassName("main-1")[0];
  main_1_backgrounds_currentIndex++;
  main_1_backgrounds_currentIndex === 3
    ? (main_1_backgrounds_currentIndex = 0)
    : null;
  main_1.style.backgroundImage =
    main_1_backgrounds[main_1_backgrounds_currentIndex];
}

function changeMain2PageBackward() {}
