// Prende l'id del prodotto dall'URL
const params = new URLSearchParams(window.location.search);
const id = params.get("id");

// Recupera i prodotti salvati nel localStorage
const products = JSON.parse(localStorage.getItem("products")) || [];

// Cerca il prodotto
const product = products.find(p => String(p._id) === String(id));

// Contenitore pagina
const container = document.getElementById("detail-container");

// Mostra i dettagli
if (product) {
  container.innerHTML = `
    <div class="col-md-8">
      <div class="card shadow-sm">

        <div class="d-flex justify-content-center p-3 bg-white">
          <img src="${product.imageUrl}" 
               class="card-img-top" 
               alt="${product.name}" 
               style="width: 400px; object-fit: cover;">
        </div>

        <div class="card-body">
          <h3 class="card-title">${product.name}</h3>
          <h5 class="text-muted">${product.brand}</h5>
          <p class="mt-3">${product.description}</p>
          <p class="fw-bold fs-5">${product.price.toFixed(2)} €</p>

          <a href="index.html" class="btn btn-outline-secondary mt-3">Torna alla Home</a>
        </div>

      </div>
    </div>
  `;
} else {
  container.innerHTML = `
    <div class="alert alert-danger">
      Prodotto non trovato 😢
    </div>
  `;
}
