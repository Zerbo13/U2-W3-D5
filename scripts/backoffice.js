const form = document.getElementById("product-form");
const message = document.getElementById("message");

// Recupera i prodotti già aggiunti dal backoffice
let addedProducts = JSON.parse(localStorage.getItem("addedProducts")) || [];

form.addEventListener("submit", function(e) {
  e.preventDefault();

  const newProduct = {
    _id: Date.now().toString(),
    name: document.getElementById("name").value.trim(),
    description: document.getElementById("description").value.trim(),
    brand: document.getElementById("brand").value.trim(),
    imageUrl: document.getElementById("imageUrl").value.trim(),
    price: parseFloat(document.getElementById("price").value)
  };

  // Controllo dei campi
  if (!newProduct.name || !newProduct.description || !newProduct.brand || !newProduct.imageUrl || isNaN(newProduct.price)) {
    showMessage("❌ Compila tutti i campi correttamente!", "danger");
    return;
  }

  // Aggiungi prodotto e salva nel localStorage
  addedProducts.push(newProduct);
  localStorage.setItem("addedProducts", JSON.stringify(addedProducts));

  showMessage("✅ Prodotto salvato con successo!", "success");
  form.reset();
});

function showMessage(text, type) {
  message.textContent = text;
  message.className = `alert alert-${type}`;
  message.classList.remove("d-none");
  setTimeout(() => message.classList.add("d-none"), 3000);
}

