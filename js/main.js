import {
  fetchProductos
}
from "./products.js"

import {
  renderPasteles,
  renderRebanadas
}
from "./ui.js"

document.addEventListener(
  "DOMContentLoaded",

  async () => {

    await fetchProductos()

    renderPasteles()

    renderRebanadas()

    console.log("Todo funcionando")
  }
)