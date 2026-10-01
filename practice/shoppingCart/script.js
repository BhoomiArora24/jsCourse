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

    products.forEach(function (product) {
      const card = document.createElement("div");
      card.className =
        "bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-200";

      const productName = document.createElement("h3");
      productName.className = "text-xl font-semibold";
      productName.textContent = product.prodName;

      card.appendChild(productName);

      const colors = document.createElement("p");
      colors.className = "text-sm text-gray-500";
      colors.textContent = `Colors: ${product.color.join(", ")}`;

      card.appendChild(colors);

      const sizes = document.createElement("p");
      sizes.className = "text-sm text-gray-500";
      sizes.textContent = `Sizes: ${product.size.join(", ")}`;

      card.appendChild(sizes);

      const productPrice = document.createElement("p");
      productPrice.className = "font-semibold";
      productPrice.textContent = `₹${product.price}`;

      card.appendChild(productPrice);

      const stock = document.createElement("button");
      stock.className = "text-sm text-green-600";
      stock.textContent = `${product.stock} items in stock`;

      card.appendChild(stock);

      const productContainer = document.getElementById("productContainer");
      productContainer.appendChild(card);
    });
    stock.id = "stockBtn";
  };

  this.addToCart = function (products) {
    let count = 0;
    const div = document.createElement("div");
    div.className = "relative";

    const button = document.createElement("button");
    button.className =
      "bg-black text-white px-5 py-2.5 rounded-lg hover:bg-gray-800 transition";

    button.textContent = "🛒 Cart";

    const span = document.createElement("span");
    span.id = "cartCount";
    span.className =
      "ml-2 bg-white text-black px-2 py-0.5 rounded-full text-sm";
    span.textContent = count;

    button.appendChild(span);
    div.appendChild(button);

    const styleCart = document.querySelector(".styleCart");
    styleCart.appendChild(div);

    const stock = document.getElementById("stockBtn");
    stock.addEventListener("click", function(){
      span.textContent = ++count;
      stock.textContent = products.stock - count;
    })
  };
}

const shoppingCart = new Cart();
shoppingCart.addItems(products);
shoppingCart.addToCart(products);