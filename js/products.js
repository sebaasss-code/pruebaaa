import { supabase }
from "./supabase.js"

export let PASTELES = []

export let REBANADAS = []

export async function fetchProductos() {

  const { data, error } =
    await supabase
      .from("productos")
      .select("*")
      .order("created_at", {
        ascending: true
      })

  console.log(data)
  console.log(error)

  if (error) return

  PASTELES =
    data.filter(
      item => item.tipo === "pastel"
    )

  REBANADAS =
    data.filter(
      item => item.tipo === "rebanada"
    )

  console.log("PASTELES", PASTELES)
  console.log("REBANADAS", REBANADAS)
}