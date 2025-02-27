import { useState } from 'react'
import './Convert.css'
function Convert2() {
    const [km, setKM] = useState(0)
    const [milha, setMilha] = useState(0)
function converterDistancia() {
    let entrada = Number(prompt("Quilômetros: "))
    setMilha((entrada * 0.62137119).toFixed(2))
    setKM(entrada.toFixed(2))
}
  return (
    <div className="container-convert">
      <h2>KM ➡️ Milhas</h2>
    <button onClick={converterDistancia}>Converter</button>
    <p>
      Distância em KMs: {km}
    </p>
    <p>
      Distância em milhas: {milha}
    </p>
  </div>
  )
}

export default Convert2