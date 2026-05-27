import {
  PASTELES,
  REBANADAS
}
from "./products.js"

export function renderPasteles() {

  const container =
    document.getElementById(
      "pasteles-list"
    )

  if (!container) return

  container.innerHTML =
    PASTELES.map(p => `

      <div class="pastel-item">

        <img
          src="${p.imagen}"
          alt="${p.nombre}"
          width="200"
        >

        <h3>${p.nombre}</h3>

        <p>$${p.precio}</p>

      </div>

    `).join("")
}

export function renderRebanadas() {

  const container =
    document.getElementById(
      "rebanadas-grid"
    )

  if (!container) return

  container.innerHTML =
    REBANADAS.map(r => `

      <div class="rebanada-card">

        <h3>${r.nombre}</h3>

        <p>$${r.precio}</p>

        <p>Stock: ${r.stock}</p>

      </div>

    `).join("")
}