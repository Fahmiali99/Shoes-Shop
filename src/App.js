import logo from "./logo.svg";
import "./App.css";

function App() {
  const titleSepatu = "Jordan Dior";
  const harga = "$9123";
  const judul = "ALL SHOES";

  return (
    <div class="card text-center">
      <div class="card-header">
        <ul class=" nav nav-tabs card-header-tabs kanan">
          <li class="nav-item">
            <a class="nav-link nav-link active" href="#">
              All
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link disabled" href="#">
              Dior
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link disabled" href="#">
              Nike
            </a>
          </li>
        </ul>
      </div>
      <div class="card-body">
        <h5 class="card-title judul-page">{judul}</h5>
        <p class="container card-text mt-2">
        You can judge whether a woman is elegant by looking at her feet", wrote Christian Dior in The Little Dictionary of Fashion. Dior shoes are the essential finishing touch for a feminine look
        </p>

        <div class="card-group mt-5">
          <div class="card">
            <img src="assets/img/ddior.png"></img>
            <div class="card-body">
              <h5 class="card-title">{titleSepatu}</h5>
              <p class="price">USD {harga}</p>
              <p class="card-text">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
              <button class="btn btn-outline-primary mr-1 active keranjang" href="#">
                Buy
              </button>
              <button class="btn btn-outline-primary" href="#">
              <i class="fas fa-cart-plus"></i>
              </button>
              <p class="card-text">
                <small class="text-muted">Last updated 3 mins ago</small>
              </p>
            </div>
          </div>
          <div class="card">
            <img src="assets/img/ddior.png"></img>
            <div class="card-body">
              <h5 class="card-title">{titleSepatu}</h5>
              <p class="price">USD {harga}</p>
              <p class="card-text">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
              <button class="btn btn-outline-primary mr-1 active keranjang" href="#">
                Buy
              </button>
              <button class="btn btn-outline-primary" href="#">
              <i class="fas fa-cart-plus"></i>
              </button>
              <p class="card-text">
                <small class="text-muted">Last updated 3 mins ago</small>
              </p>
            </div>
          </div>
          <div class="card">
            <img src="assets/img/ddior.png"></img>
            <div class="card-body">
              <h5 class="card-title">{titleSepatu}</h5>
              <p class="price">USD {harga}</p>
              <p class="card-text">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
              <button class="btn btn-outline-primary mr-1 active keranjang" href="#">
                Buy
              </button>
              <button class="btn btn-outline-primary" href="#">
              <i class="fas fa-cart-plus"></i>
              </button>
              <p class="card-text">
                <small class="text-muted">Last updated 3 mins ago</small>
              </p>
            </div>
          </div>
        </div>

        <div class="card-group">
          <div class="card ">
            <img src="assets/img/ddior.png"></img>
            <div class="card-body">
              <h5 class="card-title">{titleSepatu}</h5>
              <p class="price">USD {harga}</p>
              <p class="card-text">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
              <button class="btn btn-outline-primary mr-1 active keranjang" href="#">
                Buy
              </button>
              <button class="btn btn-outline-primary" href="#">
              <i class="fas fa-cart-plus"></i>
              </button>
              <p class="card-text">
                <small class="text-muted">Last updated 3 mins ago</small>
              </p>
            </div>
          </div>
          <div class="card">
            <img src="assets/img/ddior.png"></img>
            <div class="card-body">
              <h5 class="card-title">{titleSepatu}</h5>
              <p class="price">USD {harga}</p>
              <p class="card-text">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
              <button class="btn btn-outline-primary mr-1 active keranjang" href="#">
                Buy
              </button>
              <button class="btn btn-outline-primary" href="#">
              <i class="fas fa-cart-plus"></i>
              </button>
              <p class="card-text">
                <small class="text-muted">Last updated 3 mins ago</small>
              </p>
            </div>
          </div>
          <div class="card">
            <img src="assets/img/ddior.png"></img>
            <div class="card-body">
              <h5 class="card-title">{titleSepatu}</h5>
              <p class="price">USD {harga}</p>
              <p class="card-text">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
              <button class="btn btn-outline-primary mr-1 active keranjang" href="#">
                Buy
              </button>
              <button class="btn btn-outline-primary" href="#">
              <i class="fas fa-cart-plus"></i>
              </button>
              <p class="card-text">
                <small class="text-muted">Last updated 3 mins ago</small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
