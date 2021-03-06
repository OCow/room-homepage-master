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

  document.getElementById("mmbtn").addEventListener("click", onClickMenuButton);

  document
    .getElementById("mm-backdrop")
    .addEventListener("click", onClickBackdrop);

  window.addEventListener("resize", onWindowResize);

  let main_1 = document.getElementsByClassName("main-1")[0];
  main_1.style.backgroundImage =
    main_1_backgrounds[main_1_backgrounds_currentIndex];
};

function onWindowResize(e) {
  let mobileMenuButton = document.getElementById("mmbtn");
  const style = getComputedStyle(mobileMenuButton);
  console.log(style.display);

  //in scss, there is a media query which changes display of this element
  //(nav > ul > li.mobile-menu-button {)
  //Therefore, we rely on the value of that element in order to determine
  //that the mobile nav menu should be closed (if open). This is all this is
  //about. The actual changing of the menu is done in scss, here we are only
  //dealing with an openend mobile nav menu while the width of the viewport
  //is being increased
  if (style.display === "none") {
    //ok, looks like we are in desktop mode. Now check if the mobile menu
    //is being shown currently. If yes, deactivate it
    if (mobileNavMenuVisible()) {
      onClickMenuButton();
    }
  }
}

function mobileNavMenuVisible() {
  if (
    document.getElementById("my-navbar").classList.contains("nav-view-clicked")
  ) {
    return true;
  } else {
    return false;
  }
}

let showMobileMenu = false;
function onClickMenuButton(e) {
  let navbar = document.getElementById("my-navbar");
  let img = document.getElementById("mm-img");
  let backdrop = document.getElementById("mm-backdrop");

  if (mobileNavMenuVisible()) {
    //looks like we are showing the clicked nav view right now
    //switch back to showing burger menu
    img.src = "./images/icon-hamburger.svg";
    navbar.classList.add("nav-view-default");
    navbar.classList.remove("nav-view-clicked");
    backdrop.classList.add("no-display");
  } else {
    //switch to showing the mobile menu:
    //- switch img from burger to cross
    //- change nav class so that links are being shown
    //- show backdrop
    img.src = "./images/icon-close.svg";
    navbar.classList.remove("nav-view-default");
    navbar.classList.add("nav-view-clicked");
    backdrop.classList.remove("no-display");
  }
}

function onClickBackdrop() {
  onClickMenuButton();
}

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
