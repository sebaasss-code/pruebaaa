export let cart = []

export function formatPrice(n) {
  return "$" + n.toLocaleString("es-MX", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })
}

export function updateCartCount() {

  const total = cart.reduce(
    (sum, item) => sum + item.qty,
    0
  )

  const badge =
    document.getElementById("cart-badge")

  if (!badge) return

  badge.textContent = total

  badge.classList.toggle(
    "visible",
    total > 0
  )
}

export function addToCart(product) {

  const existing = cart.find(
    item => item.id === product.id
  )

  if (existing) {
    existing.qty += 1
  } else {
    cart.push({
      id: product.id,
      name: product.name,
      price: product.price,
      qty: 1
    })
  }

  updateCartCount()
}

export function renderCartItems() {

  const container =
    document.getElementById("cart-items")

  const totalEl =
    document.getElementById("cart-total-price")

  if (!container || !totalEl) return

  if (cart.length === 0) {

    container.innerHTML = `
      <div class="cart-empty">
        <span style="font-size:2.5rem">
          🛒
        </span>

        <p>Tu carrito está vacío</p>
      </div>
    `

    totalEl.textContent =
      formatPrice(0)

    return
  }

  container.innerHTML = cart.map(item => `
    <div class="cart-item">

      <div class="cart-item-name">
        ${item.name}
      </div>

      <div class="cart-item-qty">
        ${item.qty}
      </div>

      <div class="cart-item-price">
        ${formatPrice(item.price * item.qty)}
      </div>

    </div>
  `).join("")

  const total = cart.reduce(
    (sum, item) =>
      sum + item.price * item.qty,
    0
  )

  totalEl.textContent =
    formatPrice(total)
}