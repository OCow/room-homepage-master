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

  //the order matters! First change background, then change page
  //Change page relies on the global index variable which is
  //set by changeMain1Background...()
  changeMain1BackgroundBackward();
  changeMain2Page();
}

function onClickBtnRight(e) {
  console.log("onClickBtnRight() called...");
  changeMain1BackgroundForward();
  changeMain2Page();
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

/**
 * This function relies on main_1_backgrounds_currentIndex being the actual
 * index for displaying the appropriate page. Therefore, the order in which
 * changeMain1Background...() and changeMain2Page...() are invoked matters!
 */
function changeMain2Page() {
  let page_1 = document.getElementsByClassName("page-1")[0];
  let page_2 = document.getElementsByClassName("page-2")[0];
  let page_3 = document.getElementsByClassName("page-3")[0];

  page_1.classList.add("no-display");
  page_2.classList.add("no-display");
  page_3.classList.add("no-display");

  switch (main_1_backgrounds_currentIndex) {
    case 0:
      {
        page_1.classList.remove("no-display");
      }
      break;

    case 1:
      {
        page_2.classList.remove("no-display");
      }
      break;

    case 2:
      {
        page_3.classList.remove("no-display");
      }
      break;

    default:
      console.log(
        `main_1_backgrounds_currentIndex=${main_1_backgrounds_currentIndex} - invalid`
      );
  }
}
