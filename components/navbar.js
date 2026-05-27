export function Navbar() {
  return `
    <nav id="navbar">
      <div class="nav-inner">

        <a href="index.html" class="nav-logo">
          <img src="https://framerusercontent.com/images/fl0XhJvszyfT3Ws5BKRfCVwzIA.png" alt="Cabral Repostería">
        </a>

        <div class="nav-links">
          <a href="../pages/Pasteles.html" class="nav-link">Pasteles</a>
          <a href="#promociones" class="nav-link">Promociones</a>
          <a href="#personaliza" class="nav-link">Personaliza</a>
          <a href="#rebanadas" class="nav-link">Rebanadas</a>
          <a href="#ubicacion" class="nav-link">Contacto</a>
        </div>

        <div style="display:flex;align-items:center;gap:8px">

          <button class="nav-cart-btn" onclick="openCart()" aria-label="Carrito de compras">

            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M4 4h2l2 10h10l2-6H7"/>
              <circle cx="9" cy="20" r="1"/>
              <circle cx="19" cy="20" r="1"/>
            </svg>

            <span class="cart-count" id="cart-badge">0</span>

          </button>

          <button class="nav-hamburger" id="hamburger" aria-label="Menú">
            <span></span>
            <span></span>
            <span></span>
          </button>

        </div>

      </div>
    </nav>
  `
}