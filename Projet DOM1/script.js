document.addEventListener("DOMContentLoaded", () => {
  const cart = document.getElementById("cart");
  const totalDisplay = document.getElementById("total");

  // Mettre à jour le prix total
  function updateTotal() {
    let total = 0;
    document.querySelectorAll(".cart-item").forEach((item) => {
      const price = parseFloat(item.dataset.price);
      const quantity = parseInt(item.querySelector(".quantity").textContent);
      total += price * quantity;
    });
    totalDisplay.textContent = `${total}€`;
    
  }
  // Gestion des boutons "+"
  cart.addEventListener("click", (event) => {
    if (event.target.classList.contains("plus")) {
      const item = event.target.closest(".cart-item");
      const quantityElement = item.querySelector(".quantity");
      quantityElement.textContent = parseInt(quantityElement.textContent) + 1;
      updateTotal();
    }
  });
  // Gestion des boutons "-"
  cart.addEventListener("click", (event) => {
    if (event.target.classList.contains("minus")) {
      const item = event.target.closest(".cart-item");
      const quantityElement = item.querySelector(".quantity");
      let quantity = parseInt(quantityElement.textContent);
      if (quantity > 1) {
        quantityElement.textContent = quantity - 1;
        updateTotal();
      }
    }
  });

  // Gestion des boutons "Supprimer"
  cart.addEventListener("click", (event) => {
    if (event.target.classList.contains("remove")) {
      const item = event.target.closest(".cart-item");
      item.remove();
      updateTotal();
    }
  });

  // Gestion des boutons "Like"
  cart.addEventListener("click", (event) => {
    if (event.target.classList.contains("like")) {
      event.target.classList.toggle("liked");
    }
  });
  // Initialiser le prix total
  updateTotal();
});
