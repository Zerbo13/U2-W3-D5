
// ARRAY DEI PRODOTTI
const defaultProducts = [
  {
    _id: "1",
    name: "T-SHIRT CRUDELIA - MARRACASH",
    description: "T-Shirt unisex, manica corta, 100% cotone ring spun, taglio moderno.",
    brand: "MarraMerch",
    imageUrl: "./assets/cr-Photoroom.png",
    price: 40
  },
  {
    _id: "2",
    name: "Vinile 'Noi, Loro e Gli Altri'",
    description: "Dopo il successo dell’ultimo album NOI, LORO, GLI ALTRI certificato 4X Disco di Platino...",
    brand: "MarraMerch",
    imageUrl: "https://shop.universalmusic.it/cdn/shop/files/marracash-noi-loro-gli-altri-deluxe-doppio-vinile-1_9c608295-e96b-4295-97c0-b1dbf0512a74.png?v=1758184394&width=1024",
    price: 40.90
  },
  {
    _id: "3",
    name: "Felpa ESPLOSIONE - MARRAGEDDON",
    description: "Felpa 50% cotone filato open end e 50% poliestere, con cappuccio e tasca a marsupio...",
    brand: "MarraMerch",
    imageUrl: "./assets/marrageddon_2023_web_hoodie_esplosione_01-Photoroom.png",
    price: 60
  },
  {
    _id: "4",
    name: "Qualcosa In Cui Credere - La Mia Trilogia",
    description: "Cofanetto esclusivo in tiratura limitata e numerata con album, booklet e contenuti extra.",
    brand: "MarraMerch",
    imageUrl: "https://shop.universalmusic.it/cdn/shop/files/TUTTO.png?v=1760437757&width=1024",
    price: 199.90
  },
  {
    _id: "5",
    name: "SCIARPA BARONA - MARRACASH",
    description: "Sciarpa di alta qualità con trama raffinata e design esclusivo.",
    brand: "MarraMerch",
    imageUrl: "./assets/marracash_articoli-web_autunno_2022_barona_sc-Photoroom.png",
    price: 20
  },
  {
    _id: "6",
    name: "Marracash, Guè, Santeria, Doppio Vinile Laminato",
    description: "Santeria, primo joint album dei rapper Marracash e Guè, disco di svolta per l'hip hop italiano.",
    brand: "MarraMerch",
    imageUrl: "https://shop.universalmusic.it/cdn/shop/files/marracash-gue-santeria-doppio-vinile-laminato-1.png?v=1754312657&width=1024",
    price: 39.90
  },
  {
    _id: "7",
    name: "Marracash, È FINITA LA PACE, Vinile Autografato Numerato",
    description: "Settimo album in studio di Marracash, introspezione e autenticità in 13 tracce.",
    brand: "MarraMerch",
    imageUrl: "https://shop.universalmusic.it/cdn/shop/files/marracash-e-finita-la-pace-vinile-autografato-numerato-1.png?v=1754315188&width=1024",
    price: 31.90
  },
  {
    _id: "8",
    name: "Telo mare BOMBA - MARRAGEDDON",
    description: "Telo mare in microfibra 200 gr, dimensioni 77x180 cm, personalizzato con logo full color.",
    brand: "MarraMerch",
    imageUrl: "./assets/marrageddon_2023_telo_mare_bomba-Photoroom.png",
    price: 35
  }
];

//  PRODUTTI AGGIUNTI DAL BACKOFFICE

const addedProducts = JSON.parse(localStorage.getItem("addedProducts")) || [];

const products = [...defaultProducts, ...addedProducts];


const container = document.getElementById("product-list");
const message = document.getElementById("message");


function renderProducts() {
  container.innerHTML = "";

  if (products.length === 0) {
    message.classList.remove("d-none");
    message.textContent = "Ancora nessun prodotto inserito, ci scusiamo per il disagio!";
    return;
  } else {
    message.classList.add("d-none");
  }

  products.forEach(p => {
    container.innerHTML += `
      <div class="col-md-3 mb-3 ">
        <div class="card h-100 shadow-sm rounded-4">
          <img src="${p.imageUrl}" class="card-img-top" alt="${p.name}">
          <div class="card-body d-flex flex-column">
            <h5 class="card-title">${p.name}</h5>
            <p class="text-secondary mb-1"><strong>Brand:</strong> ${p.brand}</p>
            <!-- Descrizione limitata a 3 righe -->
            <p class="card-text small" style="overflow: hidden; display: -webkit-box; -webkit-line-clamp: 3; -webkit-box-orient: vertical;">
              ${p.description}
            </p>
            <p class="text-muted fw-bold">${p.price.toFixed(2)} €</p>
            <div class="mt-auto">
              <a href="detail.html?id=${p._id}" class="btn btn-primary btn-sm me-2">Dettagli</a>
            </div>
          </div>
        </div>
      </div>
    `;
  });
}


renderProducts();

