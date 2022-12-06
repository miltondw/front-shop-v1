const EmailMenu = document.getElementById("email-menu");
const DeskMenu = document.getElementById("desk-menu");
const MobilMenu = document.getElementById("mobil-menu");
const IconArrow = document.getElementById("icon-arrow");
const IconBurger = document.getElementById("icon-burger");
const iconClose = document.querySelector(".icon-close");

EmailMenu.addEventListener("click", () => {
  DeskMenu.classList.toggle("translate");
  IconArrow.classList.toggle("rotate");
});
IconBurger.addEventListener("click", () => {
  MobilMenu.classList.toggle("translate");
});
iconClose.addEventListener("click", () => {
  MobilMenu.classList.remove("translate");
});
