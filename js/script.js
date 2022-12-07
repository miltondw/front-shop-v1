const EmailMenu = document.getElementById("email-menu");
const DeskMenu = document.getElementById("desk-menu");
const MobilMenu = document.getElementById("mobil-menu");
const IconArrow = document.getElementById("icon-arrow");
const IconBurger = document.getElementById("icon-burger");
const iconClose = document.querySelector(".icon-close");
const ShoppingCart = document.querySelector(".shopping-cart");
const NavbarIconCart = document.querySelector(".navbar-icon__cart");

EmailMenu.addEventListener("click", () => {
  DeskMenu.classList.toggle("translate");
  IconArrow.classList.toggle("rotate");
  if (DeskMenu.classList.contains("translate")) {
    ShoppingCart.classList.remove("translate");
  }
});

IconBurger.addEventListener("click", () => {
  MobilMenu.classList.toggle("translate");
  if (MobilMenu.classList.contains("translate")) {
    ShoppingCart.classList.remove("translate");
  }
});

iconClose.addEventListener("click", () => {
  MobilMenu.classList.remove("translate");
});

NavbarIconCart.addEventListener("click", () => {
  if (MobilMenu.classList.contains("translate")) {
    MobilMenu.classList.remove("translate");
  }
  if (DeskMenu.classList.contains("translate")) {
    DeskMenu.classList.remove("translate");
    IconArrow.classList.remove("rotate");
  }
  ShoppingCart.classList.toggle("translate");
});
