document.addEventListener("DOMContentLoaded", () => {
  const cartItems = document.getElementById("cart-items");
  const cartTotal = document.getElementById("cart-total");
  let total = 0;

  document.querySelectorAll(".add-to-cart").forEach((button) => {
    button.addEventListener("click", () => {
      const price = parseFloat(button.getAttribute("data-price"));
      const productName = button.parentElement.querySelector("h2").innerText;

      const li = document.createElement("li");
      li.textContent = `${productName} - $${price}`;
      cartItems.appendChild(li);

      total += price;
      cartTotal.textContent = total.toFixed(2);
    });
  });
});
