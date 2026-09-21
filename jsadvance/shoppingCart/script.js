const products = [
  {
    prodName: "Shorts",
    color: ["pink", "black", "brown"],
    size: ["xs", "s", "m"],
    price: 579,
    stock: 6,
  },
  {
    prodName: "Skorts",
    color: ["pink", "black", "brown", "blue"],
    size: ["xs", "s", "m", "l", "xl"],
    price: 579,
    stock: 6,
  },
  {
    prodName: "top",
    color: ["pink", "black", "brown", "orange", "green"],
    size: ["s", "m", "l", "xl"],
    price: 579,
    stock: 6,
  },
];

function Cart() {
  this.items = [];

  this.addItems = function (products) {
    this.items.push(products);
    const card = document.createElement("div");
    card.className =
      "bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-200";

    // Image
    const imageContainer = document.createElement("div");
    imageContainer.className =
      "h-56 bg-gray-200 flex items-center justify-center text-gray-400";
    imageContainer.textContent = "Product Image";

    card.appendChild(imageContainer);

    // Card content
    const cardContent = document.createElement("div");
    cardContent.className = "p-5";

    // Name + Price container
    const titlePrice = document.createElement("div");
    titlePrice.className = "flex items-center justify-between";

    const productName = document.createElement("h3");
    productName.className = "text-xl font-semibold";
    productName.textContent = "products[0].prodName";

    const productPrice = document.createElement("span");
    productPrice.className = "font-semibold";
    productPrice.textContent = "₹579";

    titlePrice.appendChild(productName);
    titlePrice.appendChild(productPrice);

    cardContent.appendChild(titlePrice);

    // Description
    const description = document.createElement("p");
    description.className = "text-sm text-gray-500 mt-2";
    description.textContent = "Available in multiple colors and sizes.";

    cardContent.appendChild(description);
 
    // Colors heading
    const colorsSection = document.createElement("div");
    colorsSection.className = "mt-4";

    const colorsTitle = document.createElement("p");
    colorsTitle.className = "text-sm font-medium mb-2";
    colorsTitle.textContent = "Colors";

    const colorsContainer = document.createElement("div");
    colorsContainer.className = "flex gap-2";

    colorsSection.appendChild(colorsTitle);
    colorsSection.appendChild(colorsContainer);

    cardContent.appendChild(colorsSection);

    // Sizes
    const sizesSection = document.createElement("div");
    sizesSection.className = "mt-4";

    const sizesTitle = document.createElement("p");
    sizesTitle.className = "text-sm font-medium mb-2";
    sizesTitle.textContent = "Sizes";

    const sizesContainer = document.createElement("div");
    sizesContainer.className = "flex gap-2";

    sizesSection.appendChild(sizesTitle);
    sizesSection.appendChild(sizesContainer);

    cardContent.appendChild(sizesSection);

    // Stock
    const stock = document.createElement("p");
    stock.className = "text-sm text-green-600 mt-4";
    stock.textContent = "6 items in stock";

    cardContent.appendChild(stock);

    // Button
    const button = document.createElement("button");
    button.className =
      "add-cart-btn w-full mt-5 bg-black text-white py-3 rounded-xl hover:bg-gray-800 transition";
    button.textContent = "Add to Cart";

    cardContent.appendChild(button);

    // Put content inside card
    card.appendChild(cardContent);

    // Finally put card on webpage
    const productContainer = document.getElementById("productContainer");

    productContainer.appendChild(card);
  };
}

const shoppingCart = new Cart();
