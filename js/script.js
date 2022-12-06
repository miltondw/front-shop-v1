const EmailMenu = document.getElementById("email-menu");
const DeskMenu = document.getElementById("desk-menu");
const IconArrow = document.getElementById("icon-arrow");

EmailMenu.addEventListener("click", () => {
  DeskMenu.classList.toggle("translate");
  IconArrow.classList.toggle("rotate");
});
