import { applyRippleEffect } from "./effects/ripple-effect.js";

const header = document.querySelector("header");
const headerHeight = header.clientHeight;

const hamburgetButton = document.querySelector(".header__nav-btn");
const bars = Array.from(hamburgetButton.children);

const nav = document.querySelector(".nav");
const navList = nav.children[0];
const links = Array.from(navList.children);

const mobileLoginBtn = document.querySelector(
  ".header--desktop__bottom__login-btn"
);
const desktopLoginBtn = document.querySelector(".header__login-btn");
const loginButtons = [mobileLoginBtn, desktopLoginBtn];

var isNavOpen = false;
var lastScroll = 0;

export const handleNav = () => {
  window.addEventListener("scroll", (e) => {
    const currentScroll = window.pageYOffset;

    if (currentScroll <= lastScroll) header.style.transform = "translateY(0px)";
    else if (!isNavOpen)
      header.style.transform = "translateY(" + -1 * headerHeight + "px)";
    lastScroll = currentScroll;
  });

  hamburgetButton.addEventListener("click", (e) => {
    if (isNavOpen) {
      nav.style.transform = "translateY(-100%)";

      links.forEach((link) => {
        link.style.opacity = 0;
      });

      bars[0].style.transform = "translate(-50%, -50%) translateY(-10px)";
      bars[0].style.opacity = 1;

      bars[1].style.transform = "translate(-50%, -50%)";
      bars[2].style.transform = "translate(-50%, -50%)";

      bars[3].style.transform = "translate(-50%, -50%) translateY(10px)";
      bars[3].style.opacity = 1;
    } else {
      nav.style.transform = "translateY(100%)";

      links.forEach((link) => {
        link.style.opacity = 1;
      });

      bars[0].style.transform = "translate(-50%, -50%) translateY(-20px)";
      bars[0].style.opacity = 0;

      bars[1].style.transform = "translate(-50%, -50%) rotate(45deg)";
      bars[2].style.transform = "translate(-50%, -50%) rotate(-45deg)";

      bars[3].style.transform = "translate(-50%, -50%) translateY(20px)";
      bars[3].style.opacity = 0;
    }

    isNavOpen = !isNavOpen;
  });

  loginButtons.map((button) => {
    applyRippleEffect(button);
  });
};
