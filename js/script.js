const EmailMenu = document.getElementById("email-menu");
const DeskMenu = document.getElementById("desk-menu");
const MobilMenu = document.getElementById("mobil-menu");
const IconArrow = document.getElementById("icon-arrow");
const IconBurger = document.getElementById("icon-burger");
const iconClose = document.querySelector(".icon-close");
const ShoppingCart = document.querySelector(".shopping-cart");
const NavbarIconCart = document.querySelector(".navbar-icon__cart");
const IconCloseDetail = document.querySelector(".detail-product__close");
const DetailContent = document.querySelector(".detail-content");

EmailMenu.addEventListener("click", toggleMenuDesk);
IconBurger.addEventListener("click", toggleMenuMobil);
iconClose.addEventListener("click", () => {
  MobilMenu.classList.remove("translate");
});
IconCloseDetail.addEventListener("click", () => {
  DetailContent.classList.remove("scale");
});
NavbarIconCart.addEventListener("click", toggleShoppingCar);

function toggleMenuDesk() {
  DeskMenu.classList.toggle("translate");
  IconArrow.classList.toggle("rotate");
  DetailContent.classList.remove("scale");

  if (DeskMenu.classList.contains("translate")) {
    ShoppingCart.classList.remove("translate");
  }
}
function toggleMenuMobil() {
  MobilMenu.classList.toggle("translate");
  DetailContent.classList.remove("scale");
  if (MobilMenu.classList.contains("translate")) {
    ShoppingCart.classList.remove("translate");
  }
}
function toggleShoppingCar() {
  DetailContent.classList.remove("scale");

  if (MobilMenu.classList.contains("translate")) {
    MobilMenu.classList.remove("translate");
  }
  if (DeskMenu.classList.contains("translate")) {
    DeskMenu.classList.remove("translate");
    IconArrow.classList.remove("rotate");
  }
  ShoppingCart.classList.toggle("translate");
}

const CardProducts = document.getElementById("card-products");
const ProductList = [
  {
    image:
      "https://cdn.pixabay.com/photo/2020/10/21/18/07/laptop-5673901_960_720.jpg",
    price: 3500000,
    productName: "Laptop",
  },
  {
    image:
      "https://cdn.pixabay.com/photo/2020/10/21/18/07/laptop-5673901_960_720.jpg",
    price: 3500000,
    productName: "Laptop",
  },
  {
    image:
      "https://cdn.pixabay.com/photo/2020/10/21/18/07/laptop-5673901_960_720.jpg",
    price: 3500000,
    productName: "Laptop",
  },
  {
    image:
      "https://cdn.pixabay.com/photo/2020/10/21/18/07/laptop-5673901_960_720.jpg",
    price: 3500000,
    productName: "Laptop",
  },
  {
    image:
      "https://cdn.pixabay.com/photo/2020/10/21/18/07/laptop-5673901_960_720.jpg",
    price: 3500000,
    productName: "Laptop",
  },
  {
    image:
      "https://cdn.pixabay.com/photo/2020/10/21/18/07/laptop-5673901_960_720.jpg",
    price: 3500000,
    productName: "Laptop",
  },
];

function currencyFormat(num) {
  return "$" + num.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
}

function renderProduct(arr) {
  for (const product of arr) {
    const productCard = document.createElement("div");
    productCard.classList.add("card-product");

    const img = document.createElement("img");
    img.classList.add("product-img");
    img.setAttribute("src", product.image);
    img.setAttribute("alt", product.productName);
    img.addEventListener("click", toggleDetailProduct);

    function toggleDetailProduct() {
      DetailContent.classList.add("scale");
      ShoppingCart.classList.remove("translate");
      DeskMenu.classList.remove("translate");
    }

    const cardContent = document.createElement("div");
    cardContent.classList.add("card-subtitle_content");

    const cardSubtitle = document.createElement("p");
    cardSubtitle.classList.add("card-subtitle");
    cardSubtitle.innerHTML = ` <span class="prices">${currencyFormat(
      product.price
    )}</span>
    ${product.productName}`;

    const iconCartContent = document.createElement("figure");
    iconCartContent.classList.add("icon_cart");

    const iconCart = document.createElement("img");
    iconCart.setAttribute("src", "./images/icons/bt_add_to_cart.svg");
    iconCart.setAttribute("alt", "icon carShop");

    productCard.append(img, cardContent);
    cardContent.append(cardSubtitle, iconCartContent);
    iconCartContent.appendChild(iconCart);
    CardProducts.appendChild(productCard);
  }
}

renderProduct(ProductList);
