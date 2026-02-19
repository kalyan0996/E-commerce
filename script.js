let cart = [];
let total = 0;

function addToCart(name, price) {
    cart.push({name, price});
    total += price;

    document.getElementById("cart-count").innerText = cart.length;
    displayCart();
}

function displayCart() {
    let cartItems = document.getElementById("cart-items");
    cartItems.innerHTML = "";

    cart.forEach(item => {
        let li = document.createElement("li");
        li.textContent = item.name + " - ₹" + item.price;
        cartItems.appendChild(li);
    });

    document.getElementById("total").innerText = total;
}
